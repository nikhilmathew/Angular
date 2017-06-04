package sfs2x.extensions.games.spacewar.evthandlers;

import sfs2x.extensions.games.spacewar.SpaceWarZoneExtension;

import com.smartfoxserver.v2.core.ISFSEvent;
import com.smartfoxserver.v2.core.SFSEventParam;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.exceptions.SFSException;
import com.smartfoxserver.v2.extensions.BaseServerEventHandler;


public class LoginEventHandler extends BaseServerEventHandler
{
	@Override
	public void handleServerEvent(ISFSEvent event) throws SFSException 
	{ 
		// Retrieve starship models from Zone Extension
		ISFSObject starshipsCfg = ((SpaceWarZoneExtension) this.getParentExtension()).getStarshipsCfg();
		
		// Retrieve weapon models from Zone Extension
		ISFSObject weaponsCfg = ((SpaceWarZoneExtension) this.getParentExtension()).getWeaponsCfg();
		
		// Send starship and weapon models to user as outgoing parameters
		ISFSObject outData = (ISFSObject) event.getParameter(SFSEventParam.LOGIN_OUT_DATA);
        outData.putSFSObject("starships", starshipsCfg);
        outData.putSFSObject("weapons", weaponsCfg);
	}
}