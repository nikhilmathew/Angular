package sfs2x.extensions.games.spacewar;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

import sfs2x.extensions.games.spacewar.evthandlers.LoginEventHandler;

import com.smartfoxserver.v2.core.SFSEventType;
import com.smartfoxserver.v2.entities.data.ISFSArray;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.SFSExtension;
import com.smartfoxserver.v2.util.JSONUtil;

public class SpaceWarZoneExtension extends SFSExtension
{
	private static final String CFG_STARSHIPS_KEY = "starships";
	private static final String CFG_WEAPONS_KEY = "weapons";
	
	private ISFSObject configuration;
	
	@Override
	public void init()
	{
		try
		{
			// Load game configuration file and setup game
			setupGame();
			
			// Add listener to send the list of available starship models to the user upon login
			addEventHandler(SFSEventType.USER_LOGIN, LoginEventHandler.class);
		}
		catch (IOException e)
		{
			e.printStackTrace();
		}
	}
	
	/**
	 * Method used by the Room Extension to communicate with the Zone Extension.
	 */
	@Override
	public Object handleInternalMessage(String cmdName, Object params)
	{
		if (cmdName.equals("getStarshipCfg"))
		{
			String starshipModel = (String) params;
			return getStarshipsCfg().getSFSObject(starshipModel);
		}
		else if (cmdName.equals("getWeaponCfg"))
		{
			ISFSObject data = (ISFSObject) params;
			
			String starshipModel = data.getUtfString("shipModel");
			int weaponNum = data.getInt("weaponNum");
			String weaponModel = getStarshipsCfg().getSFSObject(starshipModel).getUtfString("weapon" + weaponNum);
			
			return getWeaponsCfg().getSFSObject(weaponModel);
		}
		
		return null;
	}
	
	/**
	 * Returns the starships configuration data to be sent to clients upon login.
	 * See LoginEventhandler class.
	 */
	public ISFSObject getStarshipsCfg()
	{
		return configuration.getSFSObject(CFG_STARSHIPS_KEY);
	}
	
	/**
	 * Returns the weapons configuration data to be sent to clients upon login.
	 * See LoginEventhandler class.
	 */
	public ISFSObject getWeaponsCfg()
	{
		return configuration.getSFSObject(CFG_WEAPONS_KEY);
	}
	
	/**
	 * Setups the game by loading an external configuration file and parsing it.
	 */
	private void setupGame() throws IOException
	{
		// Load configuration file, which contains game settings in JSON format
		// As the latest JSON parser we use in SFS2X doesn't parse comments, we have to strip them before processing the file
		String cfgData = JSONUtil.stripComments(FileUtils.readFileToString(new File(this.getCurrentFolder() + "SpaceWar.cfg")));
		
		// Convert to temporary SFSObject
		ISFSObject tempCfg = SFSObject.newFromJsonData(cfgData);
		
		// Build final configuration object
		
		// Starships
		ISFSArray starshipsCfg = tempCfg.getSFSArray(CFG_STARSHIPS_KEY);
		ISFSObject starships = new SFSObject();
		
		for (int i = 0; i < starshipsCfg.size(); i++)
		{
			ISFSObject starship = starshipsCfg.getSFSObject(i);
			String model = starship.getUtfString("model");
			
			starships.putSFSObject(model, starship);
		}
		
		// Weapons
		ISFSArray weaponsCfg = tempCfg.getSFSArray(CFG_WEAPONS_KEY);
		ISFSObject weapons = new SFSObject();
		
		for (int i = 0; i < weaponsCfg.size(); i++)
		{
			ISFSObject weapon = weaponsCfg.getSFSObject(i);
			String model = weapon.getUtfString("model");
			
			weapons.putSFSObject(model, weapon);
		}
		
		// Save configuration for later user
		configuration = new SFSObject();
		configuration.putSFSObject(CFG_STARSHIPS_KEY, starships);
		configuration.putSFSObject(CFG_WEAPONS_KEY, weapons);
	}
}
