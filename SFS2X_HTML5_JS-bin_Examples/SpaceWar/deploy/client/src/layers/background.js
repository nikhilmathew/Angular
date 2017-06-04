var BackgroundLayer = cc.Layer.extend(
{
	bgLayer1: null,
	bgLayer2: null,

	ctor: function()
	{
		this._super();

		this.bgLayer1 = new BgSubLayer(res.bg_starfield1_jpg, 0.5, false);
		this.addChild(this.bgLayer1);

		this.bgLayer2 = new BgSubLayer(res.bg_starfield2_png, 0.7, true);
		this.addChild(this.bgLayer2);

		return true;
	},

	scroll: function(scrollX, scrollY)
	{
		// Set background 1 position
		this.bgLayer1.x -= scrollX * this.bgLayer1.parallax;
		this.bgLayer1.y -= scrollY * this.bgLayer1.parallax;

		// Adjust background 1 tiling
		if (this.bgLayer1.x < 0)
			this.bgLayer1.x += this.bgLayer1.width;
		else if (this.bgLayer1.x > this.bgLayer1.width)
			this.bgLayer1.x -= this.bgLayer1.width;
		
		if (this.bgLayer1.y < 0)
			this.bgLayer1.y += this.bgLayer1.height;
		else if (this.bgLayer1.y > this.bgLayer1.height)
			this.bgLayer1.y -= this.bgLayer1.height;
		
		// Set background 2 position
		this.bgLayer2.x -= Math.round(scrollX * this.bgLayer2.parallax);
		this.bgLayer2.y -= Math.round(scrollY * this.bgLayer2.parallax);
		
		// Adjust background 2 tiling
		if (this.bgLayer2.x < 0)
			this.bgLayer2.x += this.bgLayer2.width;
		else if (this.bgLayer2.x > this.bgLayer2.width)
			this.bgLayer2.x -= this.bgLayer2.width;
		
		if (this.bgLayer2.y < 0)
			this.bgLayer2.y += this.bgLayer2.height;
		else if (this.bgLayer2.y > this.bgLayer2.height)
			this.bgLayer2.y -= this.bgLayer2.height;
	}
});

var BgSubLayer = cc.Layer.extend(
{
	parallax: 0,

	ctor: function(texture, parallax, useBlend)
	{
		this._super();

		this.parallax = parallax;

		for (var r = 0; r <= 1; r++)
		{
			for (var c = 0; c <= 1; c++)
			{
				var sprite = new cc.Sprite(texture);
				
				sprite.x = -sprite.width / 2 + (sprite.width * c);
				sprite.y = -sprite.height / 2 + (sprite.height * r);
				
				if (useBlend)
					sprite.setBlendFunc(cc.SRC_ALPHA, cc.ONE);
				
				this.addChild(sprite);
			}
		}

		// DEBUG CODE
		// Used to check the background tiles position on screen
		/*
		for (var r = 0; r <=1; r++)
		{
			for (var c = 0; c <=1; c++)
			{
				var dn = new cc.DrawNode();
				dn.x = -500 + (1000 * c);
				dn.y = -400 + (800 * r);
				this.addChild(dn);

				dn.drawRect(cc.p(-500,-400), cc.p(500,400), cc.color(0,0,0,0), 1, useBlend ? cc.color(255,0,0,255): cc.color(0,255,0,255));
			}
		}
		*/
		return true;
	}
});