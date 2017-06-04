(function(){

	var MINIMAP_WIDTH = 280;
	var MINIMAP_HEIGHT = 148;
	var MINIMAP_SEP = 20;

	var USERVAR_X = "x";
	var USERVAR_Y = "y";
	var USERVAR_DIR = "dir";
	var USERVAR_ITEM_COUNT = "cnt";

	var MMOITEMVAR_OPEN = "open";

	var AVATAR_DIRECTIONS = ["E", "SE", "S", "SW", "W", "NW", "N", "NE"];
	var AVATAR_SPEED = 100; // Expressed in pixels/sec

	var sfs = null;
	var spritesLoadQueue;
	var itemsByRoomName;
	var backgroundsLoadQueue;
	var stage;
	var container;
	var ssAvatar;
	var ssBalloon;
	var ssEnv;
	var ssItems;
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
		config.zone = "SimpleMMOWorld2";
		config.debug = true;

		// Create SmartFox client instance
		sfs = new SFS2X.SmartFox(config);
		
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
		sfs.addEventListener(SFS2X.SFSEvent.MMOITEM_VARIABLES_UPDATE, onMMOItemVariablesUpdate, this);

		// Preload common map assets
		spritesLoadQueue = new createjs.LoadQueue(false);
		spritesLoadQueue.addEventListener("complete", onPreloadComplete);
		spritesLoadQueue.loadManifest([
	    	{id: "ssAvatar", src:"images/spritesheet_avatar.png"},
	    	{id: "ssBalloon", src:"images/spritesheet_balloon.png"},
	    	{id: "ssEnvironment", src:"images/spritesheet_environment.png"},
	    	{id: "ssItems", src:"images/spritesheet_items.png"}
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
		// Join selected MMORoom
		sfs.send(new SFS2X.JoinRoomRequest(e.currentTarget.sfsRoomName));
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

	/**
	 * Sends a request to the Room Extension when one of the interactive items on the map (barrels)
	 * is clicked. This makes the server "open" the item and add it to the player's counter.
	 */
	this.onMMOItemClick = function(e)
	{
		// Stop event propagation, so that the avatar doesn't start moving
		e.stopPropagation();
console.log(typeof getItemIdFromName(e.currentTarget.name))
		// Send the item id to the Extension
		var params = new SFS2X.SFSObject();
		params.putInt("id", getItemIdFromName(e.currentTarget.name));

		sfs.send(new SFS2X.ExtensionRequest("barrelClick", params, sfs.lastJoinedRoom));
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

		// Create an array that will contain all map objects (static and dynamic, including avatars) used for sprites sorting purposes
		mapObjects = [];

		// Switch view
		setView("game");

		// Retrieve Room Variable containing access points coordinates
		// (see Extension comments to understand how data is organized)
		var mapData = evtParams.room.getVariable("mapData").value;
		var accessPoints = mapData.get("accessPoints");

		// Select a random access point among those available
		var index = Math.floor(Math.random() * accessPoints.length / 2) * 2;
		var accessX = accessPoints[index];
		var accessY = accessPoints[index + 1];

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
	 * Similarly the addedItems list.
	 */
	function onProximityListUpdate(evtParams)
	{
		// Loop the removedUsers list in the event params to remove the avatars no more visible
		var removedUsers = evtParams.removedUsers;
		for (var ri = 0; ri < removedUsers.length; ri++)
		{
			var ru = removedUsers[ri];
			var ra = getAvatar(ru.id);

			if (ra != null)
				removeAvatar(ra);
		}

		// Loop the addedUsers list in the event params to display the avatars now visible
		var addedUsers = evtParams.addedUsers;
		for (var ai = 0; ai < addedUsers.length; ai++)
		{
			var au = addedUsers[ai];

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

		// Loop the removedItems list in the event params to remove the dynamic items no more visible
		var removedItems = evtParams.removedItems;
		for (var ri = 0; ri < removedItems.length; ri++)
		{
			var rItem = removedItems[ri];
			var itemName = getItemNameFromId(rItem.id);
			var sprite = container.getChildByName(itemName);

			if (sprite != null)
			{
				// Remove click listeners
				sprite.removeEventListener("click", onMMOItemClick);

				// Remove item from container
				container.removeChild(sprite);

				// Remove item from array used for sorting purposes
				var index = mapObjects.indexOf(sprite);
				mapObjects.splice(index, 1);
			}
		}

		// Loop the addedItems list in the event params to display the dynamic items now visible
		var addedItems = evtParams.addedItems;
		for (var ai = 0; ai < addedItems.length; ai++)
		{
			var aItem = addedItems[ai];

			// Get item entry point
			var vec = aItem.aoiEntryPoint;

			// Get opened/closed status from MMOItem Variables
			var isOpen = aItem.getVariable(MMOITEMVAR_OPEN).value;

			// Create item sprite
			var sprite = new createjs.Sprite(ssItems);
			sprite.x = vec.px;
			sprite.y = vec.py;
			sprite.name = getItemNameFromId(aItem.id);
			sprite.gotoAndStop(isOpen ? 1 : 0);

			// Add click listener if item is still "closed"
	        if (!isOpen)
				sprite.addEventListener("click", onMMOItemClick);

			container.addChild(sprite);
			mapObjects.push(sprite);
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
		var avatar = getAvatar(user.id);

		// Check if avatar exists
		if (avatar != null)
		{
			// Check if the user changed his position
			if (changedVars.indexOf(USERVAR_X) != -1 || changedVars.indexOf(USERVAR_Y) != -1)
			{
				// Move the user avatar
				moveAvatar(user);
			}

			// Check if clicked items count for the user was updated
			if (changedVars.indexOf(USERVAR_ITEM_COUNT) != -1)
			{
				// Update the user's collected barrels counter
				avatar.setBarrelsCounter(user.getVariable(USERVAR_ITEM_COUNT).value);
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

	/**
	 * Makes an item show the "opened" status after it was clicked.
	 */
	function onMMOItemVariablesUpdate(evtParams)
	{
		var changedVars = evtParams.changedVars;
		var item = evtParams.mmoItem;

		if (changedVars.indexOf(MMOITEMVAR_OPEN) != -1)
		{
			var itemName = getItemNameFromId(item.id);
			var sprite = container.getChildByName(itemName);

			if (sprite != null)
			{
				sprite.gotoAndStop(1);
				sprite.removeEventListener("click", onMMOItemClick);
			}
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
	 * Common map assets preloading completion handler.
	 */
	function onPreloadComplete()
	{
		trace("Application ready");


		// Create avatar spritesheet
		ssAvatar = new createjs.SpriteSheet({
												images: [spritesLoadQueue.getResult("ssAvatar")],
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
												images: [spritesLoadQueue.getResult("ssBalloon")],
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

		// Create static items spritesheet
		ssEnv = new createjs.SpriteSheet({
												images: [spritesLoadQueue.getResult("ssEnvironment")],
												frames: [
													[2, 2, 36, 39],
												    [40, 2, 46, 67],
												    [88, 2, 44, 80],
												    [134, 2, 137, 143],
												    [273, 2, 43, 130],
												    [318, 2, 142, 139]
												],
												animations: {
													bush1: [0],
													bush4: [1],
													door:  [2],
													tree2: [3],
													tree3: [4],
													tree4: [5]
												}
											});

		// Create dynamic items spritesheet
		ssItems = new createjs.SpriteSheet({
												images: [spritesLoadQueue.getResult("ssItems")],
												frames: {width: 52, height: 58, regX: 18, regY: 44},
												animations: {
													barrel: [0, 1, "barrel"]
												}
											});

		// Show LOGIN view
		setView("login");
	}

	/**
	 * Map background loading completion handler.
	 * This is fired when all the background images of the available Rooms are loaded
	 */
	function onMapBackgroundLoadComplete(event)
	{
		trace("Minimaps loaded");

		// Display minimaps for Room selection
		showMinimaps(event.target);
	}

	/**
	 * Creates a minimap on stage for each joinable Room.
	 * To make it look like the actual map, static items (trees) are placed on the minimap too.
	 */
	function showMinimaps(bgLoader)
	{
		var roomsCount = sfs.getRoomList().length;

		// Set canvas size based on the number of Rooms
		stage.canvas.width = (MINIMAP_WIDTH * roomsCount) + (MINIMAP_SEP * (roomsCount - 1));
		stage.canvas.height = MINIMAP_HEIGHT;

		// Loop through the Room list
		for (var r = 0; r < sfs.getRoomList().length; r++)
		{
			var room = sfs.getRoomList()[r];
			var mapItems = itemsByRoomName[room.name];

			// Create minimap container
			var minimapContainer = new createjs.Container();

			// Add background bitmap
			var bg = new createjs.Bitmap(bgLoader.getResult(room.name));
			minimapContainer.addChild(bg);

			// Add static map items cloning the sprites created previously (see getView method)
			for (var itemId in mapItems)
			{
				for (var i = 0; i < mapItems[itemId].coordinates.length; i++)
				{
					var coords = mapItems[itemId].coordinates[i];
					var sprite = mapItems[itemId].sprite.clone();

					sprite.x = coords[0];
					sprite.y = coords[1];

					minimapContainer.addChild(sprite);
				}
			}

			// Scale minimap
			minimapContainer.setTransform((MINIMAP_WIDTH + MINIMAP_SEP) * r, 0, 0.2, 0.2);

			// Add reference to Room name
			minimapContainer.sfsRoomName = room.name;

			// Add minimap click listener
			minimapContainer.addEventListener("click", onMinimapClick);
			minimapContainer.cursor = "pointer";

			// Add minimap to stage
			stage.addChild(minimapContainer);
			stage.enableMouseOver();
		}

		stage.update();
	}

	/**
	 * Configure and display the passed view.
	 */
	function setView(viewId, error)
	{
		// Remove all children and event listeners from stage, if any
		if (stage != null)
		{
			stage.removeAllChildren();
			createjs.Ticker.removeEventListener("tick", stage);
		}

		// Configure view if needed -----------------------------

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

		// JOIN view
		else if (viewId == "join")
		{
			// Setup stage
			stage = new createjs.Stage("room-selection");

			// For each MMORoom, retrieve the map setup data from a dedicated global Room Variable
			// and for each static map item listed in the configuration create:
			// - a sprite to be cloned and placed on the map later
			// - a list of tuples containing the coordinates where to place the sprite clones later
			// For each Room also save a list of access point coordinates

			itemsByRoomName = [];

			var bgLoaderManifest = [];

			for (var r = 0; r < sfs.getRoomList().length; r++)
			{
				var room = sfs.getRoomList()[r];
				var setupObj = room.getVariable("mapItems").value; // SFSObject

				// STATIC MAP ITEMS

				var items = [];

				for (var k = 0; k < setupObj.getKeysArray().length; k++)
				{
					var item = {};

					var itemId = setupObj.getKeysArray()[k];
					var itemData = setupObj.get(itemId); // SFSObject

					// Create sprite
					var sprite = new createjs.Sprite(ssEnv);
					sprite.gotoAndStop(itemId);
					sprite.regX = itemData.get("rx");
					sprite.regY = itemData.get("ry");

					item.sprite = sprite;

					// List sprite instances coordinates
					var coordinates = [];
					var coordsArray = itemData.get("coords"); // Int array

					for (var c = 0; c < coordsArray.length; c += 2)
					{
						var x = coordsArray[c];
						var y = coordsArray[c+1];

						coordinates.push([x,y]);
					}

					item.coordinates = coordinates;

					items[itemId] = item;
				}

				// MAP BACKGROUND

				var mapName = room.name.toLowerCase().replace(/ /g, "-");

				bgLoaderManifest.push(
					{id: room.name, src:"images/" + mapName + "-background.jpg"}
				)

				// Save ref. to items container by Room name
				itemsByRoomName[room.name] = items;
			}

			// Load maps backgrounds
			backgroundsLoadQueue = new createjs.LoadQueue(false);
			backgroundsLoadQueue.addEventListener("complete", onMapBackgroundLoadComplete);
			backgroundsLoadQueue.loadManifest(bgLoaderManifest);
		}

		// GAME view
		else if (viewId == "game")
		{
			// Setup stage
			stage = new createjs.Stage("map");

			// Retrieve Room Variable containing hitmap bytes to be converted to a bitmap image
			var mapData = sfs.lastJoinedRoom.getVariable("mapData").value;
			var hitmap = decodeArrayBuffer(mapData.get("hitmap"));

			// Display background
			// The hit area is set to define the non-clickable areas
			var bg = new createjs.Bitmap(backgroundsLoadQueue.getResult(sfs.lastJoinedRoom.name));
			bg.name = "background";
			bg.hitArea = new createjs.Bitmap(hitmap);
			bg.addEventListener("click", onMapClick);
			stage.addChild(bg);

			// Create container for avatars and other map objects
			container = new createjs.Container();
			stage.addChild(container);

			// Add static map items (trees and bushes) to the main container
			var mapItems = itemsByRoomName[sfs.lastJoinedRoom.name];
			for (var itemId in mapItems)
			{
				for (var i = 0; i < mapItems[itemId].coordinates.length; i++)
				{
					var coords = mapItems[itemId].coordinates[i];
					var sprite = mapItems[itemId].sprite.clone();

					sprite.x = coords[0];
					sprite.y = coords[1];

					container.addChild(sprite);
					mapObjects.push(sprite);
				}
			}

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

		// Show collected barrels counter
		if (user.getVariable(USERVAR_ITEM_COUNT) != null)
			avatar.setBarrelsCounter(user.getVariable(USERVAR_ITEM_COUNT).value);

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
		// Round the position
		px = Math.round(px);
		py = Math.round(py);
		
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
	 * Rearranges the avatars, trees and barrels depths in their container (z-sorting).
	 *
	 * NOTE: as this would be out of the scope for this example, we didn't put too much effort
	 * in the sorting method used to rearrange the avatar depths. In fact this method is not
	 * particularly efficient, because at each animation step all avatars, trees and barrels are rearranged.
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
		return !stage.getChildByName("background").hitArea.hitTest(px, py);
	}

	/**
	 * Converts an image received as bytes to an actual Image.
	 */
	function decodeArrayBuffer(buffer) {
	    var mime;
	    var a = new Uint8Array(buffer);
	    var nb = a.length;
	    if (nb < 4)
	        return null;
	    var b0 = a[0];
	    var b1 = a[1];
	    var b2 = a[2];
	    var b3 = a[3];
	    if (b0 == 0x89 && b1 == 0x50 && b2 == 0x4E && b3 == 0x47)
	        mime = 'image/png';
	    else if (b0 == 0xff && b1 == 0xd8)
	        mime = 'image/jpeg';
	    else if (b0 == 0x47 && b1 == 0x49 && b2 == 0x46)
	        mime = 'image/gif';
	    else
	        return null;
	    var binary = "";
	    for (var i = 0; i < nb; i++)
	        binary += String.fromCharCode(a[i]);
	    var base64 = window.btoa(binary);
	    var image = new Image();
	    image.src = 'data:' + mime + ';base64,' + base64;
	    return image;
	}

	// We have to prefix the item id because we need to set the names of avatar and item sprites
	// (so that they can be retrieved with container.getChildByName()), but their ids could clash
	function getItemNameFromId(itemId)
	{
		return "item-" + itemId;
	}

	function getItemIdFromName(itemName)
	{
		return Number(itemName.substr(5));
	}
})();
