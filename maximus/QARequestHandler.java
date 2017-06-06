package co.sports.unity.maximus;

import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.BaseClientRequestHandler;


/**
 * QARequestHandler handles the player's answer data
 * by sending it to the opponent player.
 *
 */
public class QARequestHandler extends BaseClientRequestHandler {

	private final String CMD_NAME_QA = "qa";
	private final String PARAM_NAME_QA = "a";

	@Override
	public void handleClientRequest(User user, ISFSObject params) {
		GameLogicExtension gameExt = (GameLogicExtension) getParentExtension();

		// Checks if two players are available and start game
		if (gameExt.isGameStarted()) {

			User player1 = gameExt.getGameRoom().getUserByPlayerId(1);
			User player2 = gameExt.getGameRoom().getUserByPlayerId(2);

			User opponent = player1.getId() == user.getId() ? player2 : player1;
			// Send START event to client
			ISFSObject resObj = new SFSObject();
			resObj.putSFSObject(PARAM_NAME_QA, params);
			gameExt.send(CMD_NAME_QA, resObj, opponent);
		}
	}
}
