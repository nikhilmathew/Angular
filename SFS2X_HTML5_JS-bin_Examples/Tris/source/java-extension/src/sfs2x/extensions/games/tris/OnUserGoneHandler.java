package sfs2x.extensions.games.tris;

import java.util.Map;

import com.smartfoxserver.v2.core.ISFSEvent;
import com.smartfoxserver.v2.core.SFSEventParam;
import com.smartfoxserver.v2.core.SFSEventType;
import com.smartfoxserver.v2.entities.Room;
import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.exceptions.SFSException;
import com.smartfoxserver.v2.extensions.BaseServerEventHandler;

public class OnUserGoneHandler extends BaseServerEventHandler
{
	@SuppressWarnings("unchecked")
    @Override
	public void handleServerEvent(ISFSEvent event) throws SFSException
	{
		TrisExtension gameExt = (TrisExtension) getParentExtension();
		Room gameRoom = gameExt.getGameRoom();
		
		// Get event params
		User user = (User) event.getParameter(SFSEventParam.USER);
		Integer oldPlayerId;
		
		// User disconnected
		if (event.getType() == SFSEventType.USER_DISCONNECT)
		{
			Map<Room, Integer> playerIdsByRoom = (Map<Room, Integer>) event.getParameter(SFSEventParam.PLAYER_IDS_BY_ROOM);
			oldPlayerId = playerIdsByRoom.get(gameRoom);
		}
		
		// User just left the room
		else
			oldPlayerId = (Integer) event.getParameter(SFSEventParam.PLAYER_ID);
		
		// Old user was in this Room
		if (oldPlayerId != null)
		{
			// And it was a player
			if (oldPlayerId > 0)
			{
				gameExt.stopGame(true);
				
				// If 1 player is inside let's notify him that the game is now stopped
				if (gameRoom.getSize().getUserCount() > 0)
				{
					ISFSObject resObj = new SFSObject();
					resObj.putUtfString("n", user.getName());
					
					gameExt.send("stop", resObj, gameRoom.getUserList());
				}
			}
		}
	}
}
