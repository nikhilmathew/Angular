package sfs2x.extensions.games.tris;

import com.smartfoxserver.v2.annotations.Instantiation;
import com.smartfoxserver.v2.annotations.Instantiation.InstantiationMode;
import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.exceptions.SFSRuntimeException;
import com.smartfoxserver.v2.extensions.BaseClientRequestHandler;
import com.smartfoxserver.v2.extensions.ExtensionLogLevel;

@Instantiation(InstantiationMode.SINGLE_INSTANCE)
public class MoveHandler extends BaseClientRequestHandler
{
	private static final String CMD_WIN = "win";
	private static final String CMD_TIE = "tie";
	private static final String CMD_MOVE = "move";
	
	@Override
	public void handleClientRequest(User user, ISFSObject params)
	{
		// Check params
		if (!params.containsKey("x") || !params.containsKey("y"))
			throw new SFSRuntimeException("Invalid request, one mandatory param is missing. Required 'x' and 'y'");
		
		TrisExtension gameExt = (TrisExtension) getParentExtension();
		TrisGameBoard board = gameExt.getGameBoard();
		
		int moveX = params.getInt("x");
		int	moveY = params.getInt("y");
		
		gameExt.trace(String.format("Handling move from player %s. (%s, %s) = %s ", user.getPlayerId(), moveX, moveY, board.getTileAt(moveX, moveY)));
		
		if (gameExt.isGameStarted())
		{
			if (gameExt.getWhoseTurn() == user)
			{
				if (board.getTileAt(moveX, moveY) == Tile.EMPTY)
				{
					// Set game board tile
					board.setTileAt(moveX, moveY, user.getPlayerId() == 1 ? Tile.GREEN : Tile.RED);
					
					// Send response
					ISFSObject respObj = new SFSObject();
					respObj.putInt("x", moveX);
					respObj.putInt("y", moveY);
					respObj.putInt("t", user.getPlayerId());
					
					send(CMD_MOVE, respObj, gameExt.getGameRoom().getUserList());
					
					// Increse move count and check game status					
					gameExt.increaseMoveCount();
					
					// Switch turn
					gameExt.updateTurn();
					
					// Check if game is over
					checkBoardState(gameExt);
				}
			}
			
			// Wrong turn
			else
				gameExt.trace(ExtensionLogLevel.WARN, "Wrong turn error. It was expcted: " + gameExt.getWhoseTurn() + ", received from: " + user);
		}
		else
			gameExt.trace(ExtensionLogLevel.WARN, "Wrong turn error. It was expcted: " + gameExt.getWhoseTurn() + ", received from: " + user);
		
	}
	
	private void checkBoardState(TrisExtension gameExt)
	{
		GameState state = gameExt.getGameBoard().getGameStatus(gameExt.getMoveCount());
		
		if (state == GameState.END_WITH_WINNER)
		{
			int winnerId = gameExt.getGameBoard().getWinner();
			
			gameExt.trace("Winner found: ", winnerId);
			
			// Stop game
			gameExt.stopGame();
			
			// Send update
			ISFSObject respObj = new SFSObject(); 
			respObj.putInt("w", winnerId);
			gameExt.send(CMD_WIN, respObj, gameExt.getGameRoom().getUserList());
			
			// Set the last game ending for spectators joining after the end and before a new game starts
			gameExt.setLastGameEndResponse(new LastGameEndResponse(CMD_WIN, respObj));
			
			// Next turn will be given to the winning user.
			gameExt.setTurn(gameExt.getGameRoom().getUserByPlayerId(winnerId));
		}
		
		else if (state == GameState.END_WITH_TIE)
		{
			gameExt.trace("TIE!");
			
			// Stop game
			gameExt.stopGame();
			
			// Send update
			ISFSObject respObj = new SFSObject();
			gameExt.send(CMD_TIE, respObj, gameExt.getGameRoom().getUserList());
			
			// Set the last game ending for spectators joining after the end and before a new game starts
			gameExt.setLastGameEndResponse(new LastGameEndResponse(CMD_TIE, respObj));
		}
	}
}
