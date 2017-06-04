package sfs2x.extensions.games.spacewar;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import sfs2x.extensions.games.spacewar.core.Game;
import sfs2x.extensions.games.spacewar.evthandlers.UserJoinRoomEventHandler;
import sfs2x.extensions.games.spacewar.evthandlers.UserLeaveRoomEventHandler;
import sfs2x.extensions.games.spacewar.reqhandlers.ControlRequestHandler;

import com.smartfoxserver.v2.SmartFoxServer;
import com.smartfoxserver.v2.api.ISFSMMOApi;
import com.smartfoxserver.v2.core.SFSEventType;
import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.entities.variables.SFSUserVariable;
import com.smartfoxserver.v2.entities.variables.UserVariable;
import com.smartfoxserver.v2.extensions.SFSExtension;
import com.smartfoxserver.v2.mmo.BaseMMOItem;
import com.smartfoxserver.v2.mmo.IMMOItemVariable;
import com.smartfoxserver.v2.mmo.MMOItem;
import com.smartfoxserver.v2.mmo.MMOItemVariable;
import com.smartfoxserver.v2.mmo.MMORoom;
import com.smartfoxserver.v2.mmo.Vec3D;
import com.smartfoxserver.v2.util.TaskScheduler;


public class SpaceWarRoomExtension extends SFSExtension
{
	// USER VARIABLES
	private static final String UV_MODEL = "sModel";
	private static final String UV_X = "x";
	private static final String UV_Y = "y";
	private static final String UV_VX = "vx";
	private static final String UV_VY = "vy";
	private static final String UV_DIR = "d";
	private static final String UV_THRUST = "t";
	private static final String UV_ROTATE = "r";
	
	// MMOITEM VARIABLES
	private static final String IV_TYPE = "iType";
	private static final String IV_MODEL = "iModel";
	private static final String IV_X = "x";
	private static final String IV_Y = "y";
	private static final String IV_VX = "vx";
	private static final String IV_VY = "vy";
	
	// MMOITEM TYPES
	private static final String ITYPE_WEAPON = "weapon";
	
	// REQUESTS FROM CLIENT
	private static final String REQ_CONTROL = "control";
	
	// RESPONSES TO CLIENT
	private static final String RES_SHOT_XPLODE = "shot_xplode";
	
	private SmartFoxServer sfs;
	private ISFSMMOApi mmoApi;
	private MMORoom room;
	
	private Game game;
	private ScheduledFuture<?> gameTask;
	
	@Override
	public void init()
	{
		room = (MMORoom) this.getParentRoom();
		
		// Get a reference to the SmartFoxServer instance
		sfs = SmartFoxServer.getInstance();
		
		// Get a reference to the MMO dedicated API
		mmoApi = sfs.getAPIManager().getMMOApi();
		
		// Register handler for user join/leave room events
		addEventHandler(SFSEventType.USER_JOIN_ROOM, UserJoinRoomEventHandler.class);
		addEventHandler(SFSEventType.USER_LEAVE_ROOM, UserLeaveRoomEventHandler.class);
		addEventHandler(SFSEventType.USER_DISCONNECT, UserLeaveRoomEventHandler.class);
		
		// Register handler for client requests
		addRequestHandler(REQ_CONTROL, ControlRequestHandler.class);
		
		// Create main game core
		game = new Game(this);
		
		// Schedule task: executes the game logic on the same frame basis (25 fps) used by the Flash client
		// We use a single thread to avoid concurrency issues in checking game objects collisions
		TaskScheduler sched = new TaskScheduler(1);
		gameTask = sched.scheduleAtFixedRate(game, 0, 40, TimeUnit.MILLISECONDS);
	}
	
	@Override
	public void destroy()
	{
		gameTask.cancel(true);
	}
	
	/* -------------- PUBLIC METHODS -------------- */

	/**
	 * Getter used by handler classes to give inputs to the game core.
	 */
	public Game getGame()
	{
		return game;
	}
	
	/**
	 * Method called by the USER_JOIN_ROOM event handler.
	 * Creates the starship object for the new user and adds it to the game.
	 */
	public void addStarship(User user)
	{
		// Get starship model selected by user and saved in User Variables
		String shipModel = user.getVariable(UV_MODEL).getStringValue();
		
		// Retrieve starship settings
		// As the Room Extension and the Zone Extension are loaded by different Class Loaders,
		// the only way to exchange data is using the handleInternalMessage method
		// (fortunately we exchange an SFSObject between the two, so no class casting issues here)
		ISFSObject settings = (ISFSObject) this.getParentZone().getExtension().handleInternalMessage("getStarshipCfg", shipModel);
		
		// Add starship to game
		game.createStarship(user.getId(), settings);
	}
	
	/**
	 * Method called by the USER_LEAVE_ROOM and USER_DISCONNECT event handlers.
	 * Removes the starship object of the gone user from the game.
	 */
	public void removeStarship(int userId)
	{
		game.removeStarship(userId);
	}
	
	/**
	 * Method called by the Control request handler.
	 * Retrieves the fired weapon settings.
	 */
	public void fireWeapon(User user, int weaponNum)
	{
		// Get starship model selected by user and saved in User Variables
		String shipModel = user.getVariable(UV_MODEL).getStringValue();
		
		// Retrieve weapon settings
		// As the Room Extension and the Zone Extension are loaded by different Class Loaders,
		// the only way to exchange data is using the handleInternalMessage method
		// (fortunately we exchange two SFSObjects between the two, so no class casting issues here)
		ISFSObject data = new SFSObject();
		data.putUtfString("shipModel", shipModel);
		data.putInt("weaponNum", weaponNum);
		
		ISFSObject settings = (ISFSObject) this.getParentZone().getExtension().handleInternalMessage("getWeaponCfg", data);
		
		// Add weapon shot to game
		game.createWeaponShot(user.getId(), settings);
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
	public void setStarshipState(int userId, double x, double y, double vx, double vy, double direction, boolean thrust, int rotation, boolean fireClientEvent)
	{
		User user = room.getUserById(userId);
		
		if (user != null)
		{
			// (A) Set User Variables
			List<UserVariable> vars = new ArrayList<UserVariable>();
			vars.add(new SFSUserVariable(UV_X, x));
			vars.add(new SFSUserVariable(UV_Y, y));
			vars.add(new SFSUserVariable(UV_VX, vx));
			vars.add(new SFSUserVariable(UV_VY, vy));
			vars.add(new SFSUserVariable(UV_DIR, direction));
			vars.add(new SFSUserVariable(UV_THRUST, thrust));
			vars.add(new SFSUserVariable(UV_ROTATE, rotation));
			
			getApi().setUserVariables(user, vars, fireClientEvent, false);
			
			// (B) Set user position in Proximity Manager system
			// Note that we convert the coordinates (expressed as double) to integers as we don't need the proximity to be very precise
			// the integer position (corresponding to the pixel position on the Flash stage) is more than enough
			int intX = (int)Math.round(x);
			int intY = (int)Math.round(y);
			Vec3D pos = new Vec3D(intX, intY, 0);
			mmoApi.setUserPosition(user, pos, this.getParentRoom());
		}
	}
	
	/**
	 * Saves starship's current rotation direction.
	 * In case the rotation is stopped, the same User Variable is set in the position update.
	 */
	public void setStarshipRotating(int userId, int direction)
	{
		// Set User Variables
		User user = room.getUserById(userId);
		
		if (user != null)
		{
			List<UserVariable> vars = new ArrayList<UserVariable>();
			vars.add(new SFSUserVariable(UV_ROTATE, direction));
			
			getApi().setUserVariables(user, vars, true, false);
		}
	}
	/**
	 * Creates an MMOItem corresponding to a weapon shot.
	 * The weapon model is set as an MMOItem Variable.
	 */
	public int addWeaponShot(String model, double x, double y, double vx, double vy)
	{
		// Create MMOItem with its Variables
		List<IMMOItemVariable> vars = buildWeaponShotMMOItemVars(x, y, vx, vy);
		vars.add(new MMOItemVariable(IV_MODEL, model));
		vars.add(new MMOItemVariable(IV_TYPE, ITYPE_WEAPON));
		
		MMOItem item = new MMOItem(vars);
		
		// Set MMOItem position in Proximity Manager system
		setMMOItemPosition(item, x, y);
		
		// Return item ID
		return item.getId();
	}
	
	/**
	 * Removes the MMOItem corresponding to a exploded weapon shot.
	 */
	public void removeWeaponShot(int mmoItemId)
	{
		BaseMMOItem item = room.getMMOItemById(mmoItemId);
		
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
	public void setWeaponShotPosition(int mmoItemId, double x, double y, double vx, double vy)
	{
		BaseMMOItem item = room.getMMOItemById(mmoItemId);
		
		// (A) Set MMOItem Variables
		List<IMMOItemVariable> vars = buildWeaponShotMMOItemVars(x, y, vx, vy);
		mmoApi.setMMOItemVariables(item, vars, false);
		
		// (B) Set MMOItem position in Proximity Manager system
		setMMOItemPosition(item, x, y);
	}
	
	/**
	 * Sends Extension response to clients to notify the a weapon shot exploded.
	 */
	public void notifyWeaponShotExplosion(int mmoItemId, double x, double y)
	{
		// Retrieve list of users which "see" the weapon shot (in other words the shot coordinates are in their AoI)
		int intX = (int)Math.round(x);
		int intY = (int)Math.round(y);
		Vec3D pos = new Vec3D(intX, intY, 0);
		
		List<User> users = room.getProximityList(pos);
		
		ISFSObject params = new SFSObject();
		params.putInt("id", mmoItemId);
		params.putInt("x", intX);
		params.putInt("y", intY);
		
		// Send Extension response
		this.send(RES_SHOT_XPLODE, params, users);
	}
	
	/**
	 * Retrieves the list of MMOItems in proximity of the passed coordinates.
	 * This is used to check the collisions of the starships with the weapon shots flying around.
	 */
	public List<Integer> getWeaponShotsList(double x, double y)
	{
		List<Integer> shots = new ArrayList<Integer>();
		
		// Get MMOItems in proximity
		int intX = (int)Math.round(x);
		int intY = (int)Math.round(y);
		Vec3D pos = new Vec3D(intX, intY, 0);
		
		List<BaseMMOItem> items = room.getProximityItems(pos);
		
		// Get all MMOItems of type "weapon"
		for (BaseMMOItem item : items)
		{
			boolean isWeapon = item.getVariable(IV_TYPE).getStringValue().equals(ITYPE_WEAPON);
			
			if (isWeapon)
				shots.add(item.getId());
		}
		
		return shots;
	}
	
	/* -------------- PRIVATE METHODS -------------- */
	
	private List<IMMOItemVariable> buildWeaponShotMMOItemVars(double x, double y, double vx, double vy)
	{
		List<IMMOItemVariable> vars = new ArrayList<IMMOItemVariable>();
		
		vars.add(new MMOItemVariable(IV_X, x));
		vars.add(new MMOItemVariable(IV_Y, y));
		vars.add(new MMOItemVariable(IV_VX, vx));
		vars.add(new MMOItemVariable(IV_VY, vy));
		
		return vars;
	}
	
	private void setMMOItemPosition(BaseMMOItem item, double x, double y)
	{
		// Note that we convert the coordinates (expressed as double) to integers as we don't need the proximity to be very precise
		// the integer position (corresponding to the pixel position on the Flash stage) is more than enough
		int intX = (int)Math.round(x);
		int intY = (int)Math.round(y);
		Vec3D pos = new Vec3D(intX, intY, 0);
		mmoApi.setMMOItemPosition(item, pos, this.getParentRoom());
	}
}
