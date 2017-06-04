package sfs2x.extensions.games.spacewar.reqhandlers;

import sfs2x.extensions.games.spacewar.SpaceWarRoomExtension;
import sfs2x.extensions.games.spacewar.core.Game;

import com.smartfoxserver.v2.annotations.Instantiation;
import com.smartfoxserver.v2.annotations.MultiHandler;
import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.extensions.BaseClientRequestHandler;
import com.smartfoxserver.v2.extensions.SFSExtension;


@Instantiation
@MultiHandler
public class ControlRequestHandler extends BaseClientRequestHandler
{
	// REQUESTS FROM CLIENT
	private static final String REQ_ROTATE = "rotate";
	private static final String REQ_THRUST = "thrust";
	private static final String REQ_FIRE = "fire";

	@Override
	public void handleClientRequest(User sender, ISFSObject params)
	{
		// Get the request id
        String requestId = params.getUtfString(SFSExtension.MULTIHANDLER_REQUEST_ID);
        
        // Get reference to game core
        Game game = ((SpaceWarRoomExtension) this.getParentExtension()).getGame();
        
        // SHIP ROTATION CONTROL
        if (requestId.equals(REQ_ROTATE))
        {
        	game.rotateStarship(sender.getId(), params.getInt("dir"));
        }
        
        // SHIP THRUST CONTROL
        else if (requestId.equals(REQ_THRUST))
        {
        	game.thrustStarship(sender.getId(), params.getBool("go"));
        }
        
        // SHIP WEAPON FIRE
        else if (requestId.equals(REQ_FIRE))
        {
        	// We can't operate on the Game class directly as the weapon settings
        	// (based on the ship type and fired weapon number) must be retrieved before 
        	
        	int weaponNum = params.getInt("wnum");
        	((SpaceWarRoomExtension) this.getParentExtension()).fireWeapon(sender, weaponNum);
        }
	}
}
