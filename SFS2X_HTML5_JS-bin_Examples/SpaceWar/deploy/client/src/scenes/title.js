var TitleScene = cc.Scene.extend(
{
	inputLayer: null,

	ctor: function(username, errorMsg)
	{
		cc.log("Running Title scene...");

		this._super();

		// Add background layer
		var bgLayer = new BackgroundLayer();
		this.addChild(bgLayer);

		// Add title layer
		var titleLayer = new TitleLayer();
		this.addChild(titleLayer);

		// Add input layer
		this.inputLayer = new InputLayer(username, errorMsg);
		this.addChild(this.inputLayer);

		// Register UI listeners
		this.inputLayer.playButton.addTouchEventListener(this.onPlayButtonClick, this);
	},

	onExit: function()
	{
		cc.log("Title scene removed");

		// Remove SFSEvent listeners
		sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection);
	},

	/**
	 * On play button click, starts the connection+login process.
	 */
	onPlayButtonClick: function(sender, type)
	{
		if (type === ccui.Widget.TOUCH_ENDED || type === ccui.Widget.TOUCH_CANCELLED)
		{
			// Dispatch pre-connection event
			// This is used by the main game controller (see /main.js) to create a new SmartFox class instance before the connection is attempted
			// This is important to make sure no garbage is left over reusing the same SmartFox instance over and over
			cc.eventManager.dispatchCustomEvent(EVENT_PRE_CONNECTION_ATTEMPT);

			// Disable UI
			this.enableUserInterface(false);

			// Add SFSEvent listeners
			sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection, this);
			sfs.addEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin, this);
			sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.onLoginError, this);

			// Attempt connection
			sfs.connect();
		}
	},

	/**
	 * On connection success, sends a login request to the server.
	 * On connection error, shows an error message
	 */
	onConnection: function(evtParams)
	{
		if (evtParams.success)
		{
			// Send login request
			sfs.send( new SFS2X.LoginRequest(this.inputLayer.usernameInput.string) );
		}
		else
		{
			// Enable UI
			this.enableUserInterface(true);

			// Display error
			this.showError("Unable to connect to " + sfs.config.host + ":" + sfs.config.port + "\nIs the server running at all?");
		}
	},

	/**
	 * On login, fires an event so that the main controller (see /main.js) can move to the next scene.
	 */
	onLogin: function(evtParams)
	{
		// Dispatch event
		// Custom data returned by the Extension is forwarded to the controller
		var params = {};
		params.username = evtParams.user.name;
		params.config = evtParams.data;

		cc.eventManager.dispatchCustomEvent(EVENT_ACCESS_GRANTED, params);
	},

	/**
	 * On login error, shows an error message and disconnects from server (so a new connection will be established if the play button is pressed again).
	 */
	onLoginError: function(evtParams)
	{
		// Enable UI
		this.enableUserInterface(true);

		// Display error
		this.showError(evtParams.errorMessage);

		// Disconnect
		sfs.disconnect();
	},

	/**
	 * Enables/disables UI controls.
	 */
	enableUserInterface: function(enabled)
	{
		this.inputLayer.usernameInput.setEnabled(enabled);
		this.inputLayer.playButton.setEnabled(enabled);

		if (!enabled)
			this.inputLayer.errorText.setString("");
	},

	showError: function(errorMsg)
	{
		this.inputLayer.errorText.setString(errorMsg);
	}
});

var InputLayer = cc.Layer.extend(
{
	usernameInput: null,
	playButton: null,
	errorText: null,

	ctor: function(username, errorMsg)
	{
		this._super();

		// Get view size
		var size = cc.director.getWinSize();

		// Username textfield background
		var inputBgSpriteFrame = cc.spriteFrameCache.getSpriteFrame("username_bg.png");
		var inputBgSprite = new cc.Sprite(inputBgSpriteFrame);

		inputBgSprite.x = size.width / 2;
		inputBgSprite.y = size.height / 2;
		this.addChild(inputBgSprite);

		// Username input textfield
		this.usernameInput = new ccui.TextField();
		this.usernameInput.setTouchEnabled(true); // Enables input
		this.usernameInput.setFontName("Akashi");
		this.usernameInput.setFontSize(28);
		this.usernameInput.setMaxLengthEnabled(true);
		this.usernameInput.setMaxLength(15);
		this.usernameInput.setPlaceHolder("Enter name");
		this.usernameInput.setPlaceHolderColor(cc.color(255,0,0,180));
		this.usernameInput.addEventListener(this.onTextFieldInteraction, this);

		if (username)
			this.usernameInput.setString(username);

		this.usernameInput.x = inputBgSprite.x;
		this.usernameInput.y = inputBgSprite.y - 4;
		this.addChild(this.usernameInput);

		// Play button
		this.playButton = new ccui.Button();
		this.playButton.loadTextureNormal("button_play.png", ccui.Widget.PLIST_TEXTURE);
		this.playButton.setZoomScale(-0.1);

		this.playButton.x = inputBgSprite.x;
		this.playButton.y = inputBgSprite.y - this.playButton.height - 10;
		this.addChild(this.playButton);

		// Error textfield
		this.errorText = new ccui.Text();
		this.errorText.setFontName("Akashi");
		this.errorText.setFontSize(22);
		this.errorText.setColor(cc.color(255,0,0,255));
		this.errorText.ignoreContentAdaptWithSize(false);
		this.errorText.setContentSize(cc.size(500,300));
		this.errorText.anchorY = 1;
		this.errorText.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

		if (errorMsg)
			this.errorText.setString(errorMsg);

		this.errorText.x = inputBgSprite.x;
		this.errorText.y = this.playButton.y - this.playButton.height - 50;
		this.addChild(this.errorText);

		return true;
	},

	onTextFieldInteraction: function(sender, type)
	{
		switch (type)
		{
			case ccui.TextField.EVENT_ATTACH_WITH_IME:
				this.usernameInput.setPlaceHolder("");
				break;

			case ccui.TextField.EVENT_DETACH_WITH_IME:
				this.usernameInput.setPlaceHolder("Enter name");
				break;
		}
	}
});



