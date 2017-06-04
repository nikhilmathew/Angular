package sfs2x.extensions.games.spacewar.core;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.exceptions.ExceptionMessageComposer;

import sfs2x.extensions.games.spacewar.SpaceWarRoomExtension;
import sfs2x.extensions.games.spacewar.entities.Velocity;

public class Game implements Runnable
{
	private SpaceWarRoomExtension ext;
	private Map<Integer, Starship> starships;
	private Map<Integer, WeaponShot> weaponShots;

	public Game(SpaceWarRoomExtension ext)
	{
		this.ext = ext;
		
		// Create map for Starship objects
		starships = new ConcurrentHashMap<Integer,Starship>();
		
		// Create map for WeaponShot objects
		weaponShots = new ConcurrentHashMap<Integer, WeaponShot>();
	}
	
	/**
	 * Creates starship on Extension request (user entered the MMORoom).
	 * User ID is used to identify it.
	 */
	public void createStarship(int ownerId, ISFSObject settings)
	{
		Starship ship = new Starship(ownerId, settings);
		
		// Set starship random position and rotation angle
		// position is within the client viewport size, so that all users join the same space portion and see each other
		ship.x = Math.random() * 1000;
		ship.y = Math.random() * 800;
		ship.rotation = (int) Math.round(Math.random() * 360 * Math.PI / 180);
		
		ship.lastRenderTime = System.currentTimeMillis();
		
		// Add starship to simulation
		starships.put(ownerId, ship);
		
		// Save initial position and velocity to User Variables and position to the SFS2X Proximity Manager system
		// As this is a new starship and the User Variables are set before the position is set in the Proximity Manager system,
		// only the owner user will receive the User Variables update event
		saveStarshipPosition(ship, true);
	}
	
	/**
	 * Removes starship on Extension request (user left MMORoom).
	 */
	public void removeStarship(int ownerId)
	{
		starships.remove(ownerId);
	}
	
	/**
	 * Makes starship start or stop rotating.
	 * A command is sent to clients using a dedicated User Variable, so that it is received only by users in proximity.
	 */
	public void rotateStarship(int ownerId, int direction)
	{
		Starship ship = starships.get(ownerId);
		
		// Set rotating
		ship.rotatingDir = direction;
		
		// On rotation start, set dedicated User Variable
		if (direction != 0)
			ext.setStarshipRotating(ownerId, direction);
		
		// On stop send full position update to clients
		// This includes the current rotation direction (0)
		else
			saveStarshipPosition(ship, true);
	}
	
	/**
	 * Activates/deactivates starship thruster.
	 * A command is sent to clients using a dedicated User Variable, so that it is received only by users in proximity.
	 */
	public void thrustStarship(int ownerId, boolean activate)
	{
		Starship ship = starships.get(ownerId);
		
		// Set rotating
		ship.thrust = activate;
		
		// Set User Variable within the position update event
		saveStarshipPosition(ship, true);
	}
	
	/**
	 * Creates a weapon shot.
	 */
	public void createWeaponShot(int ownerId, ISFSObject settings)
	{
		WeaponShot shot = new WeaponShot(ownerId, settings);
		
		Starship ship = starships.get(ownerId);
		
		// Set shot position equal to starship's tip position
		shot.x = ship.x + 15 * Math.cos(ship.rotation);
		shot.y = ship.y + 15 * Math.sin(ship.rotation);
		
		// Set shot velocity summing the starship speed and the shot ejection speed
		double vx = Math.cos(ship.rotation) * shot.getSpeed();
		double vy = Math.sin(ship.rotation) * shot.getSpeed();
		Velocity v = new Velocity(vx + ship.getVX(), vy + ship.getVY());
		shot.velocity = v;
		
		shot.lastRenderTime = System.currentTimeMillis();
		
		// Save initial position and velocity to User Variables and position to the SFS2X Proximity Manager system
		// As this is a new shot, clients will be notified of its existence in the proximity update event
		// The ID of the MMOItem in the Proximity Manager system is returned, so we can save it in the shot properties for later reference
		int id = ext.addWeaponShot(shot.getModel(), shot.x, shot.y, shot.getVX(), shot.getVY());
		shot.setMMOItemId(id);
		
		// Add shot to simulation
		weaponShots.put(id, shot);
	}

	/**
	 * Runs the simulation calculating the next position of each object on a frame basis.
	 */
	@Override
	public void run()
	{
		try
		{
			// Move weapon shots to next coordinates
			// Self-destruction is also checked
			for (Iterator<Map.Entry<Integer, WeaponShot>> it = weaponShots.entrySet().iterator(); it.hasNext();)
			{
				WeaponShot shot = it.next().getValue();
				
				// Check self-destruction
				if (shot.isSelfDestruct())
				{
					// Remove shot from simulation
					it.remove();
					
					// Remove shot from Proximity Manager system and notify clients
					removeWeaponShot(shot);
				}
				else
				{
					// Calculate next coordinates
					renderWeaponShot(shot);
					
					// Save position and velocity to User Variables and position to the SFS2X Proximity Manager system
					saveWeaponShotPosition(shot);
				}
			}
			
			// Move starships to next coordinates
			// Check starships collisions with weapon shots in proximity
			for (Starship ship : starships.values())
			{
				// Calculate next coordinates
				renderStarship(ship);
				
				// Retrieve list of MMOItems in proximity to check the collision
				List<Integer> shotIDs = ext.getWeaponShotsList(ship.x, ship.y);
				
				boolean hit = false;
				
				for (int i = 0; i < shotIDs.size(); i++)
				{
					int shotID = shotIDs.get(i);
					WeaponShot shot = weaponShots.get(shotID);
					
					if (shot == null)
						continue;
					
					// Check collision
					if (getDistance(ship, shot) <= shot.getHitRadius())
					{
						// Remove shot from simulation
						weaponShots.remove(shotID);
						
						// Remove shot from Proximity Manager system and notify clients
						removeWeaponShot(shot);
						
						// Update starship trajectory
						int dirX = (ship.x > shot.x ? +1 : -1);
						int dirY = (ship.y > shot.y ? +1 : -1);
						ship.velocity.vx += dirX * shot.getHitForce();
						ship.velocity.vy += dirY * shot.getHitForce();
						
						hit = true;
					}
				}
				
				// Save position and velocity to User Variables and position to the SFS2X Proximity Manager system
				// If trajectory changed due to external forces (weapon shot), then update clients too
				saveStarshipPosition(ship, hit);
			}
			
		}
		catch (Exception e)
		{
			// In case of exceptions this try-catch prevents the task to stop running
			ExceptionMessageComposer emc = new ExceptionMessageComposer(e);
			ext.trace(emc.toString());
		}
	}
	
	/**
	 * Saves starship's (A) position, velocity and more to User Variables and (B) position to SFS2X Proximity Manager system.
	 * Read the Extension's method for more informations.
	 */
	private void saveStarshipPosition(Starship ss, boolean doUpdateClients)
	{
		ext.setStarshipState(ss.getOwnerId(), ss.x, ss.y, ss.getVX(), ss.getVY(), ss.rotation, ss.thrust, ss.rotatingDir, doUpdateClients);
	}
	
	/**
	 * Saves starship's (A) position and velocity to User Variables and (B) position to SFS2X Proximity Manager system.
	 * Read the Extension's method for more informations.
	 */
	private void saveWeaponShotPosition(WeaponShot ws)
	{
		ext.setWeaponShotPosition(ws.getMMOItemId(), ws.x, ws.y, ws.getVX(), ws.getVY());
	}
	
	/**
	 * Removes weapon shot in case of self-destruction or collision.
	 * NOTE: the shot is not removed from the weaponShots list because we use an iterator to do it,
	 * where the self-destruction/collision is detected.
	 */
	private void removeWeaponShot(WeaponShot shot)
	{
		// Remove shot from Proximity Manager system
		ext.removeWeaponShot(shot.getMMOItemId());
		
		// Send message to all clients in proximity to remove the shot from the display list
		ext.notifyWeaponShotExplosion(shot.getMMOItemId(), shot.x, shot.y);
	}
	
	private void renderStarship(Starship ship)
	{
		long now = System.currentTimeMillis();
		long elapsed = now - ship.lastRenderTime;
		
		for (long i = 0; i < elapsed; i++)
		{
			// Ship rotation
			ship.rotation += ship.rotatingDir * ship.getRotationSpeed();
			
			// Thruster force
			if (ship.thrust)
			{
				ship.velocity.vx += Math.cos(ship.rotation) * ship.getThrustAcceleration();
				ship.velocity.vy += Math.sin(ship.rotation) * ship.getThrustAcceleration();
			}
			
			// Limit speed
			ship.velocity.limitSpeed(ship.getMaxSpeed());
			
			// Update ship position based on its velocity
			ship.x += ship.velocity.vx;
			ship.y += ship.velocity.vy;
		}
		
		ship.lastRenderTime = now;
	}
	
	private void renderWeaponShot(WeaponShot shot)
	{
		long now = System.currentTimeMillis();
		long elapsed = now - shot.lastRenderTime;
		
		for (long i = 0; i < elapsed; i++)
		{
			// Update shot position based on its velocity
			shot.x += shot.velocity.vx;
			shot.y += shot.velocity.vy;
		}
		
		shot.lastRenderTime = now;
	}
	
	private double getDistance(GameItem simItem1, GameItem simItem2)
	{
		double dist_x = simItem1.x - simItem2.x;
		double dist_y = simItem1.y - simItem2.y;
		
		return Math.sqrt(Math.pow(dist_x, 2) + Math.pow(dist_y, 2));
	}
}
