package co.sports.unity.maximus;

import java.util.HashMap;
import java.util.Random;

import com.smartfoxserver.v2.core.SFSEventType;
import com.smartfoxserver.v2.entities.Room;
import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.Zone;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.SFSExtension;



/**
 * 
 * GameLogicExtension class is a room level extension class.
 * It must be applied on Game Rooms created for Maximus games.
 * This class also handles the game logic START_GAME, DECIDE_BATSMAN, DISPLAY_NEXT_QUESTION, STOP_GAME.
 */



public class GameLogicExtension extends SFSExtension {

	private final String READY_REQUEST_ID = "r";
	private final String QA_REQUEST_ID = "q";

	private final String CMD_NAME_START = "st";
	private final String CMD_NAME_STOP = "sp";
	private final String CMD_NAME_NEXT_QA = "nq";

	private final String PARAM_NAME_QUESTION_NUMBER = "qn";


	private boolean isGameStarted = false;
	private int questionNumber = 0;
	private HashMap<String, Integer> readyMap;
	
	@Override
	public void init() {
		readyMap=new HashMap<>();
		isGameStarted = false;
		questionNumber = 0;

		addEventHandler(SFSEventType.USER_DISCONNECT, OnUserGoneHandler.class);
		addEventHandler(SFSEventType.USER_LEAVE_ROOM, OnUserGoneHandler.class);

		addRequestHandler(READY_REQUEST_ID, ReadyRequestHandler.class);
		addRequestHandler(QA_REQUEST_ID, QARequestHandler.class);
	}

	/**
	 * Returns the current Game Room
	 * @return current room
	 */
	Room getGameRoom() {
		return this.getParentRoom();
	}

	/**
	 * Returns the current Game Zone
	 * @return parent zone
	 */
	Zone getGameZone() {
		return this.getParentZone();
	}

	/**
	 * Starts the game by sending the START_COMMAND to the players in the room,
	 * with sfsobject which contains whose_batsman and players info.
	 */
	void startGame() {

		if (!isGameStarted) {
			isGameStarted = true;

			User player1 = getGameRoom().getUserByPlayerId(1);
			User player2 = getGameRoom().getUserByPlayerId(2);

			// Send START event to client
			ISFSObject resObj = new SFSObject();
			Random random=new Random();
			int toss=random.nextInt(2);
			String batsManJid=player1.getName();
			if(toss==1){
				batsManJid=player2.getName();
			}
			resObj.putUtfString("bt",batsManJid);
			resObj.putUtfString("p1id", player1.getName());
			resObj.putUtfString("p2id", player2.getName());
			resObj.putInt("p1i", player1.getId());
			resObj.putInt("p2i", player2.getId());

			send(CMD_NAME_START, resObj, getGameRoom().getUserList());
		} else {
			throw new IllegalStateException("Game is already started!");
		}
	}

	/**
	 * Returns whether the game is started or not.
	 * @return Game Started or not
	 */
	boolean isGameStarted() {
		return isGameStarted;
	}

	/**
	 * Stops the game by sending the STOP_COMMAND to the players in the room.
	 */
	void stopGame(boolean isAbandoned) {
		readyMap=new HashMap<>();
		isGameStarted = false;
		questionNumber = 0;
		if(!isAbandoned){
		send(CMD_NAME_STOP, new SFSObject(), getGameRoom().getUserList());
		}
	}

	/**
	 * Returns the players ready count.
	 * @return player ready count
	 */
	int getReadyCount() {
		return readyMap.size();
	}

	void setReadyCount(String name) {
		if(!readyMap.containsKey(name)){
			readyMap.put(name, 1);
		}
	}

	/**
	 * reset ready count to 0.
	 */
	void resetReadyCount() {
		readyMap.clear();
	}

	/**
	 * Sends DISPLAY_NEXT_QUESTION_COMMAND to players,
	 * with sfsobject which contains question number.
	 */
	void displayNextQuestion() {
		++questionNumber;
		ISFSObject object = new SFSObject();
		object.putInt(PARAM_NAME_QUESTION_NUMBER, questionNumber);
		send(CMD_NAME_NEXT_QA, object, getGameRoom().getUserList());
	}
}
