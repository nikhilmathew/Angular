package sfs2x.extensions.games.tris;

import com.smartfoxserver.v2.core.SFSEventType;
import com.smartfoxserver.v2.entities.Room;
import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.SFSExtension;

public class TrisExtension extends SFSExtension
{
	private TrisGameBoard gameBoard;
	private User whoseTurn;
	private volatile boolean gameStarted;
	private LastGameEndResponse lastGameEndResponse;
	private int moveCount;
	
	private final String version = "1.0.5";
	
	@Override
	public void init()
	{
		trace("Tris game Extension for SFS2X started, rel. " + version);
		
		moveCount = 0;
		gameBoard = new TrisGameBoard();
		
	    addRequestHandler("move", MoveHandler.class);
	    addRequestHandler("restart", RestartHandler.class);
	    addRequestHandler("ready", ReadyHandler.class);
	    
	    addEventHandler(SFSEventType.USER_DISCONNECT, OnUserGoneHandler.class);
	    addEventHandler(SFSEventType.USER_LEAVE_ROOM, OnUserGoneHandler.class);
	    addEventHandler(SFSEventType.SPECTATOR_TO_PLAYER, OnSpectatorToPlayerHandler.class);
	}
	
	@Override
	public void destroy() 
	{
		super.destroy();
		trace("Tris game destroyed!");
	}
		
	TrisGameBoard getGameBoard()
    {
	    return gameBoard;
    }
	
	User getWhoseTurn()
    {
	    return whoseTurn;
    }
	
	void setTurn(User user)
	{
		whoseTurn = user;
	}
	
	void updateTurn()
	{
		whoseTurn = getParentRoom().getUserByPlayerId( whoseTurn.getPlayerId() == 1 ? 2 : 1 );
	}
	
	public int getMoveCount()
    {
	    return moveCount;
    }
	
	public void increaseMoveCount()
	{
		++moveCount;
	}
	
	boolean isGameStarted()
	{
		return gameStarted;
	}
	
	void startGame()
	{
		if (gameStarted)
			throw new IllegalStateException("Game is already started!");
		
		lastGameEndResponse = null;
		gameStarted = true;
		gameBoard.reset();
		
		User player1 = getParentRoom().getUserByPlayerId(1);
		User player2 = getParentRoom().getUserByPlayerId(2);
		
		// No turn assigned? Let's start with player 1
		if (whoseTurn == null)
			whoseTurn = player1;
		
		// Send START event to client
		ISFSObject resObj = new SFSObject();
		resObj.putInt("t", whoseTurn.getPlayerId());
		resObj.putUtfString("p1n", player1.getName());
		resObj.putInt("p1i", player1.getId());
		resObj.putUtfString("p2n", player2.getName());
		resObj.putInt("p2i", player2.getId());
		
		send("start", resObj, getParentRoom().getUserList());
	}
	
	void stopGame()
	{
		stopGame(false);
	}
	
	void stopGame(boolean resetTurn)
	{
		gameStarted = false;
		moveCount = 0;
		whoseTurn = null;
	}
	
	Room getGameRoom()
	{
		return this.getParentRoom();
	}
	
	LastGameEndResponse getLastGameEndResponse()
    {
	    return lastGameEndResponse;
    }
	
	void setLastGameEndResponse(LastGameEndResponse lastGameEndResponse)
    {
	    this.lastGameEndResponse = lastGameEndResponse;
    }
	
	void updateSpectator(User user)
	{
		ISFSObject resObj = new SFSObject();
		
		User player1 = getParentRoom().getUserByPlayerId(1);
		User player2 = getParentRoom().getUserByPlayerId(2);
		
		resObj.putInt("t", whoseTurn == null ? 0 : whoseTurn.getPlayerId());
		resObj.putBool("status", gameStarted);
		resObj.putSFSArray("board", gameBoard.toSFSArray());
		
		if (player1 == null)
			resObj.putInt("p1i", 0); // <--- indicates no P1
		else
		{
			resObj.putInt("p1i", player1.getId());
			resObj.putUtfString("p1n", player1.getName());
		}
		
		if (player2 == null)
			resObj.putInt("p2i", 0); // <--- indicates no P2
		else
		{
			resObj.putInt("p2i", player2.getId());
			resObj.putUtfString("p2n", player2.getName());
			
		}
		
		send("specStatus", resObj, user);
	}
	
	
}
