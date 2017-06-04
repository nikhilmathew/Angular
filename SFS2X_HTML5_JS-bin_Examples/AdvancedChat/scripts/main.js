var sfs = null;

function init()
{
	trace("Application started");

	// Create configuration object
	var config = {};
	config.host = "localhost";
	config.port = 8080;
	config.zone = "BasicExamples";
	config.debug = true;
	config.useSSL = false;

	// Create SmartFox client instance
	sfs = new SFS2X.SmartFox(config);

	sfs.logger.level = SFS2X.LogLevel.DEBUG;

	// Add event listeners
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, this);
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginError, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGIN, onLogin, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGOUT, onLogout, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, onRoomJoinError, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, onRoomJoin, this);
	sfs.addEventListener(SFS2X.SFSEvent.USER_COUNT_CHANGE, onUserCountChange, this);
	sfs.addEventListener(SFS2X.SFSEvent.USER_ENTER_ROOM, onUserEnterRoom, this);
	sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, onUserExitRoom, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_REMOVE, onRoomRemove, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, onRoomCreationError, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_ADD, onRoomAdd, this);
	sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, onPublicMessage, this);
	sfs.addEventListener(SFS2X.SFSEvent.PRIVATE_MESSAGE, onPrivateMessage, this);
	sfs.addEventListener(SFS2X.SFSEvent.MODERATOR_MESSAGE, onModeratorMessage, this);
	sfs.addEventListener(SFS2X.SFSEvent.ADMIN_MESSAGE, onAdminMessage, this);
	sfs.addEventListener(SFS2X.SFSEvent.OBJECT_MESSAGE, onObjectMessage, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, onRoomVariablesUpdate, this);
	sfs.addEventListener(SFS2X.SFSEvent.USER_VARIABLES_UPDATE, onUserVariablesUpdate, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_NAME_CHANGE, onRoomNameChange, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_NAME_CHANGE_ERROR, onRoomNameChangeError, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_PASSWORD_STATE_CHANGE, onRoomPasswordStateChange, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_PASSWORD_STATE_CHANGE_ERROR, onRoomPasswordStateChangeError, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_CAPACITY_CHANGE, onRoomCapacityChange, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_CAPACITY_CHANGE_ERROR, onRoomCapacityChangeError, this);
	sfs.addEventListener(SFS2X.SFSEvent.SPECTATOR_TO_PLAYER_ERROR, onSpectatorToPlayerError, this);
	sfs.addEventListener(SFS2X.SFSEvent.SPECTATOR_TO_PLAYER, onSpectatorToPlayer, this);
	sfs.addEventListener(SFS2X.SFSEvent.PLAYER_TO_SPECTATOR_ERROR, onPlayerToSpectatorError, this);
	sfs.addEventListener(SFS2X.SFSEvent.PLAYER_TO_SPECTATOR, onPlayerToSpectator, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_GROUP_SUBSCRIBE, onRoomGroupSubscribe, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_GROUP_SUBSCRIBE_ERROR, onRoomGroupSubscribeError, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_GROUP_UNSUBSCRIBE, onRoomGroupUnsubscribe, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_GROUP_UNSUBSCRIBE_ERROR, onRoomGroupUnsubscribeError, this);
	sfs.addEventListener(SFS2X.SFSEvent.PING_PONG, onPingPong, this);
}

//------------------------------------
// USER INTERFACE HANDLERS
//------------------------------------

function onConnectBtClick()
{
	// Connect to SFS
	// As no parameters are passed, the config object is used
	sfs.connect();

	// Disable button
	enableButton("#connectBt", false);
}

function onLoginBtClick()
{
	// Perform login
	var uName = $("#usernameIn").val();
	var isSent = sfs.send(new SFS2X.LoginRequest(uName));

	// Disable interface
	if (isSent)
	{
		enableTextField("#usernameIn", false);
		enableButton("#loginBt", false);
	}
}

function onLogoutBtClick()
{
	var isSent = sfs.send(new SFS2X.LogoutRequest());

	if (isSent)
		enableButton("#logoutBt", false);
}

function onDisconnectBtClick()
{
	// Disconnect from SFS
	sfs.disconnect();

	// Disable button
	enableButton("#disconnectBt", false);
}

function onRoomSelected(event)
{
	var args = event.args;
    var item = $("#roomList").jqxListBox("getItem", args.index);
	var room = item.originalItem.roomObj;

	// Join selected room
	if (sfs.lastJoinedRoom == null || room.id != sfs.lastJoinedRoom.id)
		sfs.send(new SFS2X.JoinRoomRequest(room));
}

function onLeaveRoomBtClick(event)
{
	var isSent = sfs.send(new SFS2X.LeaveRoomRequest(sfs.lastJoinedRoom));

	if (isSent)
	{
		enableChatArea(false, true);
		enableRoomControls(false);
		$("#roomList").jqxListBox("clearSelection");
	}
}

function onCreateRoomBtClick(event)
{
	// Show create Room window
	$("#createRoomWin").jqxWindow("open");
}

function onCreateRoomWinClose(event)
{
	if (event.type === "hide")
	{
		if (event.args.dialogResult.OK)
		{
			var autoJoin = $("#autoJoinCb").jqxCheckBox("checked");
			var roomSettings = new SFS2X.RoomSettings($("#roomNameIn").val());

			// Send CreateRoom request
			sfs.send(new SFS2X.CreateRoomRequest(roomSettings, autoJoin));
		}

		// Clear fields
		$("#roomNameIn").val("");
	}
}

function onDoCreateRoomBtClick(event)
{
	var autoJoin = $("#autoJoinCb").jqxCheckBox("checked");

	var roomSettings = new SFS2X.RoomSettings($("#roomNameIn").val());
	roomSettings.password = $("#passwordIn").val();
	roomSettings.groupId = $("#groupIn").val();
	roomSettings.isGame = $("#isGameCb").jqxCheckBox("checked");
	roomSettings.maxUsers = Number($("#maxUsersIn").jqxNumberInput("decimal"));
	roomSettings.maxSpectators = Number($("#maxSpectatorsIn").jqxNumberInput("decimal"));
	roomSettings.maxVariables = Number($("#maxVariablesIn").jqxNumberInput("decimal"));

	var permissions = new SFS2X.RoomPermissions();
	permissions.allowNameChange = $("#isNameChangeAllowedCb").jqxCheckBox("checked");
	permissions.allowPasswordStateChange = $("#isPwdStateChangeAllowedCb").jqxCheckBox("checked");
	permissions.allowPublicMessages = $("#isPublicMessageAllowedCb").jqxCheckBox("checked");
	permissions.allowResizing = $("#isResizeAllowedCb").jqxCheckBox("checked");
	roomSettings.permissions = permissions;

	// Send CreateRoom request
	var isSent = sfs.send(new SFS2X.CreateRoomRequest(roomSettings, autoJoin, sfs.lastJoinedRoom));

	if (isSent)
	{
		// Hide window
		$("#createRoomWin").jqxWindow("hide");
		$("#createRoomWinTabs").jqxTabs("select", 0);

		// Clear fields
		$("#roomNameIn").val("");
		$("#passwordIn").val("");
		$("#groupIn").val("default");
		$("#isGameCb").jqxCheckBox({checked:false});
		$("#maxUsersIn").jqxNumberInput({decimal:10});
		$("#maxSpectatorsIn").jqxNumberInput({decimal:0});
		$("#maxVariablesIn").jqxNumberInput({decimal:5});

		$("#isNameChangeAllowedCb").jqxCheckBox({checked:true});
		$("#isPwdStateChangeAllowedCb").jqxCheckBox({checked:true});
		$("#isPublicMessageAllowedCb").jqxCheckBox({checked:true});
		$("#isResizeAllowedCb").jqxCheckBox({checked:true});
	}
}

function onSendPublicMessageBtClick(event)
{
	var isSent = sfs.send(new SFS2X.PublicMessageRequest($("#publicMsgIn").val()));

	if (isSent)
		$("#publicMsgIn").val("");
}

function onSetTopicBtClick(event)
{
	// Set a Room Variable containing the chat topic
	// Null is used to delete the Room Variable
	var topic = $("#roomTopicIn").val() != "" ? $("#roomTopicIn").val() : null;
	var roomVar = new SFS2X.SFSRoomVariable("topic", topic);

	sfs.send(new SFS2X.SetRoomVariablesRequest([roomVar]));
}

function onSetRoomNameBtClick(event)
{
	var isSent = sfs.send(new SFS2X.ChangeRoomNameRequest(sfs.lastJoinedRoom, $("#newRoomNameIn").val()));

	if (isSent)
		$("#newRoomNameIn").val("");
}

function onSetRoomPwdBtClick(event)
{
	var isSent = sfs.send(new SFS2X.ChangeRoomPasswordStateRequest(sfs.lastJoinedRoom, $("#newPasswordIn").val()));

	if (isSent)
		$("#newPasswordIn").val("");
}

function onSetRoomSizeBtClick(event)
{
	var newMaxUsers = Number($("#newRoomSizeIn").jqxNumberInput("decimal"));
	var newMaxSpectators = sfs.lastJoinedRoom.maxSpectators; // Leave this unaltered
	var isSent = sfs.send(new SFS2X.ChangeRoomCapacityRequest(sfs.lastJoinedRoom, newMaxUsers, newMaxSpectators));

	if (isSent)
		$("#newRoomSizeIn").jqxNumberInput({decimal:10});
}

function onSetUserNickBtClick(event)
{
	// Set a User Variable containing the user nickname
	// Null is used to delete the User Variable
	var nick = $("#userNickIn").val() != "" ? $("#userNickIn").val() : null;
	var userVar = new SFS2X.SFSUserVariable("nick", nick);

	var isSent = sfs.send(new SFS2X.SetUserVariablesRequest([userVar]));

	if (isSent)
		$("#userNickIn").val("");
}

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
			enablePrivateChatAndMod(user.id);

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
	enablePrivateChatAndMod(-1);
}

function onSwitchRoleBtClick(event)
{
	if (sfs.lastJoinedRoom != null && sfs.lastJoinedRoom.isGame)
	{
		if (sfs.mySelf.isPlayer)
			sfs.send(new SFS2X.PlayerToSpectatorRequest());
		else
			sfs.send(new SFS2X.SpectatorToPlayerRequest());
	}
}

function onKickBtClick(event)
{
	if (currentPrivateChat > -1)
		sfs.send(new SFS2X.KickUserRequest(currentPrivateChat, "Think about your behavior and come back later, you are kicked!"));
}

function onBanBtClick(event)
{
	if (currentPrivateChat > -1)
		sfs.send(new SFS2X.BanUserRequest(currentPrivateChat, "Time for some vacation... you are banned!", SFS2X.BanMode.BY_NAME));
}

//------------------------------------
// SFS EVENT HANDLERS
//------------------------------------

function onConnection(event)
{
	if (event.success)
	{
		trace("Connected to SmartFoxServer 2X!");
		trace("Session id: " + sfs.sessionToken);

		// Enable interface
		enableTextField("#usernameIn", true);
		enableButton("#loginBt", true);
		enableButton("#disconnectBt", true);
	}
	else
	{
		trace("Connection failed: " + (event.errorMessage ? event.errorMessage + " (" + event.errorCode + ")" : "Is the server running at all?"), true);

		// Enable button
		enableButton("#connectBt", true);
	}
}

function onConnectionLost(event)
{
	trace("I was disconnected; reason is: " + event.reason);

	// Disable interface
	enableTextField("#usernameIn", false);
	enableButton("#loginBt", false);
	enableButton("#logoutBt", false);
	enableButton("#disconnectBt", false);
	enableButton("#createRoomBt", false);
	enableRoomControls(false);
	enableTextField("#userNickIn", false);
	enableButton("#setUserNickBt", false);
	enablePrivateChatAndMod(-1);

	enableButton("#connectBt", true);

	// Empty room & user lists
	$("#roomList").jqxListBox("clear");
	$("#userList").jqxListBox("clear");

	// Clear and disable chat area
	enableChatArea(false, true);

	// Hide create Room window if open
	$("#createRoomWin").jqxWindow("hide");
}

function onLoginError(event)
{
	trace("Login error: " + event.errorMessage + " (" + event.errorCode + ")", true);

	// Enable interface
	enableTextField("#usernameIn", true);
	enableButton("#loginBt", true);
}

function onLogin(event)
{
	trace("Login successful!" +
		  "\n\tZone: " + event.zone +
		  "\n\tUser: " + event.user +
		  "\n\tData: " + event.data);

	// Enable interface
	enableButton("#logoutBt", true);
	enableButton("#createRoomBt", true);

	// Set user name
	$("#usernameIn").val(event.user.name);

	// Populate rooms list
	populateRoomsList();

	currentPrivateChat = -1;
	privateChats = [];
	enableTextField("#userNickIn", true);
	enableButton("#setUserNickBt", true);

	sfs.enableLagMonitor(true, 5);
}

function onLogout(event)
{
	trace("Logout from zone " + event.zone + " performed!");

	// Enable login interface
	enableTextField("#usernameIn", true);
	enableButton("#loginBt", true);

	// Disable interface
	enableChatArea(false, true);
	enableButton("#createRoomBt", false);
	enableRoomControls(false);
	enableTextField("#userNickIn", false);
	enableButton("#setUserNickBt", false);
	enablePrivateChatAndMod(-1);
	$("#lagLb").text("&nbsp;");

	// Empty room & user lists
	$("#roomList").jqxListBox("clear");
	$("#userList").jqxListBox("clear");
}

function onRoomJoinError(event)
{
	trace("Room join error: " + event.errorMessage + " (" + event.errorCode + ")", true);

	// Reset roomlist selection
	if (sfs.lastJoinedRoom != null)
	{
		var index = searchRoomList(sfs.lastJoinedRoom.id);
		$("#roomList").jqxListBox("selectIndex", index);
	}
	else
		$("#roomList").jqxListBox("clearSelection");
}

function onRoomJoin(event)
{
	trace("Room joined: " + event.room);

	// Enable interface
	enableChatArea(true, true);
	enableRoomControls(true);

	writeToChatArea("<em>You entered room '" + event.room.name + "'</em>");

	showRoomTopic(event.room);

	// Populate users list
	populateUsersList();
}

function onUserCountChange(event)
{
	// For example code simplicity we rebuild the full roomlist instead of just updating the specific item
	populateRoomsList();
}

function onUserEnterRoom(event)
{
	writeToChatArea("<em>User " + event.user.name + " (" + event.user.id + ") entered the room</em>");

	// For example code simplicity we rebuild the full userlist instead of just adding the specific item
	populateUsersList();
}

function onUserExitRoom(event)
{
	if (!event.user.isItMe)
		writeToChatArea("<em>User " + event.user.name + " (" + event.user.id + ") left the room</em>");

	// For example code simplicity we rebuild the full userlist instead of just removing the specific item
	populateUsersList();

	// Disable private chat
	if (event.user.isItMe || event.user.id == currentPrivateChat)
		enablePrivateChatAndMod(-1);
}

function onRoomRemove(event)
{
	trace("Room removed: " + event.room);

	// For example code simplicity we rebuild the full roomlist instead of just removing the item
	populateRoomsList();
}

function onRoomCreationError(event)
{
	trace("Room create error: " + event.errorMessage + " (" + event.errorCode + ")", true);
}

function onRoomAdd(event)
{
	trace("Room added: " + event.room);

	// For example code simplicity we rebuild the full roomlist instead of just adding the new item
	populateRoomsList();
}

function onPublicMessage(event)
{
	var sender = (event.sender.isItMe ? "You" : event.sender.name);
	var nick = event.sender.getVariable("nick");
	var aka = (!event.sender.isItMe && nick != null ? " (aka '" + nick.value + "')" : "");
	writeToChatArea("<b>" + sender + aka + " said:</b><br/>" + event.message);
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

		// For code simplicity we rebuild the full userlist instead of just editing the specific item
		// This causes # of PM to read being displayed
		populateUsersList();
	}
}

function onObjectMessage(event)
{
	// For testing purposes only
	trace("Object Message received, content follows:")
	trace(event);
}

function onModeratorMessage(event)
{
	writeToChatArea("<em class='mod'>Message from <b>Moderator " + event.sender.name + ":</b><br/>" + event.message + "</em>");
}

function onAdminMessage(event)
{
	writeToChatArea("<em class='admin'>Message from <b>Administrator " + event.sender.name + ":</b><br/>" + event.message + "</em>");
}

function onRoomVariablesUpdate(event)
{
	// Check if the 'topic' variable was set/updated
	if (event.changedVars.indexOf("topic") > -1)
	{
		var deleted = !event.room.containsVariable("topic");
		showRoomTopic(event.room, deleted);
	}
}

function onUserVariablesUpdate(event)
{
	// Check if the 'nick' variable was set/updated
	if (event.changedVars.indexOf("nick") > -1)
	{
		// For code simplicity we rebuild the full userlist instead of just editing the specific item
		populateUsersList();
	}
}

function onRoomNameChangeError(event)
{
	trace("Room name change error: " + event.errorMessage + " (" + event.errorCode + ")", true);
}

function onRoomNameChange(event)
{
	// For code simplicity we rebuild the full roomlist instead of just editing the specific item
	populateRoomsList();

	if (event.room == sfs.lastJoinedRoom)
		writeToChatArea("<em>Room name changed from '" + event.oldName + "' to '" + event.room.name + "'</em>");
}

function onRoomPasswordStateChangeError(event)
{
	trace("Room password change error: " + event.errorMessage + " (" + event.errorCode + ")", true);
}

function onRoomPasswordStateChange(event)
{
	// For code simplicity we rebuild the full roomlist instead of just editing the specific item
	// A lock icon appears or disappears
	populateRoomsList();
}

function onRoomCapacityChangeError(event)
{
	trace("Room capacity change error: " + event.errorMessage + " (" + event.errorCode + ")", true);
}

function onRoomCapacityChange(event)
{
	// For code simplicity we rebuild the full roomlist instead of just editing the specific item
	populateRoomsList();
}

function onSpectatorToPlayerError(event)
{
	trace("Spectator-to-player switch error: " + event.errorMessage + " (" + event.errorCode + ")", true);
}

function onSpectatorToPlayer(event)
{
	if (event.user.isItMe)
		enableSwitchButton();

	if (event.room.id == sfs.lastJoinedRoom.id)
	{
		// We rebuild the userlist to update list groups
		populateUsersList();
	}

	// No need to edit the rooms list, as the USER_COUNT_CHANGE event will take care of it
}

function onPlayerToSpectatorError(event)
{
	trace("Player-to-spectator switch error: " + event.errorMessage + " (" + event.errorCode + ")", true);
}

function onPlayerToSpectator(event)
{
	if (event.user.isItMe)
		enableSwitchButton();

	if (event.room.id == sfs.lastJoinedRoom.id)
	{
		// We rebuild the userlist to update list groups
		populateUsersList();
	}

	// No need to edit the rooms list, as the USER_COUNT_CHANGE event will take care of it
}

function onRoomGroupSubscribe(event)
{
	// For example code simplicity we rebuild the full roomlist instead of just adding the new rooms belonging to the subscribed group
	populateRoomsList();
}

function onRoomGroupSubscribeError(event)
{
	trace("Group subscribe error: " + event.errorMessage + " (" + event.errorCode + ")", true);
}

function onRoomGroupUnsubscribe(event)
{
	// For example code simplicity we rebuild the full roomlist instead of just removing the new belonging to the unsubscribed group
	populateRoomsList();
}

function onRoomGroupUnsubscribeError(event)
{
	trace("Group unsubscribe error: " + event.errorMessage + " (" + event.errorCode + ")", true);
}

function onPingPong(event)
{
	var avgLag = Math.round(event.lagValue * 100) / 100;
	$("#lagLb").text("Average lag: " + avgLag + "ms");
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
		$("#chatAreaPn").jqxPanel("clearcontent");
		$("#publicMsgIn").val("");
		showRoomTopic();
	}

	$("#chatAreaPn").jqxPanel({disabled:!doEnable});

	enableTextField("#publicMsgIn", doEnable);
	enableButton("#sendMsgBt", doEnable);

	enableTextField("#roomTopicIn", doEnable);
	enableButton("#setTopicBt", doEnable);
}

function enablePrivateChatAndMod(userId)
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

	// If I'm a moderator, enable kick/ban controls
	if (doEnable && sfs.mySelf != null)
	{
		if (sfs.mySelf.isModerator || sfs.mySelf.isAdmin)
		{
			enableButton("#kickBt", true);
			enableButton("#banBt", true);
		}
	}
	else
	{
		enableButton("#kickBt", false);
		enableButton("#banBt", false);
	}
}

function enableRoomControls(doEnable)
{
	enableButton("#leaveRoomBt", doEnable);
	enableTextField("#newRoomNameIn", doEnable);
	enableButton("#setRoomNameBt", doEnable);
	enableTextField("#newPasswordIn", doEnable);
	enableButton("#setRoomPwdBt", doEnable);
	$("#newRoomSizeIn").jqxNumberInput({disabled:!doEnable});
	enableButton("#setRoomSizeBt", doEnable);

	if (!doEnable)
	{
		$("#newRoomNameIn").val("");
		$("#newPasswordIn").val("");
		$("#newRoomSizeIn").jqxNumberInput({decimal:10});

		enableButton("#switchUserRoleBt", false);
		$("#roleLb").html("&nbsp;");
	}
	else
	{
		enableSwitchButton();
	}
}

function enableSwitchButton()
{
	if (sfs.lastJoinedRoom != null)
	{
		var role;

		// When enabling, check the room type to enable the switch button
		if (sfs.lastJoinedRoom.isGame)
		{
			enableButton("#switchUserRoleBt", true);
			role = sfs.mySelf.isPlayer ? "Player" : "Spectator";
		}
		else
		{
			enableButton("#switchUserRoleBt", false);
			role = "User";
		}

		$("#roleLb").html("Role: <b>" + role + "</b>");
	}
}

function populateRoomsList()
{
	var rooms = sfs.roomManager.getRoomList();
	var index = 0;
	var selectedIndex = -1;
	var source = [];

	for (var r in rooms)
	{
		var room = rooms[r];

		var item = {};
		item.html = "<div><p class='itemTitle'><strong>" + room.name + "</strong>" + (room.isPasswordProtected ? " <img src='images/lock.png'/>" : "") + "</p>" +
					"<p class='itemSub'>" + (room.isGame ? "Game" : "Standard") + " room type</p>" +
					"<p class='itemSub'>" + (room.isGame ? "Players: " + room.userCount + "/" + room.maxUsers + " | Spectators: " + room.spectatorCount + "/" + room.maxSpectators : "Users: " + room.userCount + "/" + room.maxUsers) + "</p></div>";
		item.title = room.name;
		item.group = room.groupId + " group";
		item.roomObj = room;

		source.push(item);

		if (sfs.lastJoinedRoom != null && room.id == sfs.lastJoinedRoom.id)
			selectedIndex = index;

		index++;
	}

	$("#roomList").jqxListBox({source: source, selectedIndex: selectedIndex});
}

function populateUsersList()
{
	var source = [];
	var index = 0;
	var selectedIndex = -1;
	var meIndex = -1;

	if (sfs.lastJoinedRoom != null)
	{
		var users = sfs.lastJoinedRoom.getUserList();

		for (var u in users)
		{
			var user = users[u];

			if (user.isItMe)
				meIndex = index;

			var item = {};
			item.html = "<div><p class='itemTitle'><strong>" + user.name + "</strong>" + (user.isItMe ? " (you)" : "") + "</p>";

			if (user.containsVariable("nick"))
				item.html += "<p class='itemSub'>Nickname: <strong>" + user.getVariable("nick").value + "</strong></p>";

			if (!user.isItMe && privateChats[user.id] != null && privateChats[user.id].toRead > 0)
				item.html += "<p class='itemSub toRead'>" + privateChats[user.id].toRead + " PM to read</p>";

			item.html += "</div>";

			item.title = user.name;
			item.userObj = user;

			if (user.isPlayer)
				item.group = "Players";
			else if (user.isSpectator)
				item.group = "Spectators";

			source.push(item);

			if (currentPrivateChat > -1 && user.id == currentPrivateChat)
				selectedIndex = index;

			index++;
		}
	}

	// Populate list
	$("#userList").jqxListBox({source: source});

	// Disable item corresponding to myself
	if (meIndex > -1)
		$("#userList").jqxListBox("disableAt", meIndex);

	// Set selected index
	$("#userList").jqxListBox("selectedIndex", selectedIndex);

	// Make sure selected index is visible
	if (selectedIndex > -1)
		$("#userList").jqxListBox("ensureVisible", selectedIndex + 1);
}

function searchRoomList(roomId)
{
	var items = $("#roomList").jqxListBox("source");

	for (var i = 0; i < items.length; i++)
	{
		var room = items[i].roomObj;

		if (room.id == roomId)
			return i;
	}

	return -1;
}

function writeToChatArea(text)
{
	$("#chatAreaPn").jqxPanel("append", "<p class='chatAreaElement'>" + text + "</p>");

	// Set chat area scroll position
	$("#chatAreaPn").jqxPanel("scrollTo", 0, $("#chatAreaPn").jqxPanel("getScrollHeight"));
}

function writeToPrivateChatArea(text)
{
	$("#privChatAreaPn").jqxPanel("append", "<p class='chatAreaElement'>" + text + "</p>");

	// Set chat area scroll position
	$("#privChatAreaPn").jqxPanel("scrollTo", 0, $("#privChatAreaPn").jqxPanel("getScrollHeight"));
}

function showRoomTopic(room, deleted)
{
	// Show topic if corresponding room variable is set
	if (room != null)
	{
		if (deleted)
			writeToChatArea("<em>Room topic removed</em>");
		else
		{
			if (room.containsVariable("topic"))
			{
				var roomVar = room.getVariable("topic");

				if (!roomVar.isNull)
				{
					$("#chatTopicLb").html("Topic is '" + roomVar.value + "'");
					$("#roomTopicIn").val(roomVar.value);

					writeToChatArea("<em>Room topic set to '" + roomVar.value + "'</em>");

					return;
				}
			}
		}
	}

	// Hide topic if null room is passed or no room variable is set or variable is null
	$("#chatTopicLb").html("");
	$("#roomTopicIn").val("");
}
