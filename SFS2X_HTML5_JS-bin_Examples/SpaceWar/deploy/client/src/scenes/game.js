var GameScene = cc.Scene.extend(
{
	SCROLL_AREA_PADDING: 15, // % of the viewport size
	Keyboard: {LEFT:37, UP: 38, RIGHT: 39, SPACE: 32},

	starshipTypes: null,
	weaponTypes: null,
	debugTrajectory: null,
	bglayer: null,
	gameLayer: null,
	clientServerLag: 0,
	myStarship: null,
	isThrustKeyDown: false,
	isFire1KeyDown: false,

	ctor: function(starshipTypes, weaponTypes, debugTrajectory)
	{
		cc.log("Running main Game scene...");

		this._super();

		this.starshipTypes = starshipTypes;
		this.weaponTypes = weaponTypes;
		this.debugTrajectory = debugTrajectory;

		// Add background layer
		this.bgLayer = new BackgroundLayer();
		this.addChild(this.bgLayer);

		// Add background layer
		this.gameLayer = new cc.Layer();
		this.addChild(this.gameLayer);

		// Register SFSEvent listeners
		sfs.addEventListener(SFS2X.SFSEvent.PING_PONG, this.onPingPong, this);
		sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this);
		sfs.addEventListener(SFS2X.SFSEvent.USER_VARIABLES_UPDATE, this.onUserVarsUpdate, this);
		sfs.addEventListener(SFS2X.SFSEvent.PROXIMITY_LIST_UPDATE, this.onProximityListUpdate, this);
		sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);

		// Register keyboard listeners
		cc.eventManager.addListener({
			event: cc.EventListener.KEYBOARD,
			onKeyPressed: this.onKeyboardDown,
			onKeyReleased: this.onKeyboardUp
		}, this);

		// Initialize starships and shots containers
		this.starships = [];
		this.weaponShots = [];

		// Enable the "on-enter-frame" event
		// (see "update" method)
		this.scheduleUpdate();
	},

	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// Overridden methods
	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	onExit: function()
	{
		cc.log("Game scene removed");

		// Remove SFSEvent listeners
		sfs.removeEventListener(SFS2X.SFSEvent.PING_PONG, this.onPingPong);
		sfs.removeEventListener(SFS2X.SFSEvent.USER_VARIABLES_UPDATE, this.onUserVarsUpdate);
		sfs.removeEventListener(SFS2X.SFSEvent.PROXIMITY_LIST_UPDATE, this.onProximityListUpdate);
		sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse);
	},

	update: function()
	{
		// Move weapon shots to next coordinates
		for (var ws in this.weaponShots)
		{
			var shot = this.weaponShots[ws];

			if (shot)
				this.renderWeaponShot(shot);
		}
		
		// Move starships to next coordinates
		for (var ss in this.starships)
		{
			var ship = this.starships[ss];

			if (ship)
			{
				this.renderStarship(ship);
				
				if (ship.debug)
					ship.debugPosition();
			}
		}
	},

	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// Keyboard event handlers
	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	onKeyboardDown: function(key, event)
	{
		var scene = event.getCurrentTarget();

		if (scene.myStarship)
		{
			if (key === scene.Keyboard.LEFT || key === scene.Keyboard.RIGHT)
			{
				var dir = (key === scene.Keyboard.RIGHT ? -1 : +1);
				
				if (dir !== scene.myStarship.rotatingDir)
				{
					// Set current rotation direction
					// This can be done immediately, as it doesn't affect the ship trajectory
					// and, in the meanwhile, offers a better user experience (no lag after the keypress)
					scene.setStarshipRotating(scene.myStarship.userId, dir);
					
					// Send request to the server
					scene.sendStarshipRotateReq(scene.myStarship.rotatingDir);
				}
			}
			
			if (key === scene.Keyboard.UP)
			{
				if (!scene.isThrustKeyDown)
				{
					scene.isThrustKeyDown = true;
					
					// Thrust activation is made of 3 steps:
					// 1) on key down the ship shows a small flame; no actual force is applied to the ship (no trajectory change)
					// 2) request is sent to the server which activates the thrust and sends a position reset event
					// 3) when the event is received the ship shows a bigger flame and the thrust force is applied during the simulation
					scene.myStarship.setThrusterValue(1);
					
					// Send request to the server
					scene.sendStarshipThrustReq(true);
				}
			}
			
			if (key === scene.Keyboard.SPACE)
			{
				if (!scene.isFire1KeyDown)
				{
					scene.isFire1KeyDown = true;
					
					// Send request to the server
					scene.sendStarshipFireReq(1);
				}
			}
		}
	},

	onKeyboardUp: function(key, event)
	{
		var scene = event.getCurrentTarget();
		
		if (scene.myStarship)
		{
			if (key === scene.Keyboard.LEFT || key === scene.Keyboard.RIGHT)
			{
				var dir = (key === scene.Keyboard.RIGHT ? -1 : +1);
				
				if (dir === scene.myStarship.rotatingDir)
				{
					// Stop rotation
					scene.setStarshipRotating(scene.myStarship.userId, 0);
					
					// Send request to the server
					scene.sendStarshipRotateReq(scene.myStarship.rotatingDir);
				}
			}
			
			if (key === scene.Keyboard.UP)
			{
				if (scene.isThrustKeyDown)
				{
					scene.isThrustKeyDown = false;
					
					// Thrust deactivation is made of 3 steps:
					// 1) on key up the ship shows a small flame; the actual force is still applied to the ship (trajectory keeps changing)
					// 2) request is sent to the server which deactivates the thrust and sends a position reset event
					// 3) when the event is received the ship stops showing the flame and the thrust force is not applied anymore
					scene.myStarship.thrusterValue = 1;
					
					// Send request to the server
					scene.sendStarshipThrustReq(false);
				}
			}
			
			if (key === scene.Keyboard.SPACE)
			{
				// Reset flag so another shot can be fired
				scene.isFire1KeyDown = false;
			}
		}
	},

	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// SmartFox event handlers
	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	/**
	 * Evaluates the current client-server lag.
	 * Returned value is divided by two because we just need the server to client lag (not client to server to client).
	 */
	onPingPong: function(evtParams)
	{
		this.clientServerLag = (evtParams.lagValue) / 2;
	},

	/**
	 * Synchronizes the user trajectory with the server-side simulation.
	 * This requires the client-server lag compensation: in other words the elapsed time since the event was sent
	 * by the server is taken into account to guess where the starship is located now.
	 * 
	 * If the user is myself, and the starship doesn't exist yet
	 * (because the MMORoom was just joined), also creates the starship.
	 */
	onUserVarsUpdate: function(evtParams)
	{
		var user = evtParams.user;
		var changedVars = evtParams.changedVars;
		
		if (changedVars.indexOf(UV_ROTATE) > -1)
		{
			// Make user starship start or stop rotating (excluding current user who controls his starship directly)
			if (user !== sfs.mySelf)
			{
				var r1 = user.getVariable(UV_ROTATE).value;
				this.setStarshipRotating(user.id, r1);
			}
		}
		
		if (changedVars.indexOf(UV_X) > -1 || changedVars.indexOf(UV_Y) > -1 ||
			changedVars.indexOf(UV_VX) > -1 || changedVars.indexOf(UV_VY) > -1 ||
			changedVars.indexOf(UV_DIR) > -1 || changedVars.indexOf(UV_THRUST) > -1)
		{
			// Create current user starship if not yet existing
			if (user === sfs.mySelf && !this.starships[user.id])
			{
				var aoi = sfs.lastJoinedRoom.defaultAOI;
				var size = cc.director.getWinSize();
				var rect = null;
				
				if (aoi.px * 2 < size.width || aoi.py * 2 < size.height)
					rect = cc.rect(0, 0, aoi.px * 2, aoi.py * 2);

				this.createStarship(user.id, user.name, true, user.getVariable(UV_MODEL).value, rect);
			}
			
			// Reset user starship state in simulator, taking lag into account
			var x = user.getVariable(UV_X).value;
			var y = user.getVariable(UV_Y).value;
			var vx = user.getVariable(UV_VX).value;
			var vy = user.getVariable(UV_VY).value;
			var d = user.getVariable(UV_DIR).value;
			var t = user.getVariable(UV_THRUST).value;
			
			this.setStarshipPosition(user.id, x, y, vx, vy, d, t);
		}
	},

	/**
	 * Creates/removes the starships of users entering/leaving the current user's Area of Interest (AoI).
	 * Creates/removes the weapon shots corresponding to MMOItems entering/leaving the current user's Area of Interest (AoI).
	 */
	onProximityListUpdate: function(evtParams)
	{
		// Loop the removedUsers list in the event params to remove the starships no more visible
		var removedUsers = evtParams.removedUsers;
		for (var r in removedUsers)
		{
			var ru = removedUsers[r];
			this.removeStarship(ru.id);
		}
		
		// Loop the addedUsers list in the event params to create the starships now visible
		// To the usual lag we add 10ms, which is half the value of the proximityListUpdateMillis setting on the server
		// As we don't know exactly after how much time the update event was fired after the users updated their positions in the MMORoom
		// (could be 0ms up to 20ms), we use half the proximityListUpdateMillis value as a sort of mean value for an additional corretion of the lag
		var addedUsers = evtParams.addedUsers;
		for (var a in addedUsers)
		{
			var au = addedUsers[a];

			// Create starship
			this.createStarship(au.id, au.name, false, au.getVariable(UV_MODEL).value);
			
			// Get position-related User Variables
			var x = au.getVariable(UV_X).value;
			var y = au.getVariable(UV_Y).value;
			var vx = au.getVariable(UV_VX).value;
			var vy = au.getVariable(UV_VY).value;
			var d = au.getVariable(UV_DIR).value;
			var t = au.getVariable(UV_THRUST).value;
			var r = au.getVariable(UV_ROTATE).value;
			
			// Set starship rotating flag
			this.setStarshipRotating(au.id, r);
			
			// Set starship position
			this.setStarshipPosition(au.id, x, y, vx, vy, d, t, this.clientServerLag + 10); // See note above regarding this +10
		}
		
		// Loop the removedItems list in the event params to remove the weapon shots no more visible
		// NOTE: sprites might have been already removed in case the shots explode within the AoI of the user
		// (notified by a dedicated Extension response) 
		var removedItems = evtParams.removedItems;
		for (var rr in removedItems)
		{
			var ri = removedItems[rr];
			this.removeWeaponShot(ri.id);
		}
		
		// Loop the addedItems list in the event params to create those now visible
		// The same note about addedUsers applies here
		var addedItems = evtParams.addedItems;
		for (var aa in addedItems)
		{
			var ai = addedItems[aa];
			var type = ai.getVariable(IV_TYPE).value;
			
			// Weapon shots
			if (type === ITYPE_WEAPON)
			{
				// Get position-related MMOItem Variables
				var im = ai.getVariable(IV_MODEL).value;
				var ix = ai.getVariable(IV_X).value;
				var iy = ai.getVariable(IV_Y).value;
				var ivx = ai.getVariable(IV_VX).value;
				var ivy = ai.getVariable(IV_VY).value;
				
				// Create weapon shot
				this.createWeaponShot(ai.id, im, ix, iy, ivx, ivy, this.clientServerLag + 10);
			}
		}
	},

	/**
	 * Processes the responses sent by the server side Extension.
	 */
	onExtensionResponse: function(evtParams)
	{
		var params = evtParams.params;
		var cmd = evtParams.cmd;
		
		// A weapon shot exploded
		if (cmd === RES_SHOT_XPLODE)
		{
			var shotId = params.getInt("id");
			var posX = params.getInt("x");
			var posY = params.getInt("y");
			
			this.explodeWeaponShot(shotId, posX, posY);
		}
	},

	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// Game control methods
	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	createStarship: function(userId, userName, isMine, type, aoiRect)
	{
		var ship = new Starship(userId, userName, isMine, this.starshipTypes.getSFSObject(type), this.debugTrajectory, aoiRect);
		
		// Add starship to array container
		this.starships[userId] = ship;
		
		// Add starship to sprite container
		this.gameLayer.addChild(ship);
		
		if (isMine)
			this.myStarship = ship;
	},

	removeStarship: function(userId)
	{
		var ship = this.starships[userId];
		
		delete this.starships[userId];
		
		this.gameLayer.removeChild(ship);
		
		if (ship === this.myStarship)
			this.myStarship = null;
	},

	setStarshipPosition: function(userId, x, y, vx, vy, d, t)
	{
		var ship = this.starships[userId];
		
		if (ship)
		{
			// Set position and velocity
			ship.xx = x;
			ship.yy = y;
			ship.velocity.vx = vx;
			ship.velocity.vy = vy;
			ship.lastRenderTime = (new Date()).getTime() - this.clientServerLag;
			
			// Set thruster
			ship.doThrust(t);
			
			// Set rotation angle
			ship.rotation = d;
			
			// Render the starship
			// This simulates the starship movement taking into account the elapsed time since the server sent the new position/speed
			// and places the starship in the current coordinates
			this.renderStarship(ship);
		}
	},

	setStarshipRotating: function(userId, r)
	{
		var ship = this.starships[userId];
		
		if (ship)
			ship.rotatingDir = r;
	},

	createWeaponShot: function(id, type, x, y, vx, vy, elapsed)
	{
		var shot = new WeaponShot(id, this.weaponTypes.getSFSObject(type));
		
		// Add weapon shot to array container
		this.weaponShots[id] = shot;
		
		// Add shot to sprite container below the starships
		// Having the shots below the starships helps reducing the lag perception during collisions
		this.gameLayer.addChild(shot, 0);
		
		// Set position and velocity
		shot.xx = x;
		shot.yy = y;
		shot.velocity.vx = vx;
		shot.velocity.vy = vy;
		shot.lastRenderTime = (new Date()).getTime() - elapsed;
		
		// Render the weapon shot
		// This simulates the shot movement taking into account the elapsed time since the server sent the position/speed
		// and places the shot in the current coordinates
		this.renderWeaponShot(shot);
	},

	removeWeaponShot: function(id)
	{
		var shot = this.weaponShots[id];
		
		if (shot)
		{
			delete this.weaponShots[id];
			
			this.gameLayer.removeChild(shot);
		}
	},

	explodeWeaponShot: function(id, posX, posY)
	{
		var shot = this.weaponShots[id];
		
		if (shot)
		{
			// Remove shot
			this.removeWeaponShot(id);
			
			// Show explosion
			var xplosion = new Xplosion();
			xplosion.x = posX;
			xplosion.y = posY;
			this.gameLayer.addChild(xplosion);
		}
	},

	/**
	 * Moves a starship to the next position based on applied forces.
	 * 
	 * Fake xx & yy coordinates are used because Sprite x & y get approximated;
	 * so we do all simulation using fake coordinates and only at the end of the cycle
	 * we assign the calculated values to the real x,y coordinates for stage rendering.
	 */
	renderStarship: function(ship)
	{
		var now = (new Date()).getTime();
		var elapsed = now - ship.lastRenderTime;
		
		for (var i = 0; i < elapsed; i++)
		{
			// Ship rotation
			ship.rotation += ship.rotatingDir * ship.getRotationSpeed();
			
			// Thruster force
			if (ship.hasThrust)
			{
				ship.velocity.vx += Math.cos(ship.rotation) * ship.getThrustAcceleration();
				ship.velocity.vy += Math.sin(ship.rotation) * ship.getThrustAcceleration();
			}
			
			// Gravity force
			if (ship.getMass() > 0)
			{
				//var grav = this.evalGravityForce(ship.xx, ship.yy, ship.getMass());
				//ship.velocity.vx += grav.vx;
				//ship.velocity.vy += grav.vy;

				// NOTE: the evalGravityForce method is not implemented; this is just a placeholder
				// to show where such improvement could be added; that method should measure the distance
				// of the starship from a gravitational pit (a star for example) and calculate the velocity
				// vector accordingly (usualy taking mass into account too)
			}
			
			// Limit speed
			ship.velocity.limitSpeed(ship.getMaxSpeed());
			
			// Update ship position due to the calculated velocity
			ship.xx += ship.velocity.vx;
			ship.yy += ship.velocity.vy;
		}
		
		// Evaluate background scroll amount
		var scrollX = ship.xx - ship.x;
		var scrollY = ship.yy - ship.y;
		
		// Update starship sprite position in the sprites container
		ship.x = ship.xx;
		ship.y = ship.yy;
		
		ship.lastRenderTime = now;
		
		if (ship.isMine)
		{
			// Scroll sprites container
			var globalCoords = ship.convertToWorldSpace(cc.p(0,0));
			var perc = this.SCROLL_AREA_PADDING / 100;
			var size = cc.director.getWinSize();
			
			if (globalCoords.x > (size.width * (1 - perc)))
				this.gameLayer.x -= globalCoords.x - (size.width * (1 - perc));
			if (globalCoords.x < (size.width * perc))
				this.gameLayer.x += (size.width * perc) - globalCoords.x;
			
			if (globalCoords.y > (size.height * (1 - perc)))
				this.gameLayer.y -= globalCoords.y - (size.height * (1 - perc));
			if (globalCoords.y < (size.height * perc))
				this.gameLayer.y += (size.height * perc) - globalCoords.y;
			
			// Scroll background
			this.bgLayer.scroll(scrollX, scrollY);
		}
	},

	/**
	 * Moves a weapon shot to the next position based on applied forces.
	 * Above note about fake xx and yy coordinates apply here too.
	 */
	renderWeaponShot: function(shot)
	{
		var now = (new Date()).getTime();
		var elapsed = now - shot.lastRenderTime;
		
		for (var i = 0; i < elapsed; i++)
		{
			// Gravity force
			if (shot.getMass() > 0)
			{
				//var grav:Velocity = evalGravityForce(shot.xx, shot.yy, shot.getMass());
				//shot.velocity.vx += grav.vx;
				//shot.velocity.vy += grav.vy;

				// NOTE: see note in rendership() method
			}
			
			// If gravity is used, a speed limit should be applied to shots too
			
			// Update shot position due to the calculated velocity
			shot.xx += shot.velocity.vx;
			shot.yy += shot.velocity.vy;
		}
		
		shot.x = shot.xx;
		shot.y = shot.yy;
		
		shot.lastRenderTime = now;
	},

	/**
	 * Sends the rotation event to the MMORoom Extension.
	 */
	sendStarshipRotateReq: function(rotationDir)
	{
		var params = new SFS2X.SFSObject();
		params.putInt("dir", rotationDir);

		sfs.send( new SFS2X.ExtensionRequest(REQ_ROTATE, params, sfs.lastJoinedRoom) );
	},
	
	/**
	 * Sends the thrust event to the MMORoom Extension.
	 */
	sendStarshipThrustReq: function(activate)
	{
		var params = new SFS2X.SFSObject();
		params.putBool("go", activate);

		sfs.send( new SFS2X.ExtensionRequest(REQ_THRUST, params, sfs.lastJoinedRoom) );
	},
	
	/**
	 * Sends the fire event to the MMORoom Extension.
	 */
	sendStarshipFireReq: function(weapon)
	{
		var params = new SFS2X.SFSObject();
		params.putInt("wnum", weapon);

		sfs.send( new SFS2X.ExtensionRequest(REQ_FIRE, params, sfs.lastJoinedRoom) );
	}
});



