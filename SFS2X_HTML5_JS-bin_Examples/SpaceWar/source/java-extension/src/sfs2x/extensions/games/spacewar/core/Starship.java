package sfs2x.extensions.games.spacewar.core;

import com.smartfoxserver.v2.entities.data.ISFSObject;


public class Starship extends GameItem
{
	public double rotation;		// Current rotation angle (radians)
	public int rotatingDir;		// Set to -1 if ship is currently rotating counterclockwise, +1 if clockwise and 0 if not rotating
	public boolean thrust;
	
	public Starship(int ownerId, ISFSObject settings)
	{
		super(ownerId, settings);
	}
	
	public double getMaxSpeed()
	{
		double setting = (double) settings.getInt("maxSpeed");
		
		// Speed is converted from pixels/sec to pixels/ms
		return setting / 1000;
	}
	
	public double getRotationSpeed()
	{
		double setting = (double) settings.getInt("rotationSpeed");
		
		// Rotation speed is converted from degrees/sec to radians/ms
		return (setting * Math.PI / 180) / 1000;
	}
	
	public double getThrustAcceleration()
	{
		double setting = (double) settings.getInt("thrustAccel");
		
		// Thrust accceleration is converted from pixels/sec2 to pixels/ms2
		return setting / 1000000;
	}
}
