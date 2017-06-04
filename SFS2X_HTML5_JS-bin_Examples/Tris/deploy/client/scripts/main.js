//------------------------------------
// Constants
//------------------------------------
var LOBBY_ROOM_NAME = "The Lobby";
var GAME_ROOMS_GROUP_NAME = "games";

var EXTENSION_ID = "Tris-JS";
var EXTENSIONS_CLASS = "TrisExtension.js";

// Comment above EXTENSION_ID and EXTENSION_CLASS constants and
// uncomment the following to use the Java version of the Tris Extension
// var EXTENSION_ID = "Tris";
// var EXTENSIONS_CLASS = "sfs2x.extensions.games.tris.TrisExtension";


//------------------------------------
// Vars
//------------------------------------
var sfs = null;

var currentPrivateChat;
var privateChats;

var inGame = false;

function init()
{
	trace("Application started");

	// Create configuration object
	var config = {};
	config.host = "127.0.0.1";
	config.port = 8080;
	config.zone = "BasicExamples";
	config.debug = false;

	// Create SmartFox client instance
	sfs = new SFS2X.SmartFox(config);

	// Add event listeners
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, this);
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginError, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGIN, onLogin, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGOUT, onLogout, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, onRoomJoinError, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, onRoomJoin, this);
	sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, onPublicMessage, this);
	sfs.addEventListener(SFS2X.SFSEvent.PRIVATE_MESSAGE, onPrivateMessage, this);
	sfs.addEventListener(SFS2X.SFSEvent.USER_ENTER_ROOM, onUserEnterRoom, this);
	sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, onUserExitRoom, this);

	sfs.addEventListener(SFS2X.SFSEvent.USER_COUNT_CHANGE, onUserCountChange, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_REMOVE, onRoomRemove, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_ADDs, onRoomAdd, this);

	// Show LOGIN view
	setView("login", true);
}

//------------------------------------
// USER INTERFACE HANDLERS
//------------------------------------

	//--------------------
	// Login View
	//--------------------

/**
 * Connect button click handler.
 * Connects to a SFS2X instance.
 */
function onConnectBtClick()
{
	// Connect to SFS
	// As no parameters are passed, the config object is used
	sfs.connect();

	// Hide any previous error
	$("#errorLb").hide();

	// Disable button
	enableButton("#connectBt", false);
}

/**
 * Login button click handler.
 * Performs the login, which in turn (see onLogin event) makes the view switch to the lobby.
 */
function onLoginBtClick()
{
	// Hide any previous error
	$("#errorLb").hide();

	// Perform login
	var uName = $("#usernameIn").val();
	var isSent = sfs.send(new SFS2X.LoginRequest(uName));

	if (isSent)
	{
		// Disable interface
		enableTextField("#usernameIn", false);
		enableButton("#loginBt", false);
	}
}

/**
 * Disconnect button click handler.
 * Disconnects the client from the SFS2X instance.
 */
function onDisconnectBtClick()
{
	// Disconnect from SFS
	sfs.disconnect();

	// Hide any previous error
	$("#errorLb").hide();

	// Disable button
	enableButton("#disconnectBt", false);
}

/**
 * Logout button click handler.
 * Performs the logout, which in turn (see onLogout event) makes the view switch to the login box.
 */
function onLogoutBtClick()
{
	var isSent = sfs.send(new SFS2X.LogoutRequest());

	if (isSent)
		enableButton("#logoutBt", false);
}

/**
 * Public message send button click handler.
 * Send a public message, which will be displayed in the chat area (see onPublicMessage event).
 */
function onSendPublicMessageBtClick(event)
{
	if (inGame == false && $("#publicMsgIn").val() != "")
	{
		var isSent = sfs.send(new SFS2X.PublicMessageRequest($("#publicMsgIn").val()));

		if (isSent)
			$("#publicMsgIn").val("");
	}
	else if (inGame == true && $("#gameMsgIn").val() != "")
	{
		var isSent = sfs.send(new SFS2X.PublicMessageRequest($("#gameMsgIn").val()));

		if (isSent)
			$("#gameMsgIn").val("");
	}
}

/**
 * When a user is selected in the user list, enable the button to challenge him in a new game.
 * In the game creation window the game is automatically set to private and the user is selected in the invitees list.
 */
function onUserSelected(event)
{
	var args = event.args;
	var selectionType = args.type;

	// Only consider user selection made using mouse or keyboard (API call is excluded)
	if (selectionType != "none")
	{
    	var item = $("#userList").jqxListBox("getItem", args.index);
		var user = item.originalItem.userObj;

		// Enable private chat
		if (currentPrivateChat != user.id)
			enablePrivateChat(user.id);

		// For example code simplicity we rebuild the full userlist instead of just editing the specific item
		// This causes # of PM to read being updated
		populateUsersList();
	}
}

function onSendPrivateMessageBtClick(event)
{
	var params = new SFS2X.SFSObject();
	params.putInt("recipient", currentPrivateChat);

	var isSent = sfs.send(new SFS2X.PrivateMessageRequest($("#privateMsgIn").val(), currentPrivateChat, params));

	if (isSent)
		$("#privateMsgIn").val("");
}

function onDeselectUserBtClick(event)
{
	enablePrivateChat(-1);
}

/**
 * When a room is selected in the room list, the "Play" and "Watch" buttons are enabled
 */
function onRoomSelected(event)
{
	var doEnable = event != undefined;

	if (!doEnable)
	{
		selectedRoom = null;
		$("#roomList").jqxListBox("clearSelection");
	}

	enableButton("#playGameBt", doEnable);
	enableButton("#watchGameBt", doEnable);
	enableButton("#deselectGameBt", doEnable);
}

function onPlayGameBtClick(event)
{
	if ($("#roomList").jqxListBox("selectedIndex") > -1)
	{
		// Join selected room
		var room = $("#roomList").jqxListBox("getSelectedItem").originalItem.roomObj;
		sfs.send(new SFS2X.JoinRoomRequest(room));
	}
}

function onWatchGameBtClick(event)
{
	if ($("#roomList").jqxListBox("selectedIndex") > -1)
	{
		// Join selected room
		var room = $("#roomList").jqxListBox("getSelectedItem").originalItem.roomObj;
		sfs.send(new SFS2X.JoinRoomRequest(room, "", sfs.lastJoinedRoom.id, true));
	}
}

function onDeselectGameBtClick(event)
{
	onRoomSelected(null);
}

/**
 * Enter a random game among those available.
 */
function onQuickJoinBtClick(event)
{
	sfs.send(new SFS2X.QuickJoinGameRequest(null, [GAME_ROOMS_GROUP_NAME], sfs.lastJoinedRoom));
}

/**
 * Leave game button click handler.
 * In order to leave the current game room, the lobby room is joined.
 */
function onLeaveGameBtClick(event)
{
	// Join the lobby
	joinLobbyRoom();

	//Remove Game Popup
	removeGamePopUp();
}

/**
 * Create game button click handler.
 * Shows the game room creation panel.
 */
function onCreateGameBtClick(event)
{
	// Show create game window
	$("#createGameWin").jqxWindow("open");
}

/**
 * When the game creation panel is closed, all the form items it contains are reset to default values.
 */
function onCreateGameWinClose(event)
{
	$("#gameNameIn").val("");
	$("#spectatorsIn").jqxNumberInput("inputValue", 2);
}

/**
 * Create game button click event listener (create game panel).
 * Create a new game using the parameters entered in the game creation popup window.
 */
function onDoCreateGameBtClick(event)
{
	if ($("#gameNameIn").val() != "")
	{
		// Basic game settings
		var settings = new SFS2X.SFSGameSettings($("#gameNameIn").val());
		settings.groupId = GAME_ROOMS_GROUP_NAME;
		settings.isGame = true;
		settings.maxUsers = 2;
		settings.maxSpectators = Number($("#spectatorsIn").jqxNumberInput("val"));

		//Extension
		settings.extension = new SFS2X.RoomExtension(EXTENSION_ID, EXTENSIONS_CLASS);

		// Send CreateSFSGame request
		var isSent = sfs.send(new SFS2X.CreateSFSGameRequest(settings));

		// Close panel
		if (isSent)
			$("#createGameWin").jqxWindow("closeWindow");
	}
}

//------------------------------------
// SFS EVENT HANDLERS
//------------------------------------

function onConnection(event)
{
	// Reset view
	setView("login", false);

	if (event.success)
	{
		trace("Connected to SmartFoxServer 2X!");
	}
	else
	{
		var error = "Connection failed: " + (event.errorMessage ? event.errorMessage + " (code " + event.errorCode + ")" : "Is the server running at all?");
		showError(error);
	}
}

function onConnectionLost(event)
{
	// Reset view
	setView("login", true);

	enablePrivateChat(-1);
	onRoomSelected(null);

	//Remove Game Popup
	removeGamePopUp();

	// Show disconnection reason
	if (event.reason != SFS2X.ClientDisconnectionReason.MANUAL && event.reason != SFS2X.ClientDisconnectionReason.UNKNOWN)
	{
		var error = "You have been disconnected; reason is: " + event.reason;
		showError(error);
	}
	else
		trace("You have been disconnected; reason is: " + event.reason);
}

function onLoginError(event)
{
	// Reset view
	setView("login", true);

	// Show error
	var error = "Login error: " + event.errorMessage + " (code " + event.errorCode + ")";
	showError(error);
}

function onLogin(event)
{
	trace("Login successful!" +
		  "\n\tZone: " + event.zone +
		  "\n\tUser: " + event.user +
		  "\n\tData: " + event.data);

	// Set user name
	// NOTE: this always a good practice, in case a custom login procedure on the server side modified the username
	$("#usernameIn").val(event.user.name);

	// Check if the "game" group is already subscribed;
	// if not, subscribe it
	if (!sfs.roomManager.containsGroup(GAME_ROOMS_GROUP_NAME))
		sfs.send(new SFS2X.SubscribeRoomGroupRequest(GAME_ROOMS_GROUP_NAME));

	// Join lobby room
	joinLobbyRoom();

	// Private Chat system
	currentPrivateChat = -1;
	privateChats = [];
}

function onLogout(event)
{
	trace("Logout from zone " + event.zone + " performed!");

	// Switch to LOGIN view
	setView("login", true);

	enablePrivateChat(-1);
	onRoomSelected(null);
}

function onRoomJoinError(event)
{
	trace("Room join error: " + event.errorMessage + " (code: " + event.errorCode + ")", true);

	// Reset roomlist selection
	onRoomSelected(null);
}

function onRoomJoin(event)
{
	trace("Room joined: " + event.room);

	// Switch view
	if (event.room.name == LOBBY_ROOM_NAME)
	{
		inGame = false;

		$("#roomLb").html(event.room.name);
		setView("lobby", true);

		writeToLobbyChatArea("<em>You entered the '" + event.room.name + "'</em>");

		// Remove Game Popup
		removeGamePopUp();
	}
	else
	{
		inGame = true;

		setView("game", true);

		writeToGameChatArea("<em>You entered the '" + event.room.name + "'</em>");

		// Initialize the game
		initGame();

		// Reset roomlist selection
		onRoomSelected(null);
	}
}

function onPublicMessage(event)
{
	var sender = (event.sender.isItMe ? "You" : event.sender.name);
	var msg = "<b>" + sender + " said:</b><br/>" + event.message;

	if (event.room.name == LOBBY_ROOM_NAME)
		writeToLobbyChatArea(msg);
	else
		writeToGameChatArea(msg);
}

function onPrivateMessage(event)
{
	var user;

	if (event.sender.isItMe)
	{
		var userId = event.data.get("recipient"); // "data" is an SFSObject
		var user = sfs.userManager.getUserById(userId);
	}
	else
		user = event.sender;

	if (privateChats[user.id] == null)
		privateChats[user.id] = {queue:[], toRead:0};

	var message = "<b>" + (event.sender.isItMe ? "You" : event.sender.name) + " said:</b> " + event.message;
	privateChats[user.id].queue.push(message);

	if (currentPrivateChat == user.id)
		writeToPrivateChatArea(message);
	else
	{
		privateChats[user.id].toRead += 1;

		// For example code simplicity we rebuild the full userlist instead of just editing the specific item
		// This causes # of PM to read being displayed
		populateUsersList();
	}
}

function onUserEnterRoom(event)
{
	if (event.room.name == LOBBY_ROOM_NAME)
	{
		writeToLobbyChatArea("<em>User " + event.user.name + " (" + event.user.id + ") entered the room</em>");

		// For example code simplicity we rebuild the full userlist instead of just adding the specific item
		populateUsersList();
	}
	else
	{
		writeToGameChatArea("<em>User " + event.user.name + " (" + event.user.id + ") entered the room</em>");
	}
}

function onUserExitRoom(event)
{
	if (event.room.name == LOBBY_ROOM_NAME)
	{
		if (!event.user.isItMe)
			writeToLobbyChatArea("<em>User " + event.user.name + " (" + event.user.id + ") left the room</em>");

		// For example code simplicity we rebuild the full userlist instead of just removing the specific item
		populateUsersList();
	}
	else
	{
		if (!event.user.isItMe)
			writeToGameChatArea("<em>User " + event.user.name + " (" + event.user.id + ") left the room</em>");
	}

	// Disable private chat
	if (event.user.isItMe || event.user.id == currentPrivateChat)
		enablePrivateChat(-1);
}

function onUserCountChange(event)
{
	// For example code simplicity we rebuild the full roomlist instead of just updating the specific item
	populateRoomsList();
}

function onRoomRemove(event)
{
	trace("Room removed: " + event.room);

	// For example code simplicity we rebuild the full roomlist instead of just removing the item
	populateRoomsList();
}

function onRoomAdd(event)
{
	trace("Room added: " + event.room);

	// For example code simplicity we rebuild the full roomlist instead of just adding the new item
	populateRoomsList();

	if (event.room.id == selectedRoom.id)
		onRoomSelected(null);
}


//------------------------------------
// OTHER METHODS
//------------------------------------

function trace(txt, showAlert)
{
	console.log(txt);

	if (showAlert)
		alert(txt);
}

function showError(text)
{
	trace(text);
	$("#errorLb").html("<b>ATTENTION</b><br/>" + text);
	$("#errorLb").toggle();
}

function setView(viewId, doSwitch)
{
	// Check connection/login status to enable interface elements properly
	if (viewId == "login")
	{
		// Connect and disconnect buttons
		enableButton("#connectBt", !sfs.isConnected);
		enableButton("#disconnectBt", sfs.isConnected);

		// Login textinput and button
		enableTextField("#usernameIn", (sfs.isConnected && sfs.mySelf == null));
		enableButton("#loginBt", (sfs.isConnected && sfs.mySelf == null));

		// Hide create game window if open
		$("#createGameWin").jqxWindow("closeWindow");
	}
	else if (viewId == "lobby")
	{
		// Logout button
		enableButton("#logoutBt", (sfs.isConnected && sfs.mySelf != null));

		// Chat area
		enableChatArea((sfs.isConnected && sfs.lastJoinedRoom != null), doSwitch);

		if (sfs.isConnected && sfs.mySelf != null)
		{
			// Populate room & user lists
			populateRoomsList();
			populateUsersList();
		}
		else
		{
			// Clear room & user lists
			$("#roomList").jqxListBox("clear");
			$("#userList").jqxListBox("clear");
		}
	}
	else if (viewId == "game")
	{
		// Chat area
		enableChatArea((sfs.isConnected && sfs.lastJoinedRoom != null), doSwitch);
	}

	// Switch view
	if (doSwitch)
		switchView(viewId);
}

function switchView(viewId)
{
	if ($("#" + viewId).length <= 0)
		return;

	$('.viewStack').each(function(index)
	{
		if ($(this).attr("id") == viewId)
		{
			$(this).show();
			$(this).css({opacity:1}); // Opacity attribute is used on page load to hide the views because display:none causes issues to the NavigationBar widget
		}
		else
		{
			$(this).hide();
		}
	});
}

function enableButton(id, doEnable)
{
	$(id).jqxButton({disabled:!doEnable});
}

function enableTextField(id, doEnable)
{
	if (doEnable)
		$(id).removeAttr("disabled");
	else
		$(id).attr("disabled", true);
}

function enableChatArea(doEnable, clear)
{
	if(inGame == false)
	{
		if (clear)
		{
			$("#publicChatAreaPn").jqxPanel("clearcontent");
			$("#publicMsgIn").val("");
		}

		$("#publicChatAreaPn").jqxPanel({disabled:!doEnable});

		enableTextField("#publicMsgIn", doEnable);
		enableButton("#sendPublicMsgBt", doEnable);
	}
	else
	{
		if (clear)
		{
			$("#gameChatAreaPn").jqxPanel("clearcontent");
			$("#gameMsgIn").val("");
		}

		$("#gameChatAreaPn").jqxPanel({disabled:!doEnable});

		enableTextField("#gameMsgIn", doEnable);
		enableButton("#sendGameMsgBt", doEnable);
	}
}

function enablePrivateChat(userId)
{
	currentPrivateChat = userId;

	doEnable = (userId > -1);

	// Clear current chat
	$("#privChatAreaPn").jqxPanel("clearcontent");

	if (!doEnable)
	{
		$("#privateMsgIn").val("");
		$("#userList").jqxListBox("clearSelection");
		$("#privChatUserLb").html("");
	}
	else
	{
		$("#privChatUserLb").html("with <b>" + sfs.userManager.getUserById(userId).name + "</b>");

		// Fill chat with history
		if (privateChats[userId] != null)
		{
			privateChats[userId].toRead = 0;

			for (var i = 0; i < privateChats[userId].queue.length; i++)
				writeToPrivateChatArea(privateChats[userId].queue[i]);
		}
	}

	$("#privChatAreaPn").jqxPanel({disabled:!doEnable});

	enableTextField("#privateMsgIn", doEnable);
	enableButton("#sendPrivMsgBt", doEnable);
	enableButton("#deselectUserBt", doEnable);
}

function joinLobbyRoom()
{
	if (sfs.lastJoinedRoom == null || sfs.lastJoinedRoom.name != LOBBY_ROOM_NAME)
		sfs.send(new SFS2X.JoinRoomRequest(LOBBY_ROOM_NAME));
}

function writeToLobbyChatArea(text)
{
	$("#publicChatAreaPn").jqxPanel("append", "<p class='chatAreaElement'>" + text + "</p>");

	// Set chat area scroll position
	$("#publicChatAreaPn").jqxPanel("scrollTo", 0, $("#publicChatAreaPn").jqxPanel("getScrollHeight"));
}

function writeToPrivateChatArea(text)
{
	$("#privChatAreaPn").jqxPanel("append", "<p class='chatAreaElement'>" + text + "</p>");

	// Set chat area scroll position
	$("#privChatAreaPn").jqxPanel("scrollTo", 0, $("#privChatAreaPn").jqxPanel("getScrollHeight"));
}

function writeToGameChatArea(text)
{
	$("#gameChatAreaPn").jqxPanel("append", "<p class='chatAreaElement'>" + text + "</p>");

	// Set chat area scroll position
	$("#gameChatAreaPn").jqxPanel("scrollTo", 0, $("#gameChatAreaPn").jqxPanel("getScrollHeight"));
}

function populateRoomsList()
{
	var rooms = sfs.roomManager.getRoomList();
	var source = [];

	var selectedRoom = ($("#roomList").jqxListBox("selectedIndex") > -1 ? $("#roomList").jqxListBox("getSelectedItem").originalItem.roomObj.id : null);
	var selectedIndex;
	var index = 0;

	if (sfs.lastJoinedRoom != null && sfs.lastJoinedRoom.name == LOBBY_ROOM_NAME)
	{
		for (var r in rooms)
		{
			var room = rooms[r];

			if (room.isGame && !room.isPasswordProtected && !room.isHidden)
			{
				var players = room.userCount;
				var maxPlayers = room.maxUsers;
				var spectators = room.spectatorCount;
				var maxSpectators = room.maxSpectators;

				var item = {};
				item.html = "<div><p class='itemTitle game'> <strong>" + room.name + "</strong></p>" +
							"<p class='itemSub'>Players: " + players + "/" + maxPlayers +
							" | Spectators: " + spectators + "/" + maxSpectators + "</p></div>"
				item.title = room.name;
				item.roomObj = room;

				source.push(item);

				if (room.id == selectedRoom)
					selectedIndex = index;

				index ++;
			}
		}
	}

	$("#roomList").jqxListBox({source: source});

	// Set selected index
	$("#roomList").jqxListBox("selectedIndex", selectedIndex);
}

function populateUsersList()
{
	var index = 0;
	enableButton("#inviteUserBt", false);

	// "main" indicates the main user list contained in the right accordion of the lobby view

	var mainSource = [];
	var mainSelectedIndex = -1;
	var mainSelectedUser = ($("#userList").jqxListBox("selectedIndex") > -1 ? $("#userList").jqxListBox("getSelectedItem").title : null);

	if (sfs.lastJoinedRoom != null && sfs.lastJoinedRoom.name == LOBBY_ROOM_NAME)
	{
		var users = sfs.lastJoinedRoom.getUserList();

		for (var u in users)
		{
			var user = users[u];

			if (!user.isItMe)
			{
				var mainItem = {};
				mainItem.html = "<div><p class='itemTitle'><strong>" + user.name + "</strong></p>";

				// Private Messages
				if (privateChats[user.id] != null && privateChats[user.id].toRead > 0)
					mainItem.html += "<p class='itemSub toRead'>" + privateChats[user.id].toRead + " PM to read</p>";

				mainItem.html += "</div>";

				mainItem.title = user.name;
				mainItem.userObj = user;

				mainSource.push(mainItem);

				if (user.name == mainSelectedUser || (currentPrivateChat > -1 && user.id == currentPrivateChat))
					mainSelectedIndex = index;

				index++;
			}
		}
	}

	// Populate list
	$("#userList").jqxListBox({source: mainSource});

	// Set selected index
	$("#userList").jqxListBox("selectedIndex", mainSelectedIndex);

	// Make sure selected index is visible
	if (mainSelectedIndex > -1)
		$("#userList").jqxListBox("ensureVisible", mainSelectedIndex + 1);
}
