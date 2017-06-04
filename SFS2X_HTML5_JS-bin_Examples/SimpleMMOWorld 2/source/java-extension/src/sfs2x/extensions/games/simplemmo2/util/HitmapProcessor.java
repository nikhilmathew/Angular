package sfs2x.extensions.games.simplemmo2.util;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.imageio.ImageIO;

import sfs2x.extensions.games.simplemmo2.assets.StaticItem;
import sfs2x.extensions.games.simplemmo2.assets.StaticItems;

import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.mmo.Vec3D;

public class HitmapProcessor
{
	private final String HITMAPS_FOLDER = "assets/";
	private final int MAP_TILE_SIZE = 10;
	
	private int mapWidth;
	private int mapHeight;
	private String rootFolder;
	private String mapName;
	private BufferedImage hitmap;
	
	public HitmapProcessor(int mapWidth, int mapHeight, String rootFolder)
	{
		this.mapWidth = mapWidth;
		this.mapHeight = mapHeight;
		this.rootFolder = rootFolder;
	}

	public ISFSObject setup(String mapName) throws IOException
	{
		// Normalized map name
		this.mapName = mapName.toLowerCase().replace(" ", "-");
		
		// File name
		String fileName = rootFolder + HITMAPS_FOLDER + this.mapName + "-hitmap.png";
		
		// Load hitmap
		hitmap = ImageIO.read(new File(fileName));
		
		// Retrieve static item types and coordinates
		// In order to do this, we divide the hitmap image into tiles
		// The hitmap must be drawn accordingly, coloring the tiles with the color corresponding to a static item type
		// (see StaticItems class)
		
		HashMap<Integer,StaticItem> availableItems = StaticItems.getItemsByColor();
		
		int cols = mapWidth / MAP_TILE_SIZE;
		int rows = mapHeight / MAP_TILE_SIZE;
		
		ISFSObject mapItems = new SFSObject();
		List<Integer> accessCoords = new ArrayList<Integer>();
		
		for (int r = 0; r < rows; r++)
		{
			for (int c = 0; c < cols; c++)
			{
				// Retrieve the color of the pixel in the center of the tile
				int probeX = (c * MAP_TILE_SIZE) + (MAP_TILE_SIZE / 2);
				int probeY = (r * MAP_TILE_SIZE) + (MAP_TILE_SIZE / 2);
				
				int color = getColor(probeX, probeY);
				StaticItem item = availableItems.get(color);
				
				// If an item is found, add it to the list of map items
				if (item != null)
				{
					if (!mapItems.containsKey(item.id))
						mapItems.putSFSObject(item.id, item.toSFSObject());
					
					// Add item instance coordinates in a single int array, like this:
					//
					//   A   B   C   D
					//  _|_ _|_ _|_ _|_
					// [x y x y x y x y ...]
					
					ISFSObject itemObj = mapItems.getSFSObject(item.id);
					itemObj.getIntArray("coords").add(probeX);
					itemObj.getIntArray("coords").add(probeY);
					
					// Save access point coordinates in a separate array too
					// (same approach taken above, but using a SFSArray)
					if (item.isAccess)
					{
						accessCoords.add(probeX);
						accessCoords.add(probeY);
					}
				}
			}
		}
		
		// Return object containing...
		ISFSObject setupData = new SFSObject();
		
		// ...map items list
		setupData.putSFSObject("mapItems", mapItems);
		
		// ...access point coordinates
		setupData.putIntArray("accessPoints", accessCoords);
		
		// ...hitmap bytes
		ByteArrayOutputStream baos=new ByteArrayOutputStream();
		ImageIO.write(hitmap, "png", baos);
		setupData.putByteArray("hitmap", baos.toByteArray());
		
		return setupData;
	}
	
	public Vec3D getRandomWalkablePosition()
	{
		int pad = 20;
		int px;
		int py;
		
		do {
			px = (int) Math.floor(Math.random() * (mapWidth - pad*2)) + pad;
			py = (int) Math.floor(Math.random() * (mapHeight - pad*2)) + pad;
		}
		while (!isWalkable(px,py));
		
		return new Vec3D(px,py,0);
	}
	
	private boolean isWalkable(int x, int y)
	{
		// Transparent areas of the image and those covered by static items are considered non-walkable
		
		HashMap<Integer,StaticItem> availableItems = StaticItems.getItemsByColor();
		
		int color = getColor(x, y);
		StaticItem item = availableItems.get(color);
		
		return item == null && color != 0;
	}
	
	private int getColor(int x, int y)
	{
		return hitmap.getRGB(x, y) & 0x00FFFFFF;
	}
}
