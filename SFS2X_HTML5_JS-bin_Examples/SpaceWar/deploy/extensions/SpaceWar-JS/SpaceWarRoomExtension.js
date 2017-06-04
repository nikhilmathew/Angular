include('Classes.js')
include('Game.js')

// USER VARIABLES
var  UV_MODEL = "sModel"
var  UV_X = "x"
var  UV_Y = "y"
var  UV_VX = "vx"
var  UV_VY = "vy"
var  UV_DIR = "d"
var  UV_THRUST = "t"
var  UV_ROTATE = "r"

// MMOITEM VARIABLES
var  IV_TYPE = "iType"
var  IV_MODEL = "iModel"
var  IV_X = "x"
var  IV_Y = "y"
var  IV_VX = "vx"
var  IV_VY = "vy"

var ITYPE_WEAPON = "weapon"
var REQ_ROTATE = "control.rotate"
var REQ_THRUST = "control.thrust"
var REQ_FIRE = "control.fire"

var RES_SHOT_XPLODE = "shot_xplode"

var sfs = null
var mmoApi = getMMOApi()
var room = getParentRoom()
var game = null
var scheduler = null
var gameTask = null

function init() 
{
	// Register handler for user join/leave room events
	addEventHandler(SFSEventType.USER_JOIN_ROOM, onUserJoinRoom)
	addEventHandler(SFSEventType.USER_LEAVE_ROOM, onUserLeaveRoom)
	addEventHandler(SFSEventType.USER_DISCONNECT, onUserLeaveRoom)

	// Register handler for client requests
	addRequestHandler(REQ_ROTATE, onRotateReq)
	addRequestHandler(REQ_THRUST, onThrustReq)
	addRequestHandler(REQ_FIRE, onFireReq)

	// Create main game core
	game = new Game()

	// Create task scheduler
	scheduler = getApi().newScheduler()

	// Schedule task: executes the game logic on the same frame basis (25 fps) used by the Flash client
	gameTask = scheduler.scheduleAtFixedRate(game.run, 40, 0, game)
}

function destroy()
{
	if (gameTask != null)
		gameTask.cancel(true)
}

/**
 * Method called by the USER_JOIN_ROOM event handler.
 * Creates the starship object for the new user and adds it to the game.
 */
function addStarship(user)
{
	// Get starship model selected by user and saved in User Variables
	var shipModel = user.getVariable(UV_MODEL).getStringValue()
	
	// Retrieve starship settings
	// As the Room Extension and the Zone Extension are loaded by different Class Loaders,
	// the only way to exchange data is using the handleInternalMessage method
	// (fortunately we exchange an SFSObject between the two, so no class casting issues here)
	var settings = getParentZone().getExtension().handleInternalMessage("getStarshipCfg", shipModel)

	// Add starship to game
	game.createStarship(user.getId(), settings)
}

/**
 * Method called by the USER_LEAVE_ROOM and USER_DISCONNECT event handlers.
 * Removes the starship object of the gone user from the game.
 */
function removeStarship(userId)
{
	game.removeStarship(userId)
}


/**
 * Method called by the Control request handler.
 * Retrieves the fired weapon settings.
 */
function fireWeapon(user, weaponNum)
{
	// Get starship model selected by user and saved in User Variables
	var shipModel = user.getVariable(UV_MODEL).getStringValue()
	
	// Retrieve weapon settings
	// As the Room Extension and the Zone Extension are loaded by different Class Loaders,
	// the only way to exchange data is using the handleInternalMessage method
	// (fortunately we exchange two SFSObjects between the two, so no class casting issues here)
	var data = new SFSObject()
	data.putUtfString("shipModel", shipModel)
	data.putInt("weaponNum", weaponNum)
	
	var settings = getParentZone().getExtension().handleInternalMessage("getWeaponCfg", data);

	// Add weapon shot to game
	game.createWeaponShot(user.getId(), settings)
}


/* -------------- METHODS CALLED BY THE SIMULATOR -------------- */

/**
 * Saves starship's (A) position, velocity, direction, thrust and rotation state to User Variables and (B) position in SFS2X Proximity Manager system.
 * 
 * (A) If the starship is newly created or its state changed due to thrust force being applied, rotation completion or due to a missile hit,
 * the User Variables update is notified to the clients. In the first case (starship newly created), as the position in the Proximity Manager system
 * has not been set yet, only the starship owner will receive the event, allowing his client to create his own starship in the
 * right place and start the simulation; in the second case all clients having the starship owner in their proximity list can
 * synchronize the simulated trajectory with the server's one.
 * 
 * (B) Setting the position in the Proximity Manager system makes the clients aware that a user entered their Area of Interest (AoI),
 * so that they can create his starship and run the simulation based on the position and velocity set in his User Variables (see A).
 *
 * @param userId The id of the starship's owner
 * @param x The starship's x coordinate
 * @param y The starship's y coordinate
 * @param vx The starship's velocity along the x axis
 * @param vy The starship's velocity along the y axis
 * @param direction The starship's direction
 * @param thruster True it the starship's thruster is on
 * @param rotation The starship's rotation direction (-1 = couterclockwise; 0 = no rotation; +1 clockwise)
 * @param fireClientEvent Send update to clients
 */
function setStarshipState(userId, x, y, vx, vy, direction, thrust, rotation, fireClientEvent)
{
	var user = room.getUserById(userId)

	if (user != null)
	{
		// (A) Set User Variables

		var vars = [
			new SFSUserVariable(UV_X, x),
			new SFSUserVariable(UV_Y, y),
			new SFSUserVariable(UV_VX, vx),
			new SFSUserVariable(UV_VY, vy),
			new SFSUserVariable(UV_DIR, direction),
			new SFSUserVariable(UV_THRUST, thrust),
			new SFSUserVariable(UV_ROTATE, rotation)
		]
		
		getApi().setUserVariables(user, vars, fireClientEvent, false);
		
		// (B) Set user position in Proximity Manager system
		// Note that we convert the coordinates (expressed as double) to integers as we don't need the proximity to be very precise
		// the integer position (corresponding to the pixel position on the Flash stage) is more than enough
		var intX = Math.round(x)
		var intY = Math.round(y)
		var pos = Vectors.newVec3D(intX, intY, 0)

		mmoApi.setUserPosition(user, pos, room);
	}
}
	
/**
 * Saves starship's current rotation direction.
 * In case the rotation is stopped, the same User Variable is set in the position update.
 */
function setStarshipRotating(userId, direction)
{
	// Set User Variables
	var user = room.getUserById(userId)
	
	if (user != null)
	{
		getApi().setUserVariables(user, [new SFSUserVariable(UV_ROTATE, direction)], true, false)
	}
}
/**
 * Creates an MMOItem corresponding to a weapon shot.
 * The weapon model is set as an MMOItem Variable.
 */
function addWeaponShot(model, x, y, vx, vy)
{
	// Create MMOItem with its Variables
	var vars = buildWeaponShotMMOItemVars(x, y, vx, vy)
	vars.push(new MMOItemVariable(IV_MODEL, model))
	vars.push(new MMOItemVariable(IV_TYPE, ITYPE_WEAPON))
	
	var item = new MMOItem(vars);
	
	// Set MMOItem position in Proximity Manager system
	setMMOItemPosition(item, x, y);
	
	// Return item ID
	return item.getId()
}

/**
 * Removes the MMOItem corresponding to a exploded weapon shot.
 */
function removeWeaponShot(mmoItemId)
{
	var item = room.getMMOItemById(mmoItemId)
	mmoApi.removeMMOItem(item);
}

/**
 * Saves weapon shot's (A) position and velocity to MMOItem Variables and (B) position in SFS2X Proximity Manager system.
 * 
 * (A) MMOItem Variables update is never notified to clients because they don't change after the shot is fired.
 * They are used to store the weapon type and velocity to be transmitted to the clients as soon as the MMOItem enters their AoI.
 * 
 * (B) Setting the position in the Proximity Manager system makes the clients aware that a weapon shot entered their Area of Interest (AoI),
 * so that they can create its sprite and run the simulation based on the position and velocity set in its MMOItem Variables (see A).
 * 
 * @param mmoItemId The ID of the MMOItem corresponding to the weapon being fired
 * @param x The shot's x coordinate
 * @param y The shot's y coordinate
 * @param vx The shot's velocity along the x axis
 * @param vy The shot's velocity along the y axis
 */
function setWeaponShotPosition(mmoItemId, x, y, vx, vy)
{
	var item = room.getMMOItemById(mmoItemId)
	
	// (A) Set MMOItem Variables
	var vars = buildWeaponShotMMOItemVars(x, y, vx, vy)
	mmoApi.setMMOItemVariables(item, vars, false)
	
	// (B) Set MMOItem position in Proximity Manager system
	setMMOItemPosition(item, x, y);
}

/**
 * Sends Extension response to clients to notify the a weapon shot exploded.
 */
function notifyWeaponShotExplosion(mmoItemId, x, y)
{
	// Retrieve list of users which "see" the weapon shot (in other words the shot coordinates are in their AoI)
	var intX = Math.round(x)
	var intY = Math.round(y)
	var pos = Vectors.newVec3D(intX, intY, 0)
	
	var users = room.getProximityList(pos)
	
	var params = new SFSObject()
	params.putInt("id", mmoItemId)
	params.putInt("x", intX)
	params.putInt("y", intY)
	
	// Send Extension response
	send(RES_SHOT_XPLODE, params, users)
}

/**
 * Retrieves the list of MMOItems in proximity of the passed coordinates.
 * This is used to check the collisions of the starships with the weapon shots flying around.
 */
function getWeaponShotsList(x, y)
{
	var shots = []
	
	// Get MMOItems in proximity
	var intX = Math.round(x);
	var intY = Math.round(y);
	var pos = Vectors.newVec3D(intX, intY, 0)
	
	var items = room.getProximityItems(pos)

	items.forEach( function(item)
	{
		var isWeapon = item.getVariable(IV_TYPE).getStringValue().equals(ITYPE_WEAPON)
		
		if (isWeapon)
			shots.push(item.getId());
	})
	
	return shots
}

// -----------------------------------------------------
// Private Methods
// -----------------------------------------------------
function buildWeaponShotMMOItemVars(x, y, vx, vy)
{
	return [
		new MMOItemVariable(IV_X, x),
		new MMOItemVariable(IV_Y, y),
		new MMOItemVariable(IV_VX, vx),
		new MMOItemVariable(IV_VY, vy)
	]
}
	
function setMMOItemPosition(item, x, y)
{
	var intX = Math.round(x)
	var intY = Math.round(y)
	var pos = Vectors.newVec3D(intX, intY, 0)

	mmoApi.setMMOItemPosition(item, pos, room)
}

// -----------------------------------------------------
// Rquest Handlers
// -----------------------------------------------------


function onRotateReq(params, sender)
{
	game.rotateStarship(sender.getId(), params.getInt("dir"))
}

function onThrustReq(params, sender)
{
	game.thrustStarship(sender.getId(), params.getBool("go"))
}

function onFireReq(params, sender)
{	
	var weaponNum = params.getInt("wnum")

	fireWeapon(sender, weaponNum)
}

// -----------------------------------------------------
// Event Handlers
// -----------------------------------------------------
function onUserJoinRoom(event)
{
	var user = event.getParameter(SFSEventParam.USER)
	
	// Add user starship to game
	addStarship(user)
}

function onUserLeaveRoom(event)
{
	var user = event.getParameter(SFSEventParam.USER)

	removeStarship(user.getId())
}






























