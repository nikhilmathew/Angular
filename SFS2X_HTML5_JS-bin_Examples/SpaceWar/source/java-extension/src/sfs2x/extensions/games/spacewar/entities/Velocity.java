package sfs2x.extensions.games.spacewar.entities;

public class Velocity
{
	// Speed values expressed in pixels/millis
	// Direction expressed in radians
	
	public double vx = 0;
	public double vy = 0;
	
	public Velocity(double x, double y)
	{
		this.vx = x;
		this.vy = y;
	}
	
	public double getSpeed()
	{
		return Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));
	}
	
	public double getDirection()
	{
		return (Math.atan2(vy, vx));
	}
	
	public void limitSpeed(double maxSpeed)
	{
		if (getSpeed() > maxSpeed)
		{
			double dir = getDirection();
			
			vx = Math.cos(dir) * maxSpeed;
			vy = Math.sin(dir) * maxSpeed;
		}
	}
	
	public String toComponentsString()
	{
		return "(" + vx + "," + vy + ")";
	}
	
	public String toVectorString()
	{
		return "[" + getSpeed() + "," + getDirection() + " rad]";
	}
}
