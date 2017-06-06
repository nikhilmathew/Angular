package co.sports.unity.maximus;

import com.smartfoxserver.v2.SmartFoxServer;
import com.smartfoxserver.v2.api.CreateRoomSettings;
import com.smartfoxserver.v2.entities.SFSRoomRemoveMode;
import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.match.BoolMatch;
import com.smartfoxserver.v2.entities.match.MatchExpression;
import com.smartfoxserver.v2.entities.match.RoomProperties;
import com.smartfoxserver.v2.entities.match.StringMatch;
import com.smartfoxserver.v2.extensions.BaseClientRequestHandler;
import com.smartfoxserver.v2.game.CreateSFSGameSettings;

/**
 * 
 * {@link GameRequestHandler} class handles the Player's "Random Game Request".
 * by searching the available room based on Player's level, if there is room
 * available with free player slot it calls quickJoinGame for that player
 * otherwise it creates a new GameRoom and joins the player in newly created
 * room where player is the owner of that room.
 *
 */

public class GameRequestHandler extends BaseClientRequestHandler {

	public static final String PARAM_NAME_ROOM_GROUP = "rg";
    public static final String PARAM_ROOM_NAME = "rn";
    
	@Override
	public void handleClientRequest(User user, ISFSObject params) {

		trace("Random Game Querry Recieved");
		createOrJoinGame(user, params);

	}

	/**
	 * this method searches and joins if room available based on players level
	 * else creates a new Game Room.
	 * 
	 * @param user
	 *            Player
	 * @param params
	 *            event parameters
	 */

	void createOrJoinGame(User user, ISFSObject params) {

		GameFinderExtension maximus = (GameFinderExtension) getParentExtension();

		String roomGroup = params.getUtfString(PARAM_NAME_ROOM_GROUP);
		String roomName = params.getUtfString(PARAM_ROOM_NAME);
		
		MatchExpression exp = new MatchExpression(RoomProperties.GROUP_ID, StringMatch.EQUALS, roomGroup)
				.and(RoomProperties.IS_GAME, BoolMatch.EQUALS, true)
				.and(RoomProperties.HAS_FREE_PLAYER_SLOTS, BoolMatch.EQUALS, true);
		try {

			SmartFoxServer.getInstance().getAPIManager().getGameApi().quickJoinGame(user, exp, maximus.getGameZone(),
					roomGroup);
			trace("Random Game Room Joined Success");

		} catch (Exception e) {

			e.printStackTrace();
			trace("No Game Room Creating New Room");
			CreateRoomSettings.RoomExtensionSettings extension = new CreateRoomSettings.RoomExtensionSettings("maximus",
					"co.sports.unity.maximus.GameLogicExtension");
			CreateSFSGameSettings gameSettings = new CreateSFSGameSettings();
			gameSettings.setName(roomName);
			gameSettings.setGroupId(roomGroup);
			gameSettings.setExtension(extension);
			gameSettings.setGame(true);
			gameSettings.setMinPlayersToStartGame(2);
			gameSettings.setMaxUsers(2);
			gameSettings.setMaxSpectators(0);
			gameSettings.setGamePublic(true);
			gameSettings.setAutoRemoveMode(SFSRoomRemoveMode.WHEN_EMPTY);
			gameSettings.setDynamic(true);

			try {

				SmartFoxServer.getInstance().getAPIManager().getGameApi().createGame(maximus.getGameZone(),
						gameSettings, user);
				trace("New Game Room Created Succefully");

			} catch (Exception e1) {

				e1.printStackTrace();
				trace("New Game Room Creation Failed " + e1.getStackTrace()[0]);

			}
		}
	}
}
