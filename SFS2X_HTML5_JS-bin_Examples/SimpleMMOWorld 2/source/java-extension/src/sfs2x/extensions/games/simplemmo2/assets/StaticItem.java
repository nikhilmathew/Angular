package sfs2x.extensions.games.simplemmo2.assets;

import java.util.ArrayList;

import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;

public class StaticItem
{
	public String id;
	public int color;
	public int regX;
	public int regY;
	public boolean isAccess;
	
	public StaticItem(String id, int color, int regX, int regY, boolean isAccess)
	{
		this.id = id;
		this.color = color;
		this.regX = regX;
		this.regY = regY;
		this.isAccess = isAccess;
	}
	
	public ISFSObject toSFSObject()
	{
		ISFSObject obj = new SFSObject();
		obj.putInt("rx", regX);
		obj.putInt("ry", regY);
		obj.putIntArray("coords", new ArrayList<Integer>());
		
		return obj;
	}
}
