//------------------------------------
// Constants
//------------------------------------
var EXTENSION_NAME = "tris";
var BOARD_SIZE = 300;
var BOARD_BORDER = 8;
var PIECE_SIZE = 36;
var FPS = 40;

//------------------------------------
// Vars
//------------------------------------
var inited = false;
var canvas;
var stage;
var board;
var squares = [];

var p1NameCont;
var p2NameCont;

var statusTF;

var disabler;
var currentPopUp;

var gameStarted = false;
var iAmSpectator = false;

var whoseTurn;
var player1Id;
var player2Id;
var player1Name;
var player2Name;

/**
 * Initialize the game
 */
function initGame()
{
	if (inited == false)
	{
		inited = true;

		// Stage
		canvas = document.getElementById("gameContainer");
		stage = new createjs.Stage(canvas);
		stage.mouseEventsEnabled = true;

		// Ticker
		createjs.Ticker.setFPS(FPS);

		// Board
		buildGameUI();
	}

	createjs.Ticker.addListener(tick);

	gameStarted = false;

	// Remove event listeners before adding again
	// This is a workaround to avoid multiple listeners to be added when a game is left and a new one is joined
	// TrisGame should be a separate class, instantiated each time a new game is started
	sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, onExtensionResponse);
	sfs.removeEventListener(SFS2X.SFSEvent.SPECTATOR_TO_PLAYER, onSpectatorToPlayer);

	// Register to SmartFox events
	sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, onExtensionResponse);
	sfs.addEventListener(SFS2X.SFSEvent.SPECTATOR_TO_PLAYER, onSpectatorToPlayer);

	resetGameBoard();

	// Setup my properties
	iAmSpectator = (sfs.mySelf.getPlayerId(sfs.lastJoinedRoom) == -1);

	// Show "wait" message
	var message = "Waiting for player " + ((sfs.mySelf.getPlayerId(sfs.lastJoinedRoom) == 1) ? "2" : "1")

	if (iAmSpectator == false)
		showGamePopUp("wait", message);

	// Tell extension I'm ready to play
	sfs.send( new SFS2X.ExtensionRequest("ready", null, sfs.lastJoinedRoom) )
}

/**
 * Add game's elements to the canvas
 */
function buildGameUI()
{
	//--------------------------
	// Board
	//--------------------------
	board = new createjs.Container();

	// Background
	var boardBG = new createjs.Shape();
		boardBG.graphics.beginFill("#FFFFFF");
		boardBG.graphics.drawRect(0, 0, BOARD_SIZE, BOARD_SIZE);
		boardBG.width = boardBG.height = BOARD_SIZE;
		boardBG.cache(0, 0, boardBG.width, boardBG.height);

	board.addChild(boardBG);

	// Squares
	// We use BitmapAnimation for the pieces as we aren't going to add childs to them
	var pieceSS = new createjs.SpriteSheet({
											images:["images/ballSS.png"],
											frames: {
													regX: 0,
													regY: 0,
													height: 36,
													width: 36,
													count: 3,
												}
										   });
	
	var pieceShadow = new createjs.Shadow("#666666", 2, 3, 5);
	var sqSize = (BOARD_SIZE - (BOARD_BORDER * 4)) / 3;
	
	for (var i = 0; i < 9; i++)
	{
		var square = new createjs.Container();
		
		square.x = i % 3 * (sqSize + BOARD_BORDER) + BOARD_BORDER;
		square.y = Math.floor(i / 3) * (sqSize + BOARD_BORDER) + BOARD_BORDER;

		var sqBG = new createjs.Shape();
			sqBG.graphics.beginFill("#F1F0DA");
			sqBG.graphics.drawRect(0, 0, sqSize, sqSize);

		// Piece
		// 0 - no piece
		// 1 - green piece
		// 2 - red piece
		square.ball = new createjs.BitmapAnimation(pieceSS);
		square.ball.gotoAndStop(0);
		square.ball.width = square.ball.height = PIECE_SIZE;
		square.ball.x = sqSize / 2 - square.ball.width / 2;
		square.ball.y = sqSize / 2 - square.ball.height / 2;
		square.ball.shadow = pieceShadow;

		square.id = squares.length;
		squares.push(square);

		square.addChild(sqBG);
		square.addChild(square.ball);
		board.addChild(square);
	}

	board.rotation = -8;
	board.width = board.height = BOARD_SIZE;
	board.x = canvas.width / 2 - board.width / 2;
	board.y = 150;
	stage.addChild(board);

	//--------------------------
	// Player Names
	//--------------------------
	p1NameCont = new createjs.Container();

	// Background
	var pBG = new createjs.Shape();
		pBG.graphics.setStrokeStyle(5);
		pBG.graphics.beginStroke("#FFFFFF");
		pBG.graphics.beginFill("#F0F0F0");
		pBG.width = 150; pBG.height = 25;
		pBG.graphics.drawRect(0, 0, pBG.width, pBG.height);
		pBG.cache(-2.5, -2.5, pBG.width + 5, pBG.height + 5);
	p1NameCont.addChild(pBG);

	// TextField
	p1NameCont.name = new createjs.Text("", "bold 14px Verdana", "#000000");
	p1NameCont.name.textAlign = "center";
	p1NameCont.name.x = (pBG.width - 5) / 2;
	p1NameCont.name.y = 2.5;
	p1NameCont.addChild(p1NameCont.name);

	// Piece
	var p1BallBmp = new createjs.Bitmap("images/ballSS.png");
		p1BallBmp.sourceRect = new createjs.Rectangle(36, 0, 36, 36);
		p1BallBmp.x = pBG.width + 6.5;
		p1BallBmp.y = 1.5;
		p1BallBmp.scaleX = p1BallBmp.scaleY = 0.65;
	p1NameCont.addChild(p1BallBmp);

	p1NameCont.x = 15;
	p1NameCont.y = 25;
	stage.addChild(p1NameCont);

	//--------------------------

	p2NameCont = new createjs.Container();

	// Background
	var p2BG = pBG.clone();
		p2BG.x = -2.5 + 31;
		p2BG.y = -2.5;
	p2NameCont.addChild(p2BG);

	// TextField
	p2NameCont.name = p1NameCont.name.clone();
	p2NameCont.name.x = p1NameCont.name.x + 31;
	p2NameCont.addChild(p2NameCont.name);

	// Piece
	var p2BallBmp = p1BallBmp.clone();
		p2BallBmp.sourceRect = new createjs.Rectangle(72, 0, 36, 36);
		p2BallBmp.x = 0;
	p2NameCont.addChild(p2BallBmp);

	p2NameCont.x = 382;
	p2NameCont.y = p1NameCont.y;
	stage.addChild(p2NameCont);

	//--------------------------
	// Status TextField
	//--------------------------
	statusTF = new createjs.Text("", "bold 14px Verdana", "#000000");
	statusTF.textAlign = "center";
	statusTF.x = 289;
	statusTF.y = 70;
	stage.addChild(statusTF);

	//--------------------------
	// Disabler
	//--------------------------
	disabler = new createjs.Shape();
		disabler.graphics.beginFill("#000000");
		disabler.graphics.drawRect(0, 0, canvas.width, canvas.height);
		disabler.alpha = 0.5;
		disabler.visible = false;
	stage.addChild(disabler);
}

/**
 * Update the canvas
 */
function tick()
{
    stage.update();
}

/**
 * Destroy the game instance
 */
function destroyGame()
{
	sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, onExtensionResponse);
	sfs.removeEventListener(SFS2X.SFSEvent.SPECTATOR_TO_PLAYER, onSpectatorToPlayer);

	// Remove PopUp
	removeGamePopUp();
}

/**
 * Start the game
 */
function startGame(params)
{
	whoseTurn = params.get("t");
	player1Id = params.get("p1i");
	player2Id = params.get("p2i");
	player1Name = params.get("p1n");
	player2Name = params.get("p2n");

	// Reset the game board
	resetGameBoard();

	// Remove the "waiting for other player..." popup
	removeGamePopUp();

	p1NameCont.name.text = player1Name;
	p2NameCont.name.text = player2Name;

	setTurn();
	enableBoard(true);

	gameStarted = true;
}

/**
 * Set the "Player's turn" status message
 */
function setTurn()
{
	if(iAmSpectator == false){
		statusTF.text = (sfs.mySelf.getPlayerId(sfs.lastJoinedRoom) == whoseTurn) ? "It's your turn" : "It's your opponent's turn";
	}else{
		statusTF.text = "It's " + this["player" + whoseTurn + "Name"] + " turn";
	}
}

/**
 * Clear the game board
 */
function resetGameBoard()
{
	for (var i = 0; i<9; i++){
		squares[i].ball.gotoAndStop(0);
	}
}

/**
 * Enable board click
 */
function enableBoard(enable)
{
	if(iAmSpectator == false && sfs.mySelf.getPlayerId(sfs.lastJoinedRoom) == whoseTurn)
	{
		for(var i = 0; i<9; i++){
			var square = squares[i];

			if(square.ball.currentFrame == 0)
			{
				if(enable)
					square.onClick = makeMove;
				else
					square.onClick = null;
			}
		}
	}
}

/**
 * On board click, send move to other players
 */
function makeMove(evt)
{
	var square = evt.target;
	square.ball.gotoAndStop(sfs.mySelf.getPlayerId(sfs.lastJoinedRoom));
	square.onClick = null;

	enableBoard(false);

	var x = square.id % 3 + 1;
	var y = Math.floor(square.id / 3) + 1;

	var obj = new SFS2X.SFSObject();
	obj.putInt("x", x);
	obj.putInt("y", y);

	sfs.send( new SFS2X.ExtensionRequest("move", obj, sfs.lastJoinedRoom) )
}

/**
 * Handle the opponent move
 */
function moveReceived(params)
{
	var movingPlayer = params.get("t");
	whoseTurn = (movingPlayer == 1) ? 2 : 1;

	if(movingPlayer != sfs.mySelf.getPlayerId(sfs.lastJoinedRoom))
	{
		var square = squares[(params.get("y") - 1) * 3 + (params.get("x") - 1)];
		square.ball.gotoAndStop(movingPlayer);
	}

	setTurn();
	enableBoard(true);
}

/**
 * Declare game winner
 */
function showWinner(cmd, params)
{
	gameStarted = false;
	statusTF.text = "";
	var message = "";

	if (cmd == "win")
	{
		if (iAmSpectator == true)
		{
			var pName = this["player" + params.get("w") + "Name"];
			message = pName + " is the WINNER";
		}
		else
		{
			if (sfs.mySelf.getPlayerId(sfs.lastJoinedRoom) == params.get("w"))
			{
				// I WON! In the next match, it will be my turn first
				message = "You are the WINNER!"
			}
			else
			{
				// I've LOST! Next match I will be the second to move
				message = "Sorry, you've LOST!"
			}
		}
	}
	else if (cmd == "tie")
	{
		message = "It's a TIE!"
	}

	// Show "winner" message
	if (iAmSpectator == true)
	{
		showGamePopUp("endSpec", message);
	}
	else
	{
		showGamePopUp("end", message);
	}
}

/**
 * Restart the game
 */
function restartGame()
{
	removeGamePopUp();

	sfs.send( new SFS2X.ExtensionRequest("restart", null, sfs.lastJoinedRoom) )
}

/**
 * One of the players left the game
 */
function userLeft()
{
	gameStarted = false;
	statusTF.text = "";
	var message = "";

	// Show "wait" message
	if(iAmSpectator == false){
		message = "Your opponent left the game" + "<br/><br/>" + "Waiting for a new player";
		showGamePopUp("wait", message);
	}else{
		message = "A player left the game" + "<br/><br/>" + "Press the Join button to play"
		showGamePopUp("waitSpec", message);
	}
}

/**
 * Spectator receives board update. If match isn't started yet,
 * a message is displayed and he can click the join button
 */
function setSpectatorBoard(params)
{
	removeGamePopUp();

	whoseTurn = params.get("t");
	player1Id = params.get("p1i");
	player2Id = params.get("p2i");
	player1Name = params.get("p1n");
	player2Name = params.get("p2n");

	gameStarted = params.get("status");

	p1NameCont.name.text = player1Name;
	p2NameCont.name.text = player2Name;

	if (gameStarted == true)
		setTurn();

	var boardData = params.get("board");
	
	for (var y = 0; y < boardData.size(); y++)
	{
		var boardRow = boardData.get(y);
		
		for (var x = 0; x < boardRow.length; x++)
		{
			var square = squares[y * 3 + x];
			square.ball.gotoAndStop(boardRow[x]);
		}
	}

	if (gameStarted == false)
	{
		var message = "Waiting for game to start" + "<br/><br/>" + "Press the Join button to play";
		showGamePopUp("waitSpec", message);
	}
}

/**
 * If a spectator enters the game room and the match isn't started yet,
 * he can click the join button
 */
function spectatorJoinGame()
{
	sfs.send( new SFS2X.SpectatorToPlayerRequest() );
}

//------------------------------------
// Game Popup
//------------------------------------
/**
 * Show the Game PopUp
 */
function showGamePopUp(id, message)
{
	if(currentPopUp != undefined)
		removeGamePopUp();

	disabler.visible = true;

	currentPopUp = $("#"+id+"GameWin");

	currentPopUp.jqxWindow("open");
	currentPopUp.jqxWindow("move", (canvas.width/2) - (currentPopUp.jqxWindow("width") / 2) + canvas.offsetLeft, (canvas.height/2) - (currentPopUp.jqxWindow("height") / 2) + canvas.offsetTop);
	currentPopUp.children(".content").children("#firstRow").children("#message").html(message);
}

/**
 * Hide the Game PopUp
 */
function removeGamePopUp()
{
	if(currentPopUp != undefined){
		disabler.visible = false;

		currentPopUp.jqxWindow("close");
		currentPopUp = undefined;
	}
}

//------------------------------------
// SFS EVENT HANDLERS
//------------------------------------

function onExtensionResponse(evt)
{
	var params = evt.params; // SFSObject
	var cmd = evt.cmd;

	console.log("> Received Extension Response: " + cmd);

	switch(cmd)
	{
		case "start":
			startGame(params);
			break;
		case "stop":
			userLeft();
			break;
		case "move":
			moveReceived(params);
			break;
		case "specStatus":
			setSpectatorBoard(params);
			break;
		case "win":
		case "tie":
			showWinner(cmd, params);
			break;
	}
}

function onSpectatorToPlayer(evt)
{
	var updatedUser = evt.user;

	if(updatedUser.isItMe)
	{
		iAmSpectator = false;

		// Show "wait" message
		removeGamePopUp()
		var message = "Waiting for player " + ((sfs.mySelf.getPlayerId(sfs.lastJoinedRoom) == 1) ? "2" : "1")
		showGamePopUp("wait", message)
	}
}
