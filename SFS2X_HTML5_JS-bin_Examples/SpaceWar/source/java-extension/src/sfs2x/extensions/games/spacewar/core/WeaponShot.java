package sfs2x.extensions.games.spacewar.core;

import com.smartfoxserver.v2.entities.data.ISFSObject;

public class WeaponShot extends GameItem
{
	private long selfDestructTime = 0;
	private int mmoItemId = -1;
	
	public WeaponShot(int ownerId, ISFSObject settings)
	{
		super(ownerId, settings);
		
		if (getDuration() > 0)
			selfDestructTime = System.currentTimeMillis() + getDuration() * 1000;
	}

	public void setMMOItemId(int mmoItemId)
	{
		if (this.mmoItemId == -1)
			this.mmoItemId = mmoItemId;
	}

	public int getMMOItemId()
	{
		return mmoItemId;
	}
	
	public double getSpeed()
	{
		double setting = (double) settings.getInt("speed");
		
		// Speed is converted from pixels/sec to pixels/ms
		return setting / 1000;
	}
	
	public int getHitRadius()
	{
		return settings.getInt("hitRadius");
	}
	
	public double getHitForce()
	{
		double setting = (double) settings.getInt("hitForce");
		
		// Speed is converted from pixels/sec to pixels/ms
		return setting / 1000;
	}
	
	public boolean isSelfDestruct()
	{
		if (selfDestructTime > 0)
			return (System.currentTimeMillis() >= selfDestructTime);
		
		return false;
	}
	
	private int getDuration()
	{
		return settings.getInt("duration");
	}
}
