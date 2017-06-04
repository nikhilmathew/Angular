(function(){
	var MMO_ROOM_NAME = "The Map";

	var USERVAR_X = "x";
	var USERVAR_Y = "y";
	var USERVAR_DIR = "dir";

	var AVATAR_DIRECTIONS = ["E", "SE", "S", "SW", "W", "NW", "N", "NE"];
	var AVATAR_SPEED = 100; // Expressed in pixels/sec

	var sfs = null;
	var loadQueue;
	var stage;
	var container;
	var ssAvatar;
	var ssBalloon;
	var ssEnv;
	var minimapClickXRatio = 0.5;
	var minimapClickYRatio = 0.5;
	var mapObjects;

	/**
	 * Initializes SmartFox client and preloads assets used to render the game map and avatars.
	 */
	this.init = function()
	{
		trace("Application started, now loading assets...");

		// Show PRELOAD view
		setView("preload");

		// Create SFS2X client configuration object
		var config = {};
		config.host = "127.0.0.1";
		config.port = 8080;
		config.zone = "SimpleMMOWorld";
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
		sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, onRoomJoinError, this);
		sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, onRoomJoin, this);
		sfs.addEventListener(SFS2X.SFSEvent.PROXIMITY_LIST_UPDATE, onProximityListUpdate, this);
		sfs.addEventListener(SFS2X.SFSEvent.USER_VARIABLES_UPDATE, onUserVariablesUpdate, this);
		sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, onPublicMessage, this);

		// Preload assets
		loadQueue = new createjs.LoadQueue(false);
		loadQueue.addEventListener("complete", onPreloadComplete);
		loadQueue.loadManifest([
	    	{id: "background", src:"images/background.jpg"},
	    	{id: "hitArea", src:"images/hitarea.png"},
	    	{id: "ssAvatar", src:"images/spritesheet_avatar.png"},
	    	{id: "ssBalloon", src:"images/spritesheet_balloon.png"},
	    	{id: "ssEnvironment", src:"images/spritesheet_environment.png"}
	 	]);
	}

	//------------------------------------
	// USER INTERFACE HANDLERS
	//------------------------------------

	/**
	 * Login button click handler.
	 * Performs the connection to SmartFoxServer 2X.
	 */
	this.onLoginBtClick = function()
	{
		// Hide any previous error
		$("#errorLb").hide();

		// Connect to SFS
		// As no parameters are passed, the config object is used
		sfs.connect();

		// Disable interface
		$("#usernameIn").attr("disabled", true);
		$("#loginBt").jqxButton({disabled:true});
	}

	/**
	 * Mini map click handler.
	 * Performs the MMORoom join.
	 */
	this.onMinimapClick = function(e)
	{
		// Save minimap click position with respect to minimap size, to be converted later to map access coordinates
		var offset = $(this).offset();
		minimapClickXRatio = (e.clientX - offset.left) / $("#minimap").width();
		minimapClickYRatio = (e.clientY - offset.top) / $("#minimap").height();

		// Join MMORoom
		sfs.send(new SFS2X.JoinRoomRequest(MMO_ROOM_NAME));
	}

	/**
	 * Main map clic handler.
	 * Destination coordinates are saved as SmartFoxServer User Variables.
	 * Also, the direction faced by the avatar is calculated and saved as User Variable.
	 *
	 * NOTE: the avatar of the current user starts moving once the USER_VARIABLES_UPDATE event
	 * is received, just like on the other clients. This can cause a delay in case of network lag.
	 */
	this.onMapClick = function(e)
	{
		// Retrieve destination coordinates
		var destX = e.stageX;
		var destY = e.stageY;

		// Get current coordinates
		var myAvatar = getAvatar(sfs.mySelf.id);
		var currX = myAvatar.x;
		var currY = myAvatar.y;

		// Evaluate avatar movement direction
		var dx = destX - currX;
		var dy = destY - currY;

		var angle = Math.atan(dy / dx);

		var deg = Math.round(angle * 180 / Math.PI);
		if(dx < 0)
			deg += 180;
		else if(dx >= 0 && dy < 0)
			deg += 360;

		var dirIndex = Math.round(deg / 45);
		if (dirIndex >= AVATAR_DIRECTIONS.length)
			dirIndex -= AVATAR_DIRECTIONS.length;

		var dir = AVATAR_DIRECTIONS[dirIndex];

		// Save destination coordinates and direction in User Variables
		setAvatarVariables(destX, destY, dir);
	}

	/**
	 * Sends a public message to be displayed avatar's chat bubble of the current user.
	 */
	this.onSendPublicMessageBtClick = function(e)
	{
		if ($("#publicMsgIn").val() != "")
		{
			sfs.send( new SFS2X.PublicMessageRequest($("#publicMsgIn").val()) );
			$("#publicMsgIn").val("");
		}
	}

	//------------------------------------
	// SFS EVENT HANDLERS
	//------------------------------------

	function onConnection(evtParams)
	{
		if (evtParams.success)
		{
			trace("Connected to SmartFoxServer 2X!");

			// Perform login
			var uName = $("#usernameIn").val();
			sfs.send(new SFS2X.LoginRequest(uName));
		}
		else
		{
			// Show error
			var error = "Connection failed: " + (evtParams.errorMessage ? evtParams.errorMessage + " (code " + evtParams.errorCode + ")" : "is the server running at all?");
			setView("login", error);
		}
	}

	function onConnectionLost(evtParams)
	{
		// Remove all children from game stage
		if (stage != null)
		{
			stage.removeAllChildren();
			createjs.Ticker.removeEventListener("tick", stage);
		}

		// Show disconnection reason
		var reason = "You have been disconnected; reason is: " + evtParams.reason;
		setView("login", reason);
	}

	function onLoginError(evtParams)
	{
		// Show error
		var error = "Login error: " + evtParams.errorMessage + " (code " + evtParams.errorCode + ")";
		setView("login", error);
	}

	function onLogin(evtParams)
	{
		// Set user name
		// NOTE: this always a good practice, in case a custom login procedure on the server side modified the username
		$("#usernameIn").val(evtParams.user.name);

		// Show MMORoom join screen
		setView("join");
	}

	function onRoomJoinError(evtParams)
	{
		trace("Room join error: " + evtParams.errorMessage + " (code: " + evtParams.errorCode + ")", true);
	}

	function onRoomJoin(evtParams)
	{
		trace("Room joined: " + evtParams.room);

		// Create an array that will contain all map objects, including avatars, used for sprites sorting purposes
		mapObjects = [];

		// Switch view
		setView("game");

		// Calculate avatar access coordinates
		var accessX = Math.round(minimapClickXRatio * $("#map").width());
		var accessY = Math.round(minimapClickYRatio * $("#map").height());

		// Avoid making the avatar appear in the middle of the river (non-walkable area) by excluding the map's bottom left corner
		if (accessY > 430)
			accessX = Math.max(accessX, 830);

		// Set starting direction to a default value
		var dir = AVATAR_DIRECTIONS[2];

		// Create current user's avatar
		createAvatar(sfs.mySelf, accessX, accessY, dir);

		// Arrange map objects sorting
		arrangeMapObjects();

		// The position is saved in the User Variables, so that changing it later will trigger the avatar animation
		setAvatarVariables(accessX, accessY, dir);

		// Declare current user's position in the MMORoom, to get the proximity list of users
		updateServerPosition();
	}

	/**
	 * Called whenever a proximity list change occurs.
	 * This can be caused by the current user's avatar movement or other users entering/leaving
	 * the current user Area o Interest (AoI).
	 *
	 * The addedUsers list contains the users that entered the current user's AoI since the last update.
	 * Each user has a property declaring its entry position.
	 */
	function onProximityListUpdate(evtParams)
	{
		// Loop the removedUsers list in the event params to remove the avatars no more visible
		var removed = evtParams.removedUsers;
		for (var ri = 0; ri < removed.length; ri++)
		{
			var ru = removed[ri];
			var ra = getAvatar(ru.id);

			if (ra != null)
				removeAvatar(ra);
		}

		// Loop the addedUsers list in the event params to display the avatars now visible
		var added = evtParams.addedUsers;
		for (var ai = 0; ai < added.length; ai++)
		{
			var au = added[ai];

			// Get user entry point
			var vec = au.aoiEntryPoint;

			// Get avatar direction from User Variables
			var dir = au.getVariable(USERVAR_DIR).value;

			// Create avatar
			createAvatar(au, vec.px, vec.py, dir);

			// Make the avatar move towards the coordinates set in the User Variables if they are different from the entry point
			if (au.containsVariable(USERVAR_X) && au.containsVariable(USERVAR_Y))
			{
				var px = au.getVariable(USERVAR_X).value;
				var py = au.getVariable(USERVAR_Y).value;

				if (px != vec.px || py != vec.py)
					moveAvatar(au);
			}
		}

		// Arrange map objects sorting
		arrangeMapObjects();
	}

	/**
	 * Makes an avatar move as soon as its position (saved in User Variables) changes.
	 */
	function onUserVariablesUpdate(evtParams)
	{
		var changedVars = evtParams.changedVars;
		var user = evtParams.user;

		// Check if the user changed his position
		if (changedVars.indexOf(USERVAR_X) != -1 || changedVars.indexOf(USERVAR_Y) != -1)
		{
			// Check if avatar exists
			if (getAvatar(user.id) != null)
			{
				// Move the user avatar
				moveAvatar(user);
			}
		}
	}

	/**
	 * Shows the chat message in a bubble on the avatar of the sender.
	 */
	function onPublicMessage(evtParams)
	{
		var sender = evtParams.sender;
		var msg = evtParams.message;

		var avatar = getAvatar(sender.id);

		// Check if avatar exists
		if (avatar != null)
		{
			// Show the chat message
			avatar.showChatMessage(msg);
		}
	}

	//------------------------------------
	// PRIVATE METHODS
	//------------------------------------

	function trace(txt, showAlert)
	{
		console.log(txt);

		if (showAlert)
			alert(txt);
	}

	/**
	 * Assets preloading completion handler.
	 */
	function onPreloadComplete()
	{
		trace("Application ready");


		// Create avatar spritesheet
		ssAvatar = new createjs.SpriteSheet({
												images: [loadQueue.getResult("ssAvatar")],
												frames: {width: 30, height: 68, regX: 15, regY: 66},
												animations: {
													avatarE: [0, 19, "avatarE"],
													avatarN: [20, 38, "avatarN"],
													avatarNE: [39, 58, "avatarNE"],
													avatarNW: [59, 78, "avatarNW"],
													avatarS: [79, 97, "avatarS"],
													avatarSE: [98, 117, "avatarSE"],
													avatarSW: [118, 137, "avatarSW"],
													avatarW: [138, 157, "avatarW"]
												}
											});

		// Create balloon spritesheet
		ssBalloon = new createjs.SpriteSheet({
												images: [loadQueue.getResult("ssBalloon")],
												frames: [
													[0, 0, 100, 25],
												    [0, 25, 100, 10],
												    [0, 35, 100, 10]
												],
												animations: {
												        balloon_bottom:[0],
												        balloon_middle:[1],
												        balloon_top:[2]
												}
											});

		// Create trees spritesheet
		ssEnv = new createjs.SpriteSheet({
												images: [loadQueue.getResult("ssEnvironment")],
												frames: [
													[2, 2, 36, 39],
													[40, 2, 46, 67],
													[88, 2, 137, 143],
													[227, 2, 43, 130],
													[272, 2, 142, 139]
												],
												animations: {
													bush1: [0],
													bush4: [1],
													tree2: [2],
													tree3: [3],
													tree4: [4]
												}
											});

		// Show LOGIN view
		setView("login");
	}

	function setView(viewId, error)
	{
		// Configure view where needed -----------------------------

		// LOGIN view
		if (viewId == "login")
		{
			// Login textinput and button
			$("#usernameIn").removeAttr("disabled");
			$("#loginBt").jqxButton({disabled:false});

			if (error != null)
			{
				trace(error);
				$("#errorLb").html("<b>ATTENTION</b><br/>" + error);
				$("#errorLb").toggle();
			}
			else
				$("#errorLb").hide();
		}

		// GAME view
		else if (viewId == "game")
		{
			// Setup stage
			stage = new createjs.Stage("map");

			// Display background
			var bg = new createjs.Bitmap(loadQueue.getResult("background"));
			stage.addChild(bg);

			// Create container for avatars and other map objects
			// An hit area is assigned to set the non-clickable areas
			container = new createjs.Container();
			var hit = new createjs.Bitmap(loadQueue.getResult("hitArea"));
			container.hitArea = hit;
			container.addEventListener("click", onMapClick);
			stage.addChild(container);

			// Add trees and bushes to the main container
			// These are added manually for simplicity; a map descriptor with a routine adding all the sprites would be a better choice

			// Tree2
			var sprite = new createjs.Sprite(ssEnv);
			sprite.gotoAndStop("tree2");
			sprite.regX = 72;
			sprite.regY = 127;
			addSprite(sprite, 115, 687, false);
			addSprite(sprite, 1224, 520, true);

			// Tree3
			sprite = new createjs.Sprite(ssEnv);
			sprite.gotoAndStop("tree3");
			sprite.regX = 21;
			sprite.regY = 121;
			addSprite(sprite, 148, 147, false);
			addSprite(sprite, 258, 124, true);
			addSprite(sprite, 215, 242, true);
			addSprite(sprite, 115, 353, true);
			addSprite(sprite, 349, 304, true);

			// Tree4
			sprite = new createjs.Sprite(ssEnv);
			sprite.gotoAndStop("tree4");
			sprite.regX = 67;
			sprite.regY = 125;
			addSprite(sprite, 782, 470, false);
			addSprite(sprite, 1009, 685, true);

			// Bush1
			sprite = new createjs.Sprite(ssEnv);
			sprite.gotoAndStop("bush1");
			sprite.regX = 18;
			sprite.regY = 25;
			addSprite(sprite, 551, 182, false);
			addSprite(sprite, 912, 141, true);
			addSprite(sprite, 980, 310, true);
			addSprite(sprite, 451, 717, true);

			// Bush4
			sprite = new createjs.Sprite(ssEnv);
			sprite.gotoAndStop("bush4");
			sprite.regX = 20;
			sprite.regY = 58;
			addSprite(sprite, 1196, 79, false);
			addSprite(sprite, 1345, 137, true);
			addSprite(sprite, 1323, 282, true);

			// Add ticker to update the stage
			createjs.Ticker.addEventListener("tick", stage);
		}

		// Switch view ---------------------------------------------

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

	function addSprite(sprite, x, y, doClone)
	{
		if (doClone)
			sprite = sprite.clone();

		sprite.x = x;
		sprite.y = y;
		container.addChild(sprite);
		mapObjects.push(sprite);
	}

	/**
	 * Returns a reference to an avatar from the user id of its owner.
	 */
	function getAvatar(userId)
	{
		return container.getChildByName(userId);
	}

	/**
	 * Creates the avatar of a user.
	 */
	function createAvatar(user, x, y, dir)
	{
		// Instantiate avatar
		var avatar = new Avatar(user.id, user.name, ssAvatar, ssBalloon);

		// Set avatar position and initialize "next" coordinates too (see moveAvatar method)
		avatar.x = avatar.nextX = x;
		avatar.y = avatar.nextY = y;

		// Set initial avatar graphics
		avatar.setGraphics("stand", dir);

		// Show Area of Interest boundaries
		if (user.isItMe)
		{
			var room = sfs.lastJoinedRoom;
			avatar.setAOIFrame(room.defaultAOI.px * 2, room.defaultAOI.py * 2);
		}

		// Add avatar to container
		container.addChild(avatar);

		// Add avatar to array used for sorting
		mapObjects.push(avatar);
	}

	/**
	 * Destroys an avatar.
	 */
	function removeAvatar(avatar)
	{
		// Remove tween
		TweenLite.killTweensOf(avatar);

		// Remove avatar from container
		container.removeChild(avatar);

		// Destroy avatar
		avatar.destroy();

		// Remove avatar from array used for sorting purposes
		var index = mapObjects.indexOf(avatar);
		mapObjects.splice(index, 1);
	}

	/**
	 * Saves the avatar position and direction in the User Variables.
	 */
	function setAvatarVariables(px, py, dir)
	{
		var userVars = [];
		userVars.push(new SFS2X.SFSUserVariable(USERVAR_X, px));
		userVars.push(new SFS2X.SFSUserVariable(USERVAR_Y, py));

		if (dir != null)
			userVars.push(new SFS2X.SFSUserVariable(USERVAR_DIR, dir));

		sfs.send( new SFS2X.SetUserVariablesRequest(userVars) );
	}

	/**
	 * Updates the current user's position in the MMORoom, so that all users affected
	 * by the avatar movement receive a PROXIMITY_LIST_UPDATE event.
	 */
	function updateServerPosition()
	{
		var myAvatar = getAvatar(sfs.mySelf.id);

		// Save the coordinates corresponding to the saved position, to be checked during the next tween update
		myAvatar.lastUpdateX = Math.round(myAvatar.x);
		myAvatar.lastUpdateY = Math.round(myAvatar.y);

		var pos = new SFS2X.Vec3D(myAvatar.lastUpdateX, myAvatar.lastUpdateY, 0);
		sfs.send( new SFS2X.SetUserPositionRequest(pos) );
	}

	/**
	 * Rearranges the avatars and trees depths in their container (z-sorting).
	 *
	 * NOTE: as this would be out of the scope of this example, we didn't put too much effort
	 * in the sorting method used to rearrange the avatar depths. In fact this method is not
	 * particularly efficient, because at each animation step all avatars and trees are rearranged.
	 */
	function arrangeMapObjects()
	{
		// Sort avatars based on their y coordinate
		mapObjects.sort(compare);

		var i = mapObjects.length;

		while (i--)
		{
			if (container.getChildIndex(mapObjects[i]) != i)
				container.setChildIndex(mapObjects[i], i);
		}
	}

	function compare(a,b)
	{
		if (a.y < b.y)
			return -1;
		if (a.y > b.y)
			return 1;

		return 0;
	}

	/**
	 * Creates the tween to animate the avatar from the current postion to the
	 * destination coordinates saved in the User Variables.
	 *
	 * During the movement we have to update the current user's position in the MMORoom
	 * so that his proximity list is updated accordingly.
	 */
	function moveAvatar(user)
	{
		var avatar = getAvatar(user.id);

		// Stop previous animation if any
		TweenLite.killTweensOf(avatar);

		// Retrieve User Variables
		var px = user.getVariable(USERVAR_X).value;
		var py = user.getVariable(USERVAR_Y).value;
		var dir = user.getVariable(USERVAR_DIR).value;

		// Make avatar play walking animation
		avatar.setGraphics("walk", dir);

		// Calculate animation duration
		// (we want the avatar to move at a constant speed)
		var dx = px - avatar.x;
		var dy = py - avatar.y;
		var dist = Math.round(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));

		var duration = dist / AVATAR_SPEED;

		// Move the avatar to the new position
		// We use the "next" custom properties so we can validate the coordinates during the movement before actually setting it
		// In this way we can make the avatar stop if it crosses a non-walkable area

		var twParams = {};
		twParams.nextX = px;
		twParams.nextY = py;
		twParams.ease = Linear.easeNone;
		twParams.onUpdate = onAvatarTweenUpdate;
		twParams.onUpdateParams = [avatar];
		twParams.onComplete = onAvatarTweenComplete;
		twParams.onCompleteParams = [avatar,dir];

		TweenLite.to(avatar, duration, twParams);
	}

	/**
	 * Updates the current user's position in the MMORoom.
	 *
	 * For the current user's avatar, if it steps on a non-walkable area, the movement is stopped.
	 *
	 * This method also updates the z-sorting of all avatars at each animation step and redraws the curtain.
	 */
	function onAvatarTweenUpdate(avatar)
	{
		if (avatar.name == sfs.mySelf.id)
		{
			// Check if the next position of the current user's avatar is on a non-walkable area and in case stop it
			if (isNonWalkable(avatar.nextX, avatar.nextY))
			{
				// Stop current animation
				TweenLite.killTweensOf(avatar);

				// Set position to the current coordinates, so all clients will make the avatar reach the same position
				// The previous direction is used
				setAvatarVariables(avatar.x, avatar.y);
			}
			else
			{
				// Update avatar position to the "next" coordinates set by the tween
				avatar.x = avatar.nextX;
				avatar.y = avatar.nextY;

				// Save the user posion in the MMORoom
				var lastUpdateX = avatar.lastUpdateX;
				var lastUpdateY = avatar.lastUpdateY;

				var diffX = Math.abs(avatar.x - lastUpdateX);
				var diffY = Math.abs(avatar.y - lastUpdateY);

				updateServerPosition();
			}
		}
		else
		{
			// Always update coordinates for avatar of other users
			avatar.x = avatar.nextX;
			avatar.y = avatar.nextY;
		}

		// Arrange map objects sorting
		arrangeMapObjects();
	}

	/**
	 * Makes a walking avatar show the standing animation on movement completion.
	 * Also updates the current user's position in the MMORoom.
	 */
	function onAvatarTweenComplete(avatar, dir)
	{
		avatar.setGraphics("stand", dir);

		if (avatar.name == sfs.mySelf.id)
			updateServerPosition();
	}

	/**
	 * Checks if the passed coordinates hit the non-walkable area of the map.
	 * The hit area of the map objects' container is used.
	 */
	function isNonWalkable(px, py)
	{
		return !container.hitArea.hitTest(px, py);
	}
})();
