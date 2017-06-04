var sfs = null;
var isBuddyListInited = false;

var BUDDYVAR_AGE = "$age";
var BUDDYVAR_MOOD = "mood";

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

	// Add event listeners
	// NOTE: for simplicity, most buddy-related events cause the whole
	// buddylist in the interface to be recreated from scratch, also if those
	// events are caused by the current user himself. A more refined approach should
	// update the specific list items.
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, this);
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginError, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGIN, onLogin, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGOUT, onLogout, this);
	sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_LIST_INIT, onBuddyListInit, this);
	sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ERROR, onBuddyError, this);
	sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, onBuddyListUpdate, this);
	sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_VARIABLES_UPDATE, onBuddyListUpdate, this);
	sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ADD, onBuddyListUpdate, this);
	sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_REMOVE, onBuddyListUpdate, this);
	sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_BLOCK, onBuddyListUpdate, this);
	sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_MESSAGE, onBuddyMessage, this);

	// Show LOGIN view
	setView("login", true);
}

//------------------------------------
// USER INTERFACE HANDLERS
//------------------------------------

/**
 * Browser window resize handler.
 * Check panels position.
 */
function onBrowserResize()
{
	checkPanelsPosition();
}

/**
 * Panels drop event (moved) handler.
 * Check panels position.
 */
function onWindowMove()
{
	checkPanelsPosition();
}

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
 * Buddies list select handler.
 * Enable/disable block and remove buttons.
 */
function onBuddySelected()
{
	var selectedBuddy = $("#buddyList").jqxListBox("getSelectedItem");
	var enable = (selectedBuddy != null);

	enableButton("#blockBt", enable);
	enableButton("#removeBt", enable);
	enableButton("#clearBt", enable);

	$("#blockBt").prop("value", "Block");
	enableButton("#chatBt", false);

	if (selectedBuddy != null)
	{
		var buddy = selectedBuddy.originalItem.buddyObj;

		if (buddy.isBlocked)
			$("#blockBt").prop("value", "Unblock");
		else
		{
			if (buddy.isOnline)
				enableButton("#chatBt", true);
		}
	}
}

/**
 * Block/unblock button click handler.
 * Blocks/unblocks a buddy in the user's buddy list.
 */
function onBlockBuddyBtClick()
{
	var selectedBuddy = $("#buddyList").jqxListBox("getSelectedItem");
	var isBlocked = selectedBuddy.originalItem.buddyObj.isBlocked;
	sfs.send(new SFS2X.BlockBuddyRequest(selectedBuddy.title, !isBlocked));
}

/**
 * Remove button click handler.
 * Removes a buddy from the user's buddy list.
 */
function onRemoveBuddyBtClick()
{
	var selectedBuddy = $("#buddyList").jqxListBox("getSelectedItem");
	sfs.send(new SFS2X.RemoveBuddyRequest(selectedBuddy.title));

	// Remove chat tab if opened
	var tabIndex = $("#chatTabs ul li").index($("li#tab_" + selectedBuddy.title));
	if (tabIndex > -1)
		$("#chatTabs").jqxTabs("removeAt", tabIndex);
}

/**
 * Chat button click handler.
 * Opens a chat panel to send and receive messages to/from a buddy.
 */
function onChatBtClick()
{
	var buddy = $("#buddyList").jqxListBox("getSelectedItem").originalItem.buddyObj;

	if (!buddy.isBlocked && buddy.isOnline)
		addChatTab(buddy, true);
}

/**
 * Clears buddy list selected item.
 */
function onClearBtClick()
{
	clearBuddyListSelection();
}

/**
 * Add button click handler.
 * Adds another user as a buddy in the user's buddy list.
 */
function onAddBuddyBtClick()
{
	if ($("#buddyNameIn").val() != "")
	{
		sfs.send(new SFS2X.AddBuddyRequest($("#buddyNameIn").val()));
		$("#buddyNameIn").val("");
	}
}

/**
 * Online checkbox change handler.
 * Sends a request to change the current user's online status.
 * It also enables/disables the interface depending on such status.
 */
function onIsOnlineChange(event)
{
	var goOnline = event.args.checked;

	// Request online/offline state change
	if (sfs.buddyManager.getMyOnlineState() != goOnline)
		sfs.send(new SFS2X.GoOnlineRequest(goOnline));

	// Enable/disable fields

	clearBuddyListSelection();
	$("#buddyList").jqxListBox({disabled: !goOnline});

	enableTextField("#buddyNameIn", goOnline);
	enableButton("#addBt", goOnline);

	enableTextField("#nicknameIn", goOnline);
	enableButton("#setNicknameBt", goOnline);

	$("#ageIn").jqxNumberInput({disabled: !goOnline})
	enableButton("#setAgeBt", goOnline);

	enableTextField("#moodIn", goOnline);
	enableButton("#setMoodBt", goOnline);

	$("#stateDd").jqxDropDownList({disabled: !goOnline});

	if (goOnline)
	{
		onBuddyListUpdate();
		$("#chatTabs").jqxTabs("enable");
	}
	else
	{
		$("#chatTabs").jqxTabs("disable");
	}
}

/**
 * Set nickname button click handler.
 * Sends a request to change the current user's nickname.
 */
function onSetNicknameBtClick(event)
{
	var nickBV = new SFS2X.SFSBuddyVariable(SFS2X.ReservedBuddyVariables.BV_NICKNAME, $("#nicknameIn").val());
	sfs.send(new SFS2X.SetBuddyVariablesRequest([nickBV]));
}

/**
 * Set age button click handler.
 * Sends a request to change the current user's age.
 */
function onSetAgeBtClick(event)
{
	var age = Number($("#ageIn").jqxNumberInput("val"));

	// If age is set to 0, remove the buddy variable
	if (age <= 0)
		age = null;

	var ageBV = new SFS2X.SFSBuddyVariable(BUDDYVAR_AGE, age);
	sfs.send(new SFS2X.SetBuddyVariablesRequest([ageBV]));
}

/**
 * Set mood button click handler.
 * Sends a request to change the current user's mood.
 */
function onSetMoodBtClick(event)
{
	var mood = $("#moodIn").val();

	// If mood is set to an empty string, delete the buddy variable
	if (mood == "")
		mood = null;

	var moodBV = new SFS2X.SFSBuddyVariable(BUDDYVAR_MOOD, mood);
	sfs.send(new SFS2X.SetBuddyVariablesRequest([moodBV]));
}

/**
 * Set state dropdown change handler.
 * Sends a request to change the current user's state.
 */
function onStateChange(event)
{
	var state = $("#stateDd").jqxDropDownList("getSelectedItem").value;
	var stateBV = new SFS2X.SFSBuddyVariable(SFS2X.ReservedBuddyVariables.BV_STATE, state);
	sfs.send(new SFS2X.SetBuddyVariablesRequest([stateBV]));
}

/**
 * Chat tab close handler.
 * Hides the chat tab in case the last tab was closed.
 */
function onChatTabClosed(event)
{
	if ($("#chatTabs").find("ul:first").find("li").length <= 1)
		$("#buddyChatWin").jqxWindow("closeWindow");
}

/**
 * Chat tab send message button click handler.
 * Sends a private message to the buddy.
 */
function onSendBtClick(event)
{
	var buddyName = event.currentTarget.name;
	var buddy = sfs.buddyManager.getBuddyByName(buddyName);
	var msgInputId = "#chatMsgIn_" + buddy.name;

	if ($(msgInputId).val() != "")
	{
		// Add a custom parameter containing the recipient name,
		// so that we are able to write messages in the proper chat tab
		var params = new SFS2X.SFSObject();
		params.putUtfString("recipient", buddy.name);

		var isSent = sfs.send(new SFS2X.BuddyMessageRequest($(msgInputId).val(), buddy, params));

		if (isSent)
			$(msgInputId).val("");
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

	$("#usernameLb2").html(event.user.name);

	// Initialize the Buddy List system
	sfs.send(new SFS2X.InitBuddyListRequest());

	// Switch to messenger view
	setView("messenger", true);
}

function onLogout(event)
{
	trace("Logout from zone " + event.zone + " performed!");

	// Switch to LOGIN view
	setView("login", true);
}

function onBuddyListInit(event)
{
	// Populate list of buddies
	onBuddyListUpdate(event);

	// SET CURRENT USER DETAILS AS BUDDY

	// Nick
	$("#nicknameIn").val(sfs.buddyManager.getMyNickName());

	// States
	var states = sfs.buddyManager.getBuddyStates();
	$("#stateDd").jqxDropDownList({source:states});

	var state = (sfs.buddyManager.getMyState() != null ? sfs.buddyManager.getMyState() : "");
	if (states.indexOf(state) > -1)
		$("#stateDd").jqxDropDownList({selectedIndex:states.indexOf(state)});

	// Online
	$('#isOnlineCb').jqxCheckBox({checked:sfs.buddyManager.getMyOnlineState()});

	// Buddy variables
	var age = sfs.buddyManager.getMyVariable(BUDDYVAR_AGE);
	$("#ageIn").jqxNumberInput("val", ((age != null && !age.isNull) ? age.value : 0));

	var mood = sfs.buddyManager.getMyVariable(BUDDYVAR_MOOD);
	$("#moodIn").val((mood != null && !mood.isNull) ? mood.value : "");

	isBuddyListInited = true;
}

function onBuddyError(event)
{
	trace("The following error occurred in the Buddy List system: " + event.errorMessage, true);
}

/**
 * Build buddies list.
 */
function onBuddyListUpdate(event)
{
	var source = [];
	var index = 0;
	var selectedIndex = -1;

	var selectedBuddy = $("#buddyList").jqxListBox("getSelectedItem");
	clearBuddyListSelection();

	var buddies = sfs.buddyManager.getBuddyList();

	for (var b in buddies)
	{
		var buddy = buddies[b];
		var name = "";
		var age = 0;
		var mood = "";
		var icon = "";
		var iconTip = "";

		// Name/nickname
		name = getBuddyDisplayName(buddy);

		// Age
		var ageBV = buddy.getVariable(BUDDYVAR_AGE);
		if (ageBV != null && !ageBV.isNull)
			age = ageBV.value;

		// Mood
		var moodBV = buddy.getVariable(BUDDYVAR_MOOD);
		if (moodBV != null && !moodBV.isNull)
			mood = moodBV.value;

		// Icon
		if (buddy.isBlocked)
		{
			icon = "blocked";
			iconTip = "Blocked";
		}
		else
		{
			if (!buddy.isOnline)
			{
				icon = "offline";
				iconTip = "Offline";
			}
			else
			{
				var state = buddy.state;

				if (state == null)
					state = "Available";

				icon = state.toLowerCase();
				iconTip = state;
			}
		}

		var item = {};
		item.html = "<div><p class='itemTitle'><img src='images/icon_" + icon + ".png' title='" + iconTip + "' width='16' height='16'/><strong>" + name + "</strong>" + (age > 0 ? " (age " + age + ")" : "") + "</p>";

		if (mood != "")
			item.html += "<p class='itemSub'><em>" + mood + "</em></p>";

		item.html += "</div>";

		item.title = buddy.name;
		item.buddyObj = buddy;

		source.push(item);

		if (selectedBuddy != null && selectedBuddy.title == item.title)
			selectedIndex = index;

		// Refresh the buddy chat tab (if open) so that it matches the buddy state
		var tabIndex = $("#chatTabs ul li").index($("li#tab_" + buddy.name));
		if (tabIndex > -1)
		{
			// Set state image
			var image = $("#chatTabs").find("ul:first").find("li#tab_" + buddy.name).find("img.tabIcon");
			image.attr("src", "images/icon_" + icon + ".png");
			image.attr("title", iconTip);

			// Set buddy name
			var name = $("#chatTabs").find("ul:first").find("li#tab_" + buddy.name).find("span.buddyName");
			name.html(getBuddyDisplayName(buddy));

			// Enable/disable message input and send button
			var enable = (!buddy.isBlocked && buddy.isOnline);

			var msgInputId = "#chatMsgIn_" + buddy.name;
			var sendButtonId = "#sendMsgBt_" + buddy.name;

			enableTextField(msgInputId, enable);
			enableButton(sendButtonId, enable);
		}

		index++;
	}

	// Populate list
	$("#buddyList").jqxListBox({source: source});

	// Set selected index
	$("#buddyList").jqxListBox("selectedIndex", selectedIndex);

	// Make sure selected index is visible
	if (selectedIndex > -1)
		$("#buddyList").jqxListBox("ensureVisible", selectedIndex + 1);
}

function onBuddyMessage(event)
{
	var isItMe = event.isItMe;
	var sender = event.buddy;
	var message = event.message;

	var buddy;

	if (isItMe)
	{
		var customParams = event.data; // SFSObject
		var buddyName = customParams.get("recipient");
		buddy = sfs.buddyManager.getBuddyByName(buddyName);
	}
	else
		buddy = sender;

	if (buddy != null)
	{
		// Create tab if not existing
		addChatTab(buddy, false);

		// Display message
		var chatAreaId = "#chatAreaPn_" + buddy.name;
		writeToBuddyChatArea(chatAreaId, "<b>" + (isItMe ? "You" : getBuddyDisplayName(buddy)) + " said:</b><br/>" + message);
	}
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

		// Hide messenger panels
		$("#buddyListWin").jqxWindow("closeWindow");
		$("#buddyChatWin").jqxWindow("closeWindow");
		$("#buddyInfoWin").jqxWindow("closeWindow");

		// Empty buddy list
		clearBuddyListSelection();
		$("#buddyList").jqxListBox({source: []});
	}
	else if (viewId == "messenger")
	{
		// Show messenger panels (except chat panel which auto pops-up when a chat is started)
		$("#buddyListWin").jqxWindow("open");
		$("#buddyInfoWin").jqxWindow("open");

		// Set positions
		var mainCoords = $("#main").offset();
		$("#buddyListWin").jqxWindow("move", mainCoords.left + 20, mainCoords.top + 20);
		$("#buddyInfoWin").jqxWindow("move", mainCoords.left + 340, mainCoords.top + 20);

		// Logout button
		enableButton("#logoutBt", (sfs.isConnected && sfs.mySelf != null));
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

function clearBuddyListSelection()
{
	$("#buddyList").jqxListBox("clearSelection");

	enableButton("#blockBt", false);
	enableButton("#removeBt", false);
	enableButton("#chatBt", false);
	enableButton("#clearBt", false);
}

function addChatTab(buddy, focus)
{
	// Show chats panel
	$("#buddyChatWin").jqxWindow("open");
	$("#buddyChatWin").jqxWindow("bringToFront");

	var index = $("#chatTabs ul li").index($("li#tab_" + buddy.name));

	if (index < 0)
	{
		// CREATE TAB

		var state = buddy.state;
		if (state == null)
			state = "Available";
		var icon = state.toLowerCase();
		var iconTip = state;

		var chatAreaId = "chatAreaPn_" + buddy.name;
		var msgInputId = "chatMsgIn_" + buddy.name;
		var sendButtonId = "sendMsgBt_" + buddy.name;

		// Create tab title and content
		var tabTitle = "<img class='tabIcon' src='images/icon_" + icon + ".png' title='" + iconTip + "'/><span class='buddyName'>" + getBuddyDisplayName(buddy) + "</span>";
		var tabContent = '<div>\
							<div id="' + chatAreaId + '"></div>\
							<div class="listControls">\
								<input type="text" id="' + msgInputId + '" class="textInput chat" placeholder="Enter a message"/>\
								<input type="button" id="' + sendButtonId + '" value="Send" name="' + buddy.name + '"/>\
							</div>\
						</div>';

		// Add tab to panel
		$("#chatTabs").jqxTabs("addLast", tabTitle, tabContent);
		$("#chatTabs").find("ul:first").find("li:last").attr("id", "tab_" + buddy.name);

		// Create JQWidget panel for chat area
		$("#" + chatAreaId).jqxPanel({width:475, height:225, theme:theme, autoUpdate:true});

		// Create JQWidget button and add listener
		$("#" + sendButtonId).jqxButton({width:100, height:24, theme:theme});
		$("#" + sendButtonId).click(onSendBtClick);
	}

	if (focus)
		$("#chatTabs").jqxTabs("select", index);
}

function checkPanelsPosition()
{
	// Get main container position
	var pos = $("#main").offset();

	// Calculate right and bottom limits
	pos.top += 20;
	pos.right = pos.left + $("#main").width();
	pos.bottom = pos.top + $("#main").height();

	checkPanelPos("#buddyListWin", pos);
	checkPanelPos("#buddyChatWin", pos);
	checkPanelPos("#buddyInfoWin", pos);
}

function checkPanelPos(winId, limit)
{
	var window = $(winId);
	var pos = window.offset();
	var width = window.jqxWindow("width");
	var height = window.jqxWindow("height");
	var newPos = {x: pos.left, y: pos.top};

	// Check left and right
	if (newPos.x < limit.left)
		newPos.x = limit.left;
	else if (newPos.x + width > limit.right)
		newPos.x = limit.right - width;

	// Check top and bottom
	if (newPos.y < limit.top)
		newPos.y = limit.top;
	else if (newPos.y + height > limit.bottom)
		newPos.y = limit.bottom - height;

	// Set new postition
	window.jqxWindow("move", newPos.x, newPos.y);
}

function writeToBuddyChatArea(id, text)
{
	$(id).jqxPanel("append", "<p class='chatAreaElement'>" + text + "</p>");

	// Set chat area scroll position
	$(id).jqxPanel("scrollTo", 0, $(id).jqxPanel("getScrollHeight"));
}

function getBuddyDisplayName(buddy)
{
	if (buddy.nickName != null && buddy.nickName != "")
		return buddy.nickName;
	else
		return buddy.name;
}
