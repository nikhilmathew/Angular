Game = function()
{
	this.starships = {}
	this.weaponShots = {}

	this.MAX_POSX = 1000
	this.MAX_POSY = 800
}	

Game.prototype.createStarship = function(ownerId, settings) 
{
	var ship = new Starship(ownerId, settings);

	// Set starship random position and rotation angle
	// position is within the client viewport size, so that all users join the same space portion and see each other
	ship.x = Math.random() * this.MAX_POSX
	ship.y = Math.random() * this.MAX_POSY
	ship.rotation = Math.round(Math.random() * 360 * Math.PI / 180)
	
	ship.lastRenderTime = System.currentTimeMillis()
	
	// Add starship to simulation
	this.starships[ownerId] = ship
	
	// Save initial position and velocity to User Variables and position to the SFS2X Proximity Manager system
	// As this is a new starship and the User Variables are set before the position is set in the Proximity Manager system,
	// only the owner user will receive the User Variables update event
	this.saveStarshipPosition(ship, true);
}

/**
 * Removes starship on Extension request (user left MMORoom).
 */
Game.prototype.removeStarship = function(ownerId)
{
	delete this.starships[ownerId]
}

/**
 * Makes starship start or stop rotating.
 * A command is sent to clients using a dedicated User Variable, so that it is received only by users in proximity.
 */
Game.prototype.rotateStarship = function(ownerId,  direction)
{
	var ship = this.starships[ownerId]
	
	// Set rotating
	ship.rotatingDir = direction
	
	// On rotation start, set dedicated User Variable
	if (direction != 0)
		setStarshipRotating(ownerId, direction)
	
	// On stop send full position update to clients
	// This includes the current rotation direction (0)
	else
		this.saveStarshipPosition(ship, true)
}

/**
 * Activates/deactivates starship thruster.
 * A command is sent to clients using a dedicated User Variable, so that it is received only by users in proximity.
 */
Game.prototype.thrustStarship = function(ownerId, activate)
{
	var ship = this.starships[ownerId]
	
	// Set rotating
	ship.thrust = activate
	
	// Set User Variable within the position update event
	this.saveStarshipPosition(ship, true)
}

/**
 * Creates a weapon shot.
 */
Game.prototype.createWeaponShot = function(ownerId, settings)
{
	var shot = new WeaponShot(ownerId, settings)
	var ship = this.starships[ownerId]
	
	// Set shot position equal to starship's tip position
	shot.x = ship.x + 15 * Math.cos(ship.rotation)
	shot.y = ship.y + 15 * Math.sin(ship.rotation)
	
	// Set shot velocity summing the starship speed and the shot ejection speed
	var vx = Math.cos(ship.rotation) * shot.getSpeed()
	var vy = Math.sin(ship.rotation) * shot.getSpeed()
	var v = new Velocity(vx + ship.getVX(), vy + ship.getVY())
	shot.velocity = v
	
	shot.lastRenderTime = System.currentTimeMillis()
	
	// Save initial position and velocity to User Variables and position to the SFS2X Proximity Manager system
	// As this is a new shot, clients will be notified of its existence in the proximity update event
	// The ID of the MMOItem in the Proximity Manager system is returned, so we can save it in the shot properties for later reference
	var id = addWeaponShot(shot.getModel(), shot.x, shot.y, shot.getVX(), shot.getVY())
	shot.setMMOItemId(id)
	
	// Add shot to simulation
	this.weaponShots[id] = shot
}

/**
 * Runs the simulation calculating the next position of each object on a frame basis.
 */
Game.prototype.run = function() 
{
	try
	{
		// Move weapon shots to next coordinates
		// Self-destruction is also checked
		for (var key in this.weaponShots)
		{
			var shot = this.weaponShots[key]
			
			// Check self-destruction
			if (shot.isSelfDestruct())
			{
				delete this.weaponShots[key]
				
				// Remove shot from Proximity Manager system and notify clients
				this.removeWeaponShot(shot)
			}
			else
			{
				// Calculate next coordinates
				this.renderWeaponShot(shot)
				
				// Save position and velocity to User Variables and position to the SFS2X Proximity Manager system
				this.saveWeaponShotPosition(shot)
			}
		}
		
		// Move starships to next coordinates
		// Check starships collisions with weapon shots in proximity

		for (var key in this.starships)
		{
			var ship = this.starships[key]
			if (ship == null)
				continue;

			// Calculate next coordinates
			this.renderStarship(ship)
			
			// Retrieve list of MMOItems in proximity to check the collision
			var shotIDs = getWeaponShotsList(ship.x, ship.y)
			
			var hit = false
			
			for (var i = 0; i < shotIDs.length; i++)
			{
				var shotID = shotIDs[i]
				var shot = this.weaponShots[shotID];
					
				if (shot == null)
					continue;
			
				// Check collision
				if (this.getDistance(ship, shot) <= shot.getHitRadius())
				{
					// Remove shot from simulation
					delete this.weaponShots[shotID]
					
					// Remove shot from Proximity Manager system and notify clients
					this.removeWeaponShot(shot)
					
					// Update starship trajectory
					var dirX = (ship.x > shot.x ? +1 : -1)
					var dirY = (ship.y > shot.y ? +1 : -1)
					ship.velocity.vx += dirX * shot.getHitForce()
					ship.velocity.vy += dirY * shot.getHitForce()
					
					hit = true
				}
			}
			
			// Save position and velocity to User Variables and position to the SFS2X Proximity Manager system
			// If trajectory changed due to external forces (weapon shot), then update clients too
			this.saveStarshipPosition(ship, hit);
		}

	}

	catch (ex)
	{
		// In case of exceptions this try-catch prevents the task to stop running
		trace("ERROR IN TASK:", ex)

		// Only for local debug
		ex.printStackTrace()
	}
}

/**
 * Saves starship's (A) position, velocity and more to User Variables and (B) position to SFS2X Proximity Manager system.
 * Read the Extension's method for more informations.
 */
Game.prototype.saveStarshipPosition = function(ss, doUpdateClients)
{
	setStarshipState(ss.getOwnerId(), ss.x, ss.y, ss.getVX(), ss.getVY(), ss.rotation, ss.thrust, ss.rotatingDir, doUpdateClients)
}

/**
 * Saves starship's (A) position and velocity to User Variables and (B) position to SFS2X Proximity Manager system.
 * Read the Extension's method for more informations.
 */
Game.prototype.saveWeaponShotPosition = function(ws)
{
	setWeaponShotPosition(ws.getMMOItemId(), ws.x, ws.y, ws.getVX(), ws.getVY())
}

/**
 * Removes weapon shot in case of self-destruction or collision.
 * NOTE: the shot is not removed from the weaponShots list because we use an iterator to do it,
 * where the self-destruction/collision is detected.
 */
Game.prototype.removeWeaponShot = function(shot)
{
	// Remove shot from Proximity Manager system
	removeWeaponShot(shot.getMMOItemId())
	
	// Send message to all clients in proximity to remove the shot from the display list
	notifyWeaponShotExplosion(shot.getMMOItemId(), shot.x, shot.y)
}

Game.prototype.renderStarship = function(ship)
{
	var now = System.currentTimeMillis()
	var elapsed = now - ship.lastRenderTime

	for (var i = 0; i < elapsed; i++)
	{
		// Ship rotation
		ship.rotation += ship.rotatingDir * ship.getRotationSpeed()
		
		// Thruster force
		if (ship.thrust)
		{
			ship.velocity.vx += Math.cos(ship.rotation) * ship.getThrustAcceleration()
			ship.velocity.vy += Math.sin(ship.rotation) * ship.getThrustAcceleration()
		}
		
		// Limit speed
		ship.velocity.limitSpeed(ship.getMaxSpeed())
		
		// Update ship position based on its velocity
		ship.x += ship.velocity.vx;
		ship.y += ship.velocity.vy;
	}
	
	ship.lastRenderTime = now
}

Game.prototype.renderWeaponShot = function(shot)
{
	var now = System.currentTimeMillis()
	var elapsed = now - shot.lastRenderTime
	
	for (var i = 0; i < elapsed; i++)
	{
		// Update shot position based on its velocity
		shot.x += shot.velocity.vx;
		shot.y += shot.velocity.vy;
	}
	
	shot.lastRenderTime = now
}

Game.prototype.getDistance = function(simItem1, simItem2)
{
	var dist_x = simItem1.x - simItem2.x
	var dist_y = simItem1.y - simItem2.y
	
	return Math.sqrt(Math.pow(dist_x, 2) + Math.pow(dist_y, 2))
}








