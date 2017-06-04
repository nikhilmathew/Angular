var LOBBY_ROOM_NAME = "The Lobby";
var USERVAR_COUNTRY = "country";
var USERVAR_RANKING = "rank";

var sfs = null;
var currentGameStarted = false;
var invitationsQueue = [];
var currentInvitation = null;

function init()
{
	trace("Application started");

	// Create configuration object
	var config = {};
	config.host = "127.0.0.1";
	config.port = 8080;
	config.zone = "BasicExamples";
	config.debug = true;

	// Create SmartFox client instance
	sfs = new SFS2X.SmartFox(config);

	// Set logging level
	sfs.logger.level = SFS2X.LogLevel.DEBUG;

	// Add event listeners
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, this);
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginError, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGIN, onLogin, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGOUT, onLogout, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, onRoomJoinError, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, onRoomJoin, this);
	sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, onPublicMessage, this);
	sfs.addEventListener(SFS2X.SFSEvent.USER_ENTER_ROOM, onUserEnterRoom, this);
	sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, onUserExitRoom, this);
	sfs.addEventListener(SFS2X.SFSEvent.USER_VARIABLES_UPDATE, onUserVariablesUpdate, this);
	sfs.addEventListener(SFS2X.SFSEvent.USER_COUNT_CHANGE, onUserCountChange, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_REMOVE, onRoomRemove, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_ADD, onRoomAdd, this);
	sfs.addEventListener(SFS2X.SFSEvent.INVITATION, onInvitation, this);

	// Show LOGIN view
	setView("login", true);
}

//------------------------------------
// USER INTERFACE HANDLERS
//------------------------------------

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
 * Update corresponding user variables when country or ranking are changed.
 */
function onPlayerProfileChange()
{
	var country = $("#countryDd").jqxDropDownList("getSelectedItem").value;
	var countryVar = new SFS2X.SFSUserVariable(USERVAR_COUNTRY, country);

	var ranking = Number($("#rankingIn").jqxNumberInput("getDecimal"));
	var rankingVar = new SFS2X.SFSUserVariable(USERVAR_RANKING, ranking);

	var isSent = sfs.send(new SFS2X.SetUserVariablesRequest([countryVar, rankingVar]));
}

/**
 * Public message send button click handler.
 * Send a public message, which will be displayed in the chat area (see onPublicMessage event).
 */
function onSendPublicMessageBtClick(event)
{
	if ($("#publicMsgIn").val() != "")
	{
		var isSent = sfs.send(new SFS2X.PublicMessageRequest($("#publicMsgIn").val()));

		if (isSent)
			$("#publicMsgIn").val("");
	}
}

/**
 * When a user is selected in the user list, enable the button to challenge him in a new game.
 * In the game creation window the game is automatically set to private and the user is selected in the invitees list.
 */
function onUserSelected(event)
{
	enableButton("#inviteUserBt", true);
}

/**
 * When a room is selected in the room list, the user joins the room to play.
 */
function onRoomSelected(event)
{
	var args = event.args;
    var item = $("#roomList").jqxListBox("getItem", args.index);
	var room = item.originalItem.roomObj;

	// Join selected room
	sfs.send(new SFS2X.JoinRoomRequest(room));
}

/**
 * Leave game button click handler.
 * In order to leave the current game room, the lobby room is joined.
 */
function onLeaveGameBtClick(event)
{
	// Join the lobby
	joinLobbyRoom();
}

/**
 * Challenge user button click handler.
 * Shows the game room creation panel with the game automatically set to private and the user selected in the invitees list.
 */
function onInviteUserBtClick(event)
{
	var selectedUserItem = $("#userList").jqxListBox("getSelectedItem");

	// Set game as private
	$("#isPublicCb").jqxCheckBox("uncheck");

	// Select user to be invited to play
	var users = $("#userSelector").jqxListBox("source");
	for (var i = 0; i < users.length; i++)
	{
		if (users[i] == selectedUserItem.title)
		{
			$("#userSelector").jqxListBox("selectIndex", i);
			break;
		}
	}

	// Show create game window
	onCreateGameBtClick();
}

/**
 * Enter a random game among those available.
 */
function onQuickJoinBtClick(event)
{
	sfs.send(new SFS2X.QuickJoinGameRequest(null, ["games"], sfs.lastJoinedRoom));
}

/**
 * Create game button click handler.
 * Shows the game room creation panel.
 */
function onCreateGameBtClick(event)
{
	// Set matching criteria
	var country = $("#countryDd").jqxDropDownList("getSelectedItem").value;
	$("#countryLb").html(country);

	var ranking = Number($("#rankingIn").jqxNumberInput("getDecimal"));
	$("#rankingLb").html(ranking);

	// Show create game window
	$("#createGameWin").jqxWindow("open");
}

/**
 * When the game creation panel is closed, all the form items it contains are reset to default values.
 */
function onCreateGameWinClose(event)
{
	$("#createGameWinTabs").jqxTabs("select", 0);
	$("#gameNameIn").val("");
	$("#gameTypeDd").jqxDropDownList("selectIndex", 0);
	$("#maxPlayersIn").jqxNumberInput("inputValue", 4);
	$("#minPlayersIn").jqxNumberInput("inputValue", 2);
	$("#countryLb").html("&nbsp;");
	$("#rankingLb").html("&nbsp;");
	$("#isPublicCb").jqxCheckBox("check");
}

/**
 * Makes sure the "max players in room" and "min players to start the game" parameters are not contradictory (min < max).
 */
function onMaxPlayersChange(event)
{
	var maxPlayers = Number($("#maxPlayersIn").jqxNumberInput("val"));
	var minPlayers = Number($("#minPlayersIn").jqxNumberInput("val"));

	if (minPlayers > maxPlayers)
	{
		minPlayers = maxPlayers;
		$("#minPlayersIn").jqxNumberInput("inputValue", minPlayers);
	}
}

/**
 * Makes sure the "max players in room" and "min players to start the game" parameters are not contradictory (min < max).
 */
function onMinPlayersChange(event)
{
	var maxPlayers = Number($("#maxPlayersIn").jqxNumberInput("val"));
	var minPlayers = Number($("#minPlayersIn").jqxNumberInput("val"));

	if (minPlayers > maxPlayers)
	{
		maxPlayers = minPlayers;
		$("#maxPlayersIn").jqxNumberInput("inputValue", maxPlayers);
	}
}

/**
 * Enable invitees selection for private games.
 */
function onPublicGameChange(event)
{
	var isPublic = event.args.checked;

	enableTextField("#invitationMsgIn", !isPublic);
	$("#userSelector").jqxListBox({disabled:isPublic});
	$("#userSelector").jqxListBox("clearSelection");
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
		settings.groupId = "games";
		settings.maxUsers = Number($("#maxPlayersIn").jqxNumberInput("val"));
		settings.minPlayersToStartGame = Number($("#minPlayersIn").jqxNumberInput("val"));
		settings.isPublic = $("#isPublicCb").jqxCheckBox("checked");
		settings.leaveLastJoinedRoom = true;
		settings.notifyGameStarted = true;

		// Additional settings specific to private games
		if (!settings.isPublic) // This check is actually superfluous: if the game is public the invitation-related settings are ignored
		{
			// Retrieve users to be invited (if any)
			var users = $("#userSelector").jqxListBox("getSelectedItems");
			if (users.length > 0)
			{
				settings.invitedPlayers = [];

				for (var i = 0; i < users.length; i++)
					settings.invitedPlayers.push(sfs.lastJoinedRoom.getUserByName(users[i].value));
			}

			// Search the "default" group, which in this example contains The Lobby room only
			settings.searchableRooms = ["default"];

			// Additional invitation parameters
			var invParams = new SFS2X.SFSObject();
			invParams.put("gameType", $("#gameTypeDd").jqxDropDownList("getSelectedItem").value, SFS2X.SFSDataType.UTF_STRING);
			invParams.put("room", $("#gameNameIn").val(), SFS2X.SFSDataType.UTF_STRING);
			invParams.put("message", $("#invitationMsgIn").val(), SFS2X.SFSDataType.UTF_STRING);
			settings.invitationParams = invParams;
		}

		// Players match expression
		var matchExp = new SFS2X.MatchExpression(USERVAR_COUNTRY, SFS2X.StringMatch.EQUALS, $("#countryDd").jqxDropDownList("getSelectedItem").value);
		matchExp.and(USERVAR_RANKING, SFS2X.NumberMatch.GREATER_THAN_OR_EQUAL_TO, Number($("#rankingIn").jqxNumberInput("getDecimal")));
		settings.playerMatchExpression = matchExp;

		// Send CreateSFSGame request
		var isSent = sfs.send(new SFS2X.CreateSFSGameRequest(settings));

		// Close panel
		if (isSent)
			$("#createGameWin").jqxWindow("closeWindow");
	}
}

function onAcceptInvBtClick(event)
{
	replyToInvitation(true);
}

function onRefuseInvBtClick(event)
{
	replyToInvitation(false);
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
	$("#usernameLb").html(event.user.name);

	// Set default player details
	onPlayerProfileChange();

	// Join lobby room
	joinLobbyRoom();
}

function onLogout(event)
{
	trace("Logout from zone " + event.zone + " performed!");

	// Switch to LOGIN view
	setView("login", true);
}

function onRoomJoinError(event)
{
	trace("Room join error: " + event.errorMessage + " (code: " + event.errorCode + ")", true);

	// Reset roomlist selection
	$("#roomList").jqxListBox("clearSelection");
}

function onRoomJoin(event)
{
	trace("Room joined: " + event.room);

	// Switch view
	if (event.room.name == LOBBY_ROOM_NAME)
	{
		$("#roomLb").html(event.room.name);
		setView("lobby", true);

		// Reset game state in case a game was joined previously
		currentGameStarted = false;
	}
	else
	{
		setView("game", true);

		// Write game state to log area
		$("#gameLogPn").jqxPanel("clearcontent");

		writeToGameLogArea("You entered the game<br/><em>This is just a placeholder to show the game-related events</em>");

		setGameState(true);
	}
}

function onPublicMessage(event)
{
	var sender = (event.sender.isItMe ? "You" : event.sender.name);

	if (event.room.name == LOBBY_ROOM_NAME)
		writeToLobbyChatArea("<b>" + sender + " said:</b><br/>" + event.message);
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
		writeToGameLogArea("User " + event.user.name + " joined the game", true);

		setGameState(true);
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
		{
			writeToGameLogArea("User " + event.user.name + " left the game", true);

			setGameState(false);
		}
	}
}

function onUserVariablesUpdate(event)
{
	// Check if the 'country' or 'ranking' variables were set/updated
	if (event.changedVars.indexOf(USERVAR_COUNTRY) > -1 || event.changedVars.indexOf(USERVAR_RANKING) > -1)
	{
		// For example code simplicity we rebuild the full userlist instead of just editing the specific item
		populateUsersList();
	}
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
}

function onInvitation(event)
{
	// Retrieve invitation data
	var invitation = event.invitation;

	// Display invitation panel
	processInvitation(invitation);
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
		// Nothing to initialize
	}

	// Switch view
	if (doSwitch)
		switchView(viewId);
}

function switchView(viewId)
{
	if ($("#" + viewId).length <= 0)
		return;

	$('.viewStack').each(function(index) {
		if ($(this).attr("id") == viewId) {
			$(this).show();
			$(this).css({opacity:1}); // Opacity attribute is used on page load to hide the views because display:none causes issues to the NavigationBar widget
		}
		else {
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
	if (clear)
	{
		$("#publicChatAreaPn").jqxPanel("clearcontent");
		$("#publicMsgIn").val("");
	}

	$("#publicChatAreaPn").jqxPanel({disabled:!doEnable});

	enableTextField("#publicMsgIn", doEnable);
	enableButton("#sendPublicMsgBt", doEnable);
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

function writeToGameLogArea(text, dampen)
{
	$("#gameLogPn").jqxPanel("append", "<p class='gameLogElement" + (dampen ? " dampen" : "") + "'>" + text + "</p>");

	// Set panel scroll position
	$("#gameLogPn").jqxPanel("scrollTo", 0, $("#gameLogPn").jqxPanel("getScrollHeight"));
}

function populateRoomsList()
{
	var rooms = sfs.roomManager.getRoomList();
	var source = [];

	if (sfs.lastJoinedRoom != null && sfs.lastJoinedRoom.name == LOBBY_ROOM_NAME)
	{
		for (var r in rooms)
		{
			var room = rooms[r];

			if (room.isGame && !room.isPasswordProtected && !room.isHidden)
			{
				var players = room.userCount;
				var maxPlayers = room.maxUsers;
				var isStarted = room.getVariable(SFS2X.ReservedRoomVariables.RV_GAME_STARTED).value;

				var item = {};
				item.html = "<div><p class='itemTitle game'><strong>" + room.name + "</strong></p>" +
							"<p class='itemSub'>Players: " + players + "/" + maxPlayers + "</p>" +
							"<p class='itemSub'>" + (isStarted ? "Match started" + (players < maxPlayers ? ", join anyway!" : "") : "Waiting for players, wanna join?") + "</p></div>";
				item.title = room.name;
				item.roomObj = room;

				source.push(item);
			}
		}
	}

	$("#roomList").jqxListBox({source: source});
}

function populateUsersList()
{
	var index = 0;
	enableButton("#inviteUserBt", false);

	// "main" indicates the main user list contained in the right accordion of the lobby view
	// "sec" indicates the secondary user list contained in the invitation tab of the game creation panel

	var mainSource = [];
	var mainSelectedIndex = -1;
	var mainSelectedUser = ($("#userList").jqxListBox("selectedIndex") > -1 ? $("#userList").jqxListBox("getSelectedItem").title : null);

	var secSource = [];
	var secSelectedIndexes = [];
	var secSelectedItems = $("#userSelector").jqxListBox("getSelectedItems");
	var secSelectedUsers = [];

	for (var o in secSelectedItems)
		secSelectedUsers.push(secSelectedItems[o].value);

	if (sfs.lastJoinedRoom != null && sfs.lastJoinedRoom.name == LOBBY_ROOM_NAME)
	{
		var users = sfs.lastJoinedRoom.getUserList();

		for (var u in users)
		{
			var user = users[u];

			if (!user.isItMe)
			{
				// MAIN USER LIST
				var mainItem = {};
				mainItem.html = "<div><p class='itemTitle'><strong>" + user.name + "</strong></p>";

				if (user.containsVariable(USERVAR_COUNTRY))
					mainItem.html += "<p class='itemSub'>Country: <strong>" + user.getVariable(USERVAR_COUNTRY).value + "</strong></p>";

				if (user.containsVariable(USERVAR_RANKING))
					mainItem.html += "<p class='itemSub'>Ranking: <strong>" + user.getVariable(USERVAR_RANKING).value + "</strong></p>";

				mainItem.html += "</div>";

				mainItem.title = user.name;
				mainItem.userObj = user;

				mainSource.push(mainItem);

				if (user.name == mainSelectedUser)
					mainSelectedIndex = index;

				// SECONDARY USER LIST
				secSource.push(user.name);

				if (secSelectedUsers.indexOf(user.name) > -1)
					secSelectedIndexes.push(index);

				index++;
			}
		}
	}

	// MAIN USER LIST

	// Populate list
	$("#userList").jqxListBox({source: mainSource});

	// Set selected index
	$("#userList").jqxListBox("selectedIndex", mainSelectedIndex);

	// Make sure selected index is visible
	if (mainSelectedIndex > -1)
		$("#userList").jqxListBox("ensureVisible", mainSelectedIndex + 1);

	// SECONDARY USER LIST

	// Populate list
	$("#userSelector").jqxListBox({source: secSource});

	// Set selected indexes
	for (var i = 0; i < secSelectedIndexes.length; i++)
		$("#userSelector").jqxListBox("selectIndex", secSelectedIndexes[i]);
}

function setGameState(isJoin)
{
	if (sfs.lastJoinedRoom != null)
	{
		var room = sfs.lastJoinedRoom;

		if (room.containsVariable(SFS2X.ReservedRoomVariables.RV_GAME_STARTED))
		{
			var isStarted = room.getVariable(SFS2X.ReservedRoomVariables.RV_GAME_STARTED).value;

			if (!isStarted)
			{
				if (!currentGameStarted)
				{
					// Game wasn't started and still isn't started
					if (isJoin)
					{
						var players = room.getPlayerList().length;
						writeToGameLogArea("Waiting for more players to start the game (" + players + " player" + (players > 1 ? "s" : "") + " currently in the room)");
					}
				}
				else
				{
					// Game was running but now it is stopped
					writeToGameLogArea("<b>GAME STOPPED</b> (not enough players)");
				}
			}
			else
			{
				if (!currentGameStarted)
				{
					// Game wasn't started and now it is
					writeToGameLogArea("<b>GAME STARTED</b> (minimum number of players was reached)");
				}
				else
				{
					// Game was running and it is still running
					// Probably another player joined the game; nothing to log
				}
			}

			currentGameStarted = isStarted;
		}
	}
}

/**
 * Process an invitation, displaying the invitation accept/refuse panel.
 * If multiple invitations are received, a queue is used.
 */
function processInvitation(invitation)
{
	// Remove game creation panel (if open)
	$("#createGameWin").jqxWindow("closeWindow");

	// Check if a previous invitation was received (the panel is already displayed)
	// If yes, put the new invitation in a queue
	if (!$("#invitationWin").jqxWindow("isOpen"))
	{
		// Show invitation panel
		$("#invitationWin").jqxWindow("open");

		// Get invitation custom parameters
		var invCustomParams = invitation.params;

		var message = "";

		if (invCustomParams.get("message") != "")
			message += '<em>"' + invCustomParams.get("message") + '"</em><br/>';

		message += "You have been invited by <strong>" + invitation.inviter.name + "</strong> to play <strong>" + invCustomParams.get("gameType") + "</strong> in room <strong>" + invCustomParams.get("room") + "</strong>";

		// Display message in the invitation panel
		$("#invitationMsgLb").html(message);

		// Display remaining time for replying
		$("#expTimeLb").html(invitation.secondsForAnswer);

		// Save current invitations details
		currentInvitation = {};
		currentInvitation.inv = invitation;
		currentInvitation.timer = invitation.secondsForAnswer;

		// Launch timer to detect invitation
		currentInvitation.timeout = setTimeout(onInvitationTick, 1000, this);
	}
	else
	{
		var obj = {};
		obj.invitation = invitation;
		obj.time = (new Date()).getTime();

		invitationsQueue.push(obj);
	}
}

function onInvitationTick(scope)
{
	if (scope.currentInvitation != null)
	{
		scope.currentInvitation.timer -= 1;

		// Display remaining time for replying
		$("#expTimeLb").html(scope.currentInvitation.timer);

		if (scope.currentInvitation.timer <= 0)
		{
			// Auto-refuse invitation, just like if the user clicked the button
			scope.replyToInvitation(false);
		}
		else
		{
			// Keep running the timer
			scope.currentInvitation.timeout = setTimeout(onInvitationTick, 1000, scope);
		}
	}
}

function replyToInvitation(accept)
{
	// Clear timer
	clearTimeout(currentInvitation.timeout);

	var invitation = currentInvitation.inv;
	currentInvitation = null;

	// Remove invitation panel
	$("#invitationWin").jqxWindow("closeWindow");

	// Accept/refuse invitation
	var request = new SFS2X.InvitationReplyRequest(invitation, (accept ? SFS2X.InvitationReply.ACCEPT : SFS2X.InvitationReply.REFUSE));
	sfs.send(request);

	// If invitation was accepted, refuse all remaining invitations in the queue
	if (accept)
	{
		// Refuse other invitations
		for (var o in invitationsQueue)
		{
			var otherInv = invitationsQueue[o];
			sfs.send(new SFS2X.InvitationReplyRequest(otherInv.invitation, SFS2X.InvitationReply.REFUSE));
		}

		invitationsQueue = [];
	}

	// If invitation was refused, process next invitation in the queue (if any)
	else
	{
		while (invitationsQueue.length > 0)
		{
			var obj = invitationsQueue.splice(0, 1)[0];
			var invitation = obj.invitation;

			// Evaluate remaining time for replying (invitation.secondsForAnswer value is updated on the invitation object directly)
			var now = (new Date()).getTime();
			var elapsed = Math.ceil((now - obj.time) / 1000);
			invitation.secondsForAnswer -= elapsed;

			// Display invitation only if expiration will occur in 3 seconds or more
			if (invitation.secondsForAnswer >= 3)
			{
				processInvitation(invitation);
				break;
			}
		}
	}
}
