var StarshipSelectionScene = cc.Scene.extend(
{
	ctor: function(starshipModels)
	{
		cc.log("Running Starship Selection scene...");

		this._super();

		// Add background layer
		var bgLayer = new BackgroundLayer();
		this.addChild(bgLayer);

		// Add title layer
		var titleLayer = new TitleLayer();
		this.addChild(titleLayer);

		// Add starships layer
		var starshipsLayer = new StarshipsLayer(starshipModels);
		this.addChild(starshipsLayer);

		// Register UI listeners
		for (var i = 0; i < starshipsLayer.menuItems.length; i++)
			starshipsLayer.menuItems[i].addTouchEventListener(this.onSelectButtonClick, this);
	},

	onExit: function()
	{
		cc.log("Starship Selection scene removed");
	},

	/**
	 * On starship item click, dispatch an event to main controller.
	 */
	onSelectButtonClick: function(sender, type)
	{
		if (type === ccui.Widget.TOUCH_ENDED || type === ccui.Widget.TOUCH_CANCELLED)
		{
			// Retrieve selected starship model and dispatch event
			cc.eventManager.dispatchCustomEvent(EVENT_SHIP_SELECTED, {model:sender.model});
		}
	}
});

var StarshipsLayer = BaseMenuLayer.extend(
{
	ctor: function(starshipModels)
	{
		this._super();

		// Get view size
		var size = cc.director.getWinSize();

		// Display label
		var selectLabel = new cc.LabelTTF("Select your starship", "Akashi", 28);
		selectLabel.x = size.width / 2;
		selectLabel.y = size.height / 2 + this.LABEL_OFFSET;
		this.addChild(selectLabel);

		// Display available starships for user selection
		var models = starshipModels.getKeysArray();

		this.menuItems = [];
		
		for (var i = 0; i < models.length; i++)
		{
			var starship = starshipModels.getSFSObject(models[i]);
			
			var menuItem = new StarshipMenuItem(starship);
			menuItem.y = selectLabel.y - 70;
			menuItem.x = (size.width - this.MAX_MENU_WIDTH) / 2 + this.MAX_MENU_WIDTH / models.length * i + (this.MAX_MENU_WIDTH / models.length) / 2;
			
			this.addChild(menuItem);
			
			// Add to list
			// This is used by the scene class to attach the click listeners
			this.menuItems.push(menuItem);
		}

		return true;
	}
});

var StarshipMenuItem = ccui.Button.extend(
{
	model: null,

	ctor: function(starship)
	{
		this._super();

		this.model = starship.getUtfString("model");

		// Show starship image
		this.loadTextureNormal("ship_menu_" + this.model.toLowerCase() + ".png", ccui.Widget.PLIST_TEXTURE);
		this.setZoomScale(-0.1);

		// Show starship name
		// (anchorY is modified to move the label below the image)
		this.titleText = this.model;
		this.titleFontName = "Akashi";
		this.titleFontSize = 28;
		this.getTitleRenderer().anchorY = 2.2;
	}
});

