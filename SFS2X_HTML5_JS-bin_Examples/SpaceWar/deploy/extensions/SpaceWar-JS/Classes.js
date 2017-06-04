var System = Java.type('java.lang.System');


var Velocity = Class.extend
({
	init: function(x, y) 
	{
		this.vx = x
		this.vy = y
	},

	getSpeed: function() 
	{
		return Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2))
	},

	getDirection: function()
	{
		return Math.atan2(this.vy, this.vx)
	},

	limitSpeed: function(maxSpeed)
	{
		if (this.getSpeed() > maxSpeed)
		{
			var dir = this.getDirection()
		
			this.vx = Math.cos(dir) * maxSpeed
			this.vy = Math.sin(dir) * maxSpeed
		}
	},

	toComponentsString: function()
	{
		return "(" + this.vx + "," + this.vy + ")"
	},

	toVectorString: function()
	{
		return "[" + this.getSpeed() + "," + this.getDirection() + " rad]"
	}
})

// -----------------------------------------------------------------------

var GameItem = Class.extend
({
	init: function(ownerId, settings)
	{
		this.ownerId = ownerId
		this.settings = settings
		this.x = 0
		this.y = 0
		this.velocity = new Velocity(0, 0)
		this.lastRenderTime = 0
	},

	getOwnerId: function()
	{
		return this.ownerId
	},

	getModel: function()
	{
		return this.settings.getUtfString("model")
	},

	getVX: function()
	{
		return this.velocity.vx
	},

	getVY: function()
	{
		return this.velocity.vy
	}
})

// -----------------------------------------------------------------------

var WeaponShot = GameItem.extend
({
	init: function(ownerId, settings)
	{
		this._super(ownerId, settings)

		this.selfDestructTime = 0
		this.mmoItemId = -1

		if (this.getDuration() > 0)
			this.selfDestructTime = System.currentTimeMillis() + this.getDuration() * 1000
	},

	setMMOItemId: function(mmoItemId)
	{
		if (this.mmoItemId == -1)
			this.mmoItemId = mmoItemId
	},

	getMMOItemId: function()
	{
		return this.mmoItemId
	},

	getSpeed: function()
	{
		var value = this.settings.getInt("speed")

		// Speed is converted from pixels/sec to pixels/ms
		return value / 1000
	},

	getHitRadius: function()
	{
		return this.settings.getInt("hitRadius");
	},

	getHitForce: function()
	{
		var value = this.settings.getInt("hitForce")

		// Speed is converted from pixels/sec to pixels/ms
		return value / 1000
	},

	isSelfDestruct: function()
	{
		if (this.selfDestructTime > 0)
			return (System.currentTimeMillis() >= this.selfDestructTime);
		
		return false;
	},

	getDuration: function()
	{
		return this.settings.getInt("duration")
	},

	getRotationSpeed: function()
	{
		var value = this.settings.getInt("rotationSpeed")
		
		// Rotation speed is converted from degrees/sec to radians/ms
		return (value * Math.PI / 180) / 1000
	}

})


// -----------------------------------------------------------------------


var Starship = GameItem.extend
({
	init: function(ownerId, settings)
	{
		this._super(ownerId, settings)

		this.rotation = 0
		this.rotatingDir = 0
		this.thrust = false
	},

	getMaxSpeed: function()
	{
		var value = this.settings.getInt("maxSpeed")
		
		// Speed is converted from pixels/sec to pixels/ms
		return value / 1000
	},

	getThrustAcceleration: function()
	{
		var value = this.settings.getInt("thrustAccel")
		
		// Thrust accceleration is converted from pixels/sec2 to pixels/ms2
		return value / 1000000
	},

	getRotationSpeed: function()
	{
		var value = this.settings.getInt("rotationSpeed");
		
		// Rotation speed is converted from degrees/sec to radians/ms
		return (value * Math.PI / 180) / 1000
	},

	toString: function()
	{
		return "[ship -- x: " + this.x + ", y: " + this.y + "]"
	}
})


// -----------------------------------------------------------------------



