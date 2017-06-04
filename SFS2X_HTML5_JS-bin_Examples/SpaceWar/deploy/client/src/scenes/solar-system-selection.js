var SolarSystemSelectionScene = cc.Scene.extend(
{
	solarSysLayer: null,

	ctor: function(roomList)
	{
		cc.log("Running Solar System Selection scene...");

		this._super();

		// Add background layer
		var bgLayer = new BackgroundLayer();
		this.addChild(bgLayer);

		// Add title layer
		var titleLayer = new TitleLayer();
		this.addChild(titleLayer);
		
		// Add solar systems layer
		this.solarSysLayer = new SolarSysLayer(roomList);
		this.addChild(this.solarSysLayer);

		// Register UI listeners
		for (var i = 0; i < this.solarSysLayer.menuItems.length; i++)
			this.solarSysLayer.menuItems[i].addTouchEventListener(this.onSelectButtonClick, this);
	},

	onExit: function()
	{
		cc.log("Solar System Selection scene removed");
	},

	/**
	 * On solar system item click, dispatch an event to main controller.
	 */
	onSelectButtonClick: function(sender, type)
	{
		if (type === ccui.Widget.TOUCH_ENDED || type === ccui.Widget.TOUCH_CANCELLED)
		{
			// Disable UI
			this.enableUserInterface(false);

			// Add SFSEvent listeners
			sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
			sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onRoomJoinError, this);

			// Get selected solar system name
			var roomName = sender.roomName;
			
			// Join the corresponding MMORoom
			sfs.send( new SFS2X.JoinRoomRequest(roomName) );
		}
	},

	/**
	 * On Room join, fires an event so that the main controller (see /main.js) can move to the next scene.
	 */
	onRoomJoin: function(evtParams)
	{
		// Dispatch event
		cc.eventManager.dispatchCustomEvent(EVENT_SYSTEM_ENTERED);
	},

	/**
	 * On Room join error, shows an error message.
	 */
	onRoomJoinError: function(evtParams)
	{
		// Enable UI
		this.enableUserInterface(true);

		// Display error
		this.solarSysLayer.errorText.setString(evtParams.errorMessage);
	},

	/**
	 * Enables/disables UI controls.
	 */
	enableUserInterface: function(enabled)
	{
		for (var i = 0; i < this.solarSysLayer.menuItems.length; i++)
			this.solarSysLayer.menuItems[i].enabled = enabled;
	}
});

var SolarSysLayer = BaseMenuLayer.extend(
{
	errorText: null,

	ctor: function(roomList)
	{
		this._super();

		// Get view size
		var size = cc.director.getWinSize();

		// Display label
		var selectLabel = new cc.LabelTTF("Select a solar system", "Akashi", 28);
		selectLabel.x = size.width / 2;
		selectLabel.y = size.height / 2 + this.LABEL_OFFSET;
		this.addChild(selectLabel);

		// Display available solar systems (MMORooms) for user selection
		var MAX_MENU_WIDTH = 600;

		this.menuItems = [];
		
		for (var i = 0; i < roomList.length; i++)
		{
			var room = roomList[i];
			
			var menuItem = new SolarSysMenuItem(room.name);
			menuItem.x = (size.width - this.MAX_MENU_WIDTH) / 2 + this.MAX_MENU_WIDTH / roomList.length * i + (this.MAX_MENU_WIDTH / roomList.length) / 2;
			menuItem.y = selectLabel.y - 130;
			this.addChild(menuItem);
			
			// Add to list
			// This is used by the scene class to attach the click listeners
			this.menuItems.push(menuItem);
		}

		// Error textfield
		this.errorText = new ccui.Text();
		this.errorText.setFontName("Akashi");
		this.errorText.setFontSize(22);
		this.errorText.setColor(cc.color(255,0,0,255));
		this.errorText.ignoreContentAdaptWithSize(false);
		this.errorText.setContentSize(cc.size(500,100));
		this.errorText.anchorY = 1;
		this.errorText.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

		this.errorText.x = selectLabel.x;
		this.errorText.y = this.menuItems[0].y - this.menuItems[0].height - 30;
		this.addChild(this.errorText);

		return true;
	}
});

var SolarSysMenuItem = ccui.Button.extend(
{
	roomName: null,

	ctor: function(roomName)
	{
		this._super();

		this.roomName = roomName;

		// Show star image
		this.loadTextureNormal("system_menu_" + this.roomName.toLowerCase() + ".png", ccui.Widget.PLIST_TEXTURE);
		this.setZoomScale(-0.1);

		// Show star name
		// (anchorY is modified to move the label below the image)
		this.titleText = this.roomName;
		this.titleFontName = "Akashi";
		this.titleFontSize = 28;
		this.getTitleRenderer().anchorY = 3.6;
	}
});
