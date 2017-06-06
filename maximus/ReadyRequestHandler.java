package co.sports.unity.maximus;

import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.BaseClientRequestHandler;

/**
 * 
 * This class handles the ready request of the players. When both of the players
 * are ready it starts the game if game is not started yet, else sends the
 * DISPLAY_NEXT_QUESTION command to the players.
 *
 */
public class ReadyRequestHandler extends BaseClientRequestHandler {

	private static final String REMATCH = "re";
	private final String CMD_NAME_RE = "rm";

	@Override
	public void handleClientRequest(User user, ISFSObject params) {

		GameLogicExtension maximus = (GameLogicExtension) getParentExtension();

		// Checks if two players are available and start game

		String reMatch = params.getUtfString(REMATCH);
		if (reMatch != null && reMatch.equals(REMATCH)) {
			trace("Rematch Request");
			maximus.stopGame(false);
			User player1 = maximus.getGameRoom().getUserByPlayerId(1);
			User player2 = maximus.getGameRoom().getUserByPlayerId(2);
			User opponent = player1.getId() == user.getId() ? player2 : player1;
			ISFSObject resObj = new SFSObject();
			maximus.send(CMD_NAME_RE, resObj, opponent);

		} else if (user.isPlayer()) {

			trace("Ready recieved");
			maximus.setReadyCount(user.getName());

			if (maximus.getReadyCount() == 2) {
				maximus.resetReadyCount();

				if (!maximus.isGameStarted()) {

					trace("Start Game");
					maximus.startGame();

				} else {

					trace("Display next question");
					maximus.displayNextQuestion();

				}
			}
		}
	}
}
