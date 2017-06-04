var Velocity = cc.Class.extend(
{
	vx: 0,
	vy: 0,

	ctor: function(vx, vy)
	{
		this.vx = vx;
		this.vy = vy;
	},

	getSpeed: function()
	{
		return Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2));
	},

	getDirection: function()
	{
		return (Math.atan2(this.vy, this.vx));
	},

	limitSpeed: function(maxSpeed)
	{
		if (this.getSpeed() > maxSpeed)
		{
			var dir = this.getDirection();
			
			this.vx = Math.cos(dir) * maxSpeed;
			this.vy = Math.sin(dir) * maxSpeed;
		}
	},
	
	toComponentsString: function()
	{
		return "(" + this.vx + "," + this.vy + ")";
	},
	
	toVectorString: function()
	{
		return "[" + this.getSpeed() + "," + this.getDirection() + " rad]";
	}
});

var GameItem = cc.Node.extend(
{
	settings: null,

	xx: 0,
	yy: 0,
	velocity: null,
	lastRenderTime: 0,

	ctor: function(settings)
	{
		this._super();

		this.settings = settings;
		this.velocity = new Velocity(0, 0);
	},

	getModel: function()
	{
		return this.settings.getUtfString("model");
	},
	
	getMass: function()
	{
		return this.settings.getInt("mass");
	}
});

var Starship = GameItem.extend(
{
	userId: -1,
	isMine: false,
	rotatingDir: 0,
	hasThrust: false,
	debug: false,
	
	_thrusterValue: 0,
	_debugTime: 0,

	ctor: function(userId, userName, isMine, settings, debug, aoiRect)
	{
		this._super(settings);

		this.userId = userId;
		this.isMine = isMine;
		this.rotatingDir = 0;
		this.debug = debug;
		
		this._debugTime = (new Date()).getTime();

		// Attach ship's sprite
		this.sprite = new cc.Sprite();
		this.addChild(this.sprite);

		// Set thrust value, which also displays the proper frame
		this.setThrusterValue(0);

		// Set ship's anchor point
		this.sprite.anchorX = 0.6;

		// Display username
		var label = new cc.LabelTTF(userName, "Akashi", 10);
		label.anchorY = 1;
		label.y = this.sprite.height / 2 - 25;
		label.opacity = 100;
		this.addChild(label);

		// Display user's AoI for debug purposes
		if (aoiRect)
		{
			var dn = new cc.DrawNode();
			dn.drawRect(cc.p(-aoiRect.width/2,-aoiRect.height/2), cc.p(aoiRect.width/2,aoiRect.height/2), cc.color(0,0,0,0), 1, cc.color(255,0,0,255));
			this.addChild(dn);
		}
	},

	getMaxSpeed: function()
	{
		// Speed is converted from pixels/sec to pixels/ms
		return this.settings.getInt("maxSpeed") / 1000;
	},
	
	getRotationSpeed: function()
	{
		// Rotation speed is converted from degrees/sec to radians/ms
		return (this.settings.getInt("rotationSpeed") * Math.PI / 180) / 1000;
	},
	
	getThrustAcceleration: function()
	{
		// Thrust accceleration is converted from pixels/sec2 to pixels/ms2
		return this.settings.getInt("thrustAccel") / 1000000;
	},

	// Override node's "rotation" getter
	getRotation: function()
	{
		// Convert the rotation angle from degrees to radiants
		// NOTE: angle is inverted (-angleRad) because Cocos uses a coordinates system different from the one used on the server side and other clients)
		var angleRad = this.sprite.getRotation() * Math.PI / 180;
		return -angleRad;
	},

	// Override node's "rotation" setter
	setRotation: function(angleRad)
	{
		// Convert the rotation angle from radiants (sent by the server) to degrees (required by Cocos)
		// NOTE: angle is inverted (-angleRad) because Cocos uses a coordinates system different from the one used on the server side and other clients)
		var angleDeg = -angleRad * 180 / Math.PI;
		this.sprite.setRotation(angleDeg);
	},
	
	doThrust: function(active)
	{
		this.hasThrust = active;
		this.setThrusterValue(active ? 2 : 0);
	},

	setThrusterValue: function(value)
	{
		this._thrusterValue = value;

		// Display frame
		var frameNum = value + 1;
		var frame = cc.spriteFrameCache.getSpriteFrame("ship_" + this.getModel().toLowerCase() + "_000" + frameNum + ".png");
		this.sprite.setSpriteFrame(frame);
	},
	
	getThrusterValue: function()
	{
		return this._thrusterValue;
	},
	
	debugPosition: function()
	{
		cc.log((new Date()).getTime() - this._debugTime, this.xx + "," + this.yy);
	}
});

var WeaponShot = GameItem.extend(
{
	id: -1,

	ctor: function(id, settings)
	{
		this._super(settings);

		this.id = id;

		// Attach shot's sprite
		this.sprite = new cc.Sprite();
		this.addChild(this.sprite);

		// Create sprite frames array
		var animFrames = [];
		for (var i = 1; i <= 19; i++)
		{
			var f = (i < 10) ? "0" + String(i) : String(i);
		    var str = "weapon_torpedo_00" + f + ".png";
		    var frame = cc.spriteFrameCache.getSpriteFrame(str);
		    animFrames.push(frame);
		}

		// Create a animation with the sprite frames array along with a period time
		var animation = new cc.Animation(animFrames, 0.05);
		var action = new cc.RepeatForever(new cc.Animate(animation));

		// Show animation
		this.sprite.runAction(action);
	}
});

var Xplosion = GameItem.extend(
{
	ctor: function()
	{
		this._super();

		// Attach explosion's sprite
		this.sprite = new cc.Sprite();
		this.addChild(this.sprite);

		// Create sprite frames array
		var animFrames = [];
		for (var i = 1; i <= 11; i++)
		{
			var f = (i < 10) ? "0" + String(i) : String(i);
		    var str = "explosion_00" + f + ".png";
		    var frame = cc.spriteFrameCache.getSpriteFrame(str);
		    animFrames.push(frame);
		}

		// Create a animation with the sprite frames array along with a period time
		var animation = new cc.Animation(animFrames, 0.04);
		var action = new cc.Animate(animation);

		// Show animation
		this.sprite.runAction(action);
	}
});


