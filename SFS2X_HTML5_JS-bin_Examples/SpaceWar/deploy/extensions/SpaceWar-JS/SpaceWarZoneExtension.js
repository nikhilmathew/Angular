var JSONUtil = Java.type('com.smartfoxserver.v2.util.JSONUtil');

var CFG_STARSHIPS_KEY = "starships"
var CFG_WEAPONS_KEY = "weapons"

var  configuration = null;

function init() 
{
	try
	{
		// Load game configuration file and setup game
		setupGame()
		
		// Add listener to send the list of available starship models to the user upon login
		addEventHandler(SFSEventType.USER_LOGIN, onLogin)

		trace("SpaceWar JS Extension init complete!")
	}
	catch (ex)
	{
		trace("Error starting up: " + ex.getMessage())
	}
}

function destroy() 
{
	trace("SpaceWar JS Extension destroyed!")
}

/**
 * Method used by the Room Extension to communicate with the Zone Extension.
 */
function handleInternalMessage(cmdName, params) 
{
	if (cmdName == "getStarshipCfg")
	{
		return getStarshipsCfg().getSFSObject(params)
	}

	else if (cmdName == "getWeaponCfg")
	{		
		var starshipModel = params.getUtfString("shipModel")
		var weaponNum = params.getInt("weaponNum")
		var weaponModel = getStarshipsCfg().getSFSObject(starshipModel).getUtfString("weapon" + weaponNum)
		
		return getWeaponsCfg().getSFSObject(weaponModel)
	}
	
	return null
}

/**
 * Returns the starships configuration data to be sent to clients upon login.
 * See LoginEventhandler class.
 */
function getStarshipsCfg()
{
	return configuration.getSFSObject(CFG_STARSHIPS_KEY)
}

/**
 * Returns the weapons configuration data to be sent to clients upon login.
 * See LoginEventhandler class.
 */
function getWeaponsCfg()
{
	return configuration.getSFSObject(CFG_WEAPONS_KEY)
}

/**
 * Setups the game by loading an external configuration file and parsing it.
 */
function setupGame()
{
	// Load configuration file, which contains game settings in JSON format
	// As the latest JSON parser we use in SFS2X doesn't parse comments, we have to strip them before processing the file
	var cfgFile = getFileApi().readTextFile(this.getCurrentFolder() + "SpaceWar.cfg")
	var cfgData = JSONUtil.stripComments(cfgFile)
	
	// Convert to temporary SFSObject
	var tempCfg = SFSObject.newFromJsonData(cfgData)
	
	// Build final configuration object
	
	// Starships
	var starshipsCfg = tempCfg.getSFSArray(CFG_STARSHIPS_KEY)
	var starships = new SFSObject()
	
	for (var i = 0; i < starshipsCfg.size(); i++)
	{
		var starship = starshipsCfg.getSFSObject(i)
		var model = starship.getUtfString("model")
		
		starships.putSFSObject(model, starship)
	}
	
	// Weapons
	var weaponsCfg = tempCfg.getSFSArray(CFG_WEAPONS_KEY)
	var weapons = new SFSObject()
	
	for (var i = 0; i < weaponsCfg.size(); i++)
	{
		var weapon = weaponsCfg.getSFSObject(i)
		var model = weapon.getUtfString("model")
		
		weapons.putSFSObject(model, weapon)
	}
	
	// Save configuration for later user
	configuration = new SFSObject()
	configuration.putSFSObject(CFG_STARSHIPS_KEY, starships)
	configuration.putSFSObject(CFG_WEAPONS_KEY, weapons)
}

// --- Event Handlers ---------------------------------------------------------

function onLogin(event) 
{
	// Send starship and weapon models to user as outgoing parameters
	var outData = event.getParameter(SFSEventParam.LOGIN_OUT_DATA)
    outData.putSFSObject("starships", getStarshipsCfg())
    outData.putSFSObject("weapons", getWeaponsCfg())
}


