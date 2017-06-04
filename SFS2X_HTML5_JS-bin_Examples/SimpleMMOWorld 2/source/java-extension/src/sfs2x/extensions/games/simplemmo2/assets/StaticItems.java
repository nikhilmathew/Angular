package sfs2x.extensions.games.simplemmo2.assets;

import java.util.HashMap;

public class StaticItems
{
	private static final StaticItem BUSH1 = new StaticItem("bush1", 0x0020FF, 18, 25, false);
	private static final StaticItem BUSH4 = new StaticItem("bush4", 0xFF6600, 20, 58, false);
	private static final StaticItem TREE2 = new StaticItem("tree2", 0x44FF00, 72, 127, false);
	private static final StaticItem TREE3 = new StaticItem("tree3", 0xFF0000, 21, 121, false);
	private static final StaticItem TREE4 = new StaticItem("tree4", 0xFFDD00, 67, 125, false);
	private static final StaticItem DOOR = new StaticItem("door", 0xFFFFFF, 15, 68, true);
	
	public static HashMap<Integer,StaticItem> getItemsByColor()
	{
		HashMap<Integer,StaticItem> itemsByColor = new HashMap<Integer,StaticItem>();
		
		itemsByColor.put(BUSH1.color, BUSH1);
		itemsByColor.put(BUSH4.color, BUSH4);
		itemsByColor.put(TREE2.color, TREE2);
		itemsByColor.put(TREE3.color, TREE3);
		itemsByColor.put(TREE4.color, TREE4);
		itemsByColor.put(DOOR.color, DOOR);
		
		return itemsByColor;
	}
}
