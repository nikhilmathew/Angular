include("TrisGameClasses.js");

var VER = "1.0.0";
var CMD_WIN = "win";
var CMD_TIE = "tie";
var CMD_MOVE = "move";

var moveCount = null;
var gameBoard = null;
var whoseTurn = null;
var gameStarted = false;
var lastGameEndResponse = null;
var moveCount = 0;


GameBoard = function() {}

function init()
{
	trace("TrisJS Extension init (version " + VER + ")");
	
	moveCount = 0;
	gameBoard = new TrisGameBoard();
	
	// Register client request handlers
    addRequestHandler("move", onMoveHandler);
    addRequestHandler("restart", onRestartHandler);
    addRequestHandler("ready", onReadyHandler);
	
	// Register server event handlers
	addEventHandler(SFSEventType.USER_DISCONNECT, onUserDisconnect);
	addEventHandler(SFSEventType.USER_LEAVE_ROOM, onUserDisconnect);
	addEventHandler(SFSEventType.SPECTATOR_TO_PLAYER, onSpectatorToPlayer);
}

function destroy()
{
	trace("TrisJS Extension destroy (version " + VER + ")");
}

function startGame()
{
	if (gameStarted)
		throw ("Game is already started!");
		
	lastGameEndResponse = null;
	gameStarted = true;
	gameBoard.reset();
		
	var player1 = getParentRoom().getUserByPlayerId(1);
	var player2 = getParentRoom().getUserByPlayerId(2);
		
	if (whoseTurn == null)
		whoseTurn = player1;
	
	var resObj = new SFSObject();
	resObj.putInt("t", whoseTurn.getPlayerId());
	resObj.putUtfString("p1n", player1.getName());
	resObj.putInt("p1i", player1.getId());
	resObj.putUtfString("p2n", player2.getName());
	resObj.putInt("p2i", player2.getId());
	
	send("start", resObj, getParentRoom().getUserList());
}

function stopGame()
{
	gameStarted = false;
	moveCount = 0;
	whoseTurn = null;
}

function updateSpectator(user)
{
	var resObj = new SFSObject();
	
	var player1 = getParentRoom().getUserByPlayerId(1);
	var player2 = getParentRoom().getUserByPlayerId(2);
	
	resObj.putInt("t", whoseTurn == null ? 0 : whoseTurn.getPlayerId());
	resObj.putBool("status", gameStarted);
	resObj.putSFSArray("board", gameBoard._toSFSArray());
	
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
	
	send("specStatus", resObj, [user]);
}

function increaseMoveCount()
{
	++moveCount;
}

function updateTurn()
{
	whoseTurn = getParentRoom().getUserByPlayerId( whoseTurn.getPlayerId() == 1 ? 2 : 1 );
}

// --- Client Request Handlers -----------------------------------------
function onMoveHandler(params, sender)
{
	if (!params.containsKey("x") || !params.containsKey("y"))
		throw ("Invalid request, one mandatory param is missing. Required 'x' and 'y'");
	
	var moveX = params.getInt("x");
	var	moveY = params.getInt("y");
	
	if (gameStarted)
	{
		if (whoseTurn == sender)
		{
			if (gameBoard.getTileAt(moveX, moveY) == Tile.EMPTY)
			{
				gameBoard.setTileAt(moveX, moveY, sender.getPlayerId() == 1 ? Tile.GREEN : Tile.RED);
				
				// Send response
				var respObj = new SFSObject();
				respObj.putInt("x", moveX);
				respObj.putInt("y", moveY);
				respObj.putInt("t", sender.getPlayerId());
				
				send(CMD_MOVE, respObj, getParentRoom().getUserList());
				
				// Increse move count and check game status					
				increaseMoveCount();
				
				// Switch turn
				updateTurn();
				
				// Check if game is over
				checkBoardState();
			}
		}
		
		// Wrong turn
		else
		{
			trace("Wrong turn error. It was expcted: " + whoseTurn + ", received from: " + sender);
		}
	}
	else
	{
		trace("Move req discarded, game is not started. Received from: " + user);
	}
}

function checkBoardState()
{
	var state = gameBoard.getGameStatus(moveCount);
	
	if (state == GameState.END_WITH_WINNER)
	{
		var winnerId = gameBoard.getWinner();
		trace("Winner found: ", winnerId);
		
		// Stop game
		stopGame();
		
		// Send update
		var respObj = new SFSObject();
		respObj.putInt("w", winnerId);
		send(CMD_WIN, respObj, getParentRoom().getUserList());
		
		// Set the last game ending for spectators joining after the end and before a new game starts
		lastGameEndResponse = new LastGameEndResponse(CMD_WIN, respObj);
		
		// Next turn will be given to the winning user
		whoseTurn = getParentRoom().getUserByPlayerId(winnerId);
	}
	
	else if (state == GameState.END_WITH_TIE)
	{
		trace("TIE!");
		
		stopGame();
		
		// Send update
		var respObj = new SFSObject();
		send(CMD_TIE, respObj, getParentRoom().getUserList());
		
		// Set the last game ending for spectators joining after the end and before a new game starts
		lastGameEndResponse = new LastGameEndResponse(CMD_TIE, respObj);
	}

}

function onRestartHandler(params, sender)
{
	// Checks if two players are available and start game
	if (getParentRoom().getSize().getUserCount() == 2)
		startGame();
}

function onReadyHandler(params, sender)
{
	if (sender.isPlayer())
	{
		// Checks if two players are available and start game
		if (getParentRoom().getSize().getUserCount() == 2)
			startGame();
	}
	
	else
	{
		updateSpectator(sender);
				
		// If game has ended send the outcome
		if (lastGameEndResponse != null)
			send(lastGameEndResponse.cmd, lastGameEndResponse.params, sender);
	}
}


// --- Server Event Handlers -------------------------------------------
function onUserDisconnect(event)
{
	var gameRoom = getParentRoom();
	
	// Get event params
	var user = event.getParameter(SFSEventParam.USER);
	var oldPlayerId;
	
	// User disconnected
	if (event.getType() == SFSEventType.USER_DISCONNECT)
	{
		var playerIdsByRoom = event.getParameter(SFSEventParam.PLAYER_IDS_BY_ROOM);
		oldPlayerId = playerIdsByRoom.get(gameRoom);
	}
	
	// User just left the room
	else
		oldPlayerId = event.getParameter(SFSEventParam.PLAYER_ID);
	
	// Old user was in this Room
	if (oldPlayerId != null && oldPlayerId > 0)
	{
		stopGame(true);
		
		// If 1 player is inside let's notify him that the game is now stopped
		if (gameRoom.getSize().getUserCount() > 0)
		{
			var resObj = new SFSObject();
			resObj.putUtfString("n", user.getName());
			
			send("stop", resObj, gameRoom.getUserList());
		}
	}
}

function onSpectatorToPlayer(event)
{
	trace("Player was switched: " +  event.getParameter(SFSEventParam.USER));
	trace("Room: " + getParentRoom() + " => " + getParentRoom().getSize());
	
	// Checks if two players are available and start game
	if (getParentRoom().getSize().getUserCount() == 2)
		startGame();
}
