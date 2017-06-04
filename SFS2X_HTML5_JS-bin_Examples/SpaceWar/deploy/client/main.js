// Set constants (see also /src/other/game-constants.js)
var EVENT_PRE_CONNECTION_ATTEMPT = "onPreConectionAttempt";
var EVENT_ACCESS_GRANTED = "accessGranted";
var EVENT_SHIP_SELECTED = "shipSelected";
var EVENT_SYSTEM_ENTERED = "systemEntered";

// Initialize variables
var sfs = null;
var username = "";
var spritesheet = null;
var starshipModels = null;
var weaponModels = null;
var debugTrajectory = false;

// Create SmartFox client configuration object
var sfsConfig = {};
sfsConfig.host = "127.0.0.1";
sfsConfig.port = 8080;
sfsConfig.zone = "SpaceWar";
sfsConfig.debug = false;

// Start the game
cc.game.onStart = onStart;
cc.game.run();

//-------------------------------------------------------------------------

function onStart()
{
	cc.log("SpaceWar game started");

	// Add listeners to custom events dispatched by scenes
	// They usually cause a scene change
	cc.eventManager.addCustomListener(EVENT_PRE_CONNECTION_ATTEMPT, onPreConnectionAttempt);
	cc.eventManager.addCustomListener(EVENT_ACCESS_GRANTED, onAccessGranted);
	cc.eventManager.addCustomListener(EVENT_SHIP_SELECTED, onShipSelected);
	cc.eventManager.addCustomListener(EVENT_SYSTEM_ENTERED, onSystemEntered);

	// Load game resources
	// (see src/resources.js)
	cc.LoaderScene.preload(g_resources, onResourcesLoaded, this);
}

function onResourcesLoaded()
{
	// Generate spritesheet
	cc.spriteFrameCache.addSpriteFrames(res.spritesheet_plist);

	// Show title scene
	showTitleScene();
}

/**
 * Shows the title scene removing any previous scene displayed.
 */
function showTitleScene(errorMsg)
{
	// Show title scene
	// (see src/scenes/title.js)
    cc.director.runScene(new TitleScene(username, errorMsg));
}

//------------------------------------
// SFS EVENT HANDLERS
//------------------------------------

function onConnectionLost(evtParams)
{
	// Remove SFSEvent listeners
	sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost);

	// Retrieve disconnection reason
	var reason = evtParams.reason;
	var errorMsg = "";
	
	if (reason !== SFS2X.ClientDisconnectionReason.MANUAL)
	{
		// Set message to be displayed in Title scene
		if (reason === SFS2X.ClientDisconnectionReason.IDLE)
			errorMsg = "A disconnection occurred due to inactivity";
		else if (reason === SFS2X.ClientDisconnectionReason.KICK)
			errorMsg = "You have been kicked by the administrator";
		else if (reason === SFS2X.ClientDisconnectionReason.BAN)
			errorMsg = "You have been banned by the administrator";
		else
			errorMsg = "A disconnection occurred due to unknown reason; please check the server log";
	}
	else
	{
		// Manual disconnection is usually ignored
	}

	// Go back to title scene and display reason
	if (!(cc.director.getRunningScene() instanceof TitleScene))
		showTitleScene(errorMsg);
}

//------------------------------------
// GAME EVENT HANDLERS
//------------------------------------

/**
 * Creates a new instance of the main SmartFox class.
 * Also registers the CONNECTION_LOST event handler.
 */
function onPreConnectionAttempt(event)
{
	cc.log("Praparing for SFS connection");

	// Create SmartFox client instance
	sfs = new SFS2X.SmartFox(sfsConfig);
	
	// Set debugging level
	sfs.logger.level = SFS2X.LogLevel.INFO;

	// Add event listeners
	// Here we just add the listener to the connection lost event, which is needed to reset the game
	// Other listeners are added by scenes themselves, to handle their inner logic
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost, this);
	
	cc.log("SFS2X JavaScript API v" + sfs.version);
}

/**
 * Upon successful login, saves game configuration data received from server and shows the Starship Selection scene.
 */
function onAccessGranted(event)
{
	// Enable lag monitor
	sfs.enableLagMonitor(true, 1, 5);

	// Save username in case it was assigned by the server (guest login for example)
	username = event.getUserData().username;

	// Get game config returned by the game's Zone Extension and passed to this listener by the Title scene
	var gameConfig = event.getUserData().config;

	// Retrieve starship models and weapon models from custom data sent by the Zone Extension
	starshipModels = gameConfig.getSFSObject("starships");
	weaponModels = gameConfig.getSFSObject("weapons");
	
	// Get trajectory debug flag
	debugTrajectory = gameConfig.getBool("debug");

	// Show starship selection screen, passing the list of available starship models to draw the corresponding sprites
	// (see /src/scenes/starship-selection.js)
	cc.director.runScene(new StarshipSelectionScene(starshipModels));
}

/**
 * On starship selected, saves it to the User Variables and shows the Solar System Selection scene.
 */
function onShipSelected(event)
{
	// Save selected starship model to User Variables
	var shipModelUV = new SFS2X.SFSUserVariable(UV_MODEL, event.getUserData().model);
	sfs.send( new SFS2X.SetUserVariablesRequest([shipModelUV]) );

	// Show solar system selection scene, passing the room list to display the corresponding sprites
	// (see /src/scenes/solar-system-selection.js)
	// NOTE: the list was received automatically upon login
	cc.director.runScene(new SolarSystemSelectionScene(sfs.getRoomList()));
}

/**
 * On successful MMORoom join, go to the main Game scene.
 */
function onSystemEntered(event)
{
	// Show game scene, passing the lists of available starship models and weapons
	// (see /src/scenes/game.js)
	cc.director.runScene(new GameScene(starshipModels, weaponModels, debugTrajectory));

	// NOTE
	// Upon Room join, the server side Extension of the game sets the user position in the User Variables
	// This in turn triggers a USER_VARIABLES_UPDATE event on the client, which is catched by the Game scene to create the player's starship
}


