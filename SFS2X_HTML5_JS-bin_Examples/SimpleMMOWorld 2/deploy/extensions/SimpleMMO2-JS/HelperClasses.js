HitmapProcessor = function(mapWidth, mapHeight, rootFolder)
{
	this.HITMAPS_FOLDER = "assets/";
	this.MAP_TILE_SIZE = 10;
	
	this.mapWidth = mapWidth;
	this.mapHeight = mapHeight;
	this.rootFolder = rootFolder;
	this.mapName = null;
	this.hitmap = null;
};

HitmapProcessor.prototype.setup = function(mapName)
{
	// Normalized map name
	this.mapName = mapName.toLowerCase().replaceAll(" ", "-");
	
	// File name
	var fileName = this.rootFolder + this.HITMAPS_FOLDER + this.mapName + "-hitmap.png"; 
	
	// Load hitmap
	this.hitmap = javax.imageio.ImageIO.read(new java.io.File(fileName));
	
	// Retrieve static item types and coordinates
	// In order to do this, we divide the hitmap image into tiles
	// The hitmap must be drawn accordingly, coloring the tiles with the color corresponding to a static item type
	// (see StaticItems class)
	
	var availableItems = StaticItems.ItemsByColor;
	
	var cols = this.mapWidth / this.MAP_TILE_SIZE;
	var rows = this.mapHeight / this.MAP_TILE_SIZE;
	
	var mapItems = new SFSObject();
	var accessCoords = [];
	
	for (var r = 0; r < rows; r++)
	{
		for (var c = 0; c < cols; c++)
		{
			// Retrieve the color of the pixel in the center of the tile
			var valX = (c * this.MAP_TILE_SIZE) + (this.MAP_TILE_SIZE / 2);
			var valY = (r * this.MAP_TILE_SIZE) + (this.MAP_TILE_SIZE / 2);

			var color = this.getColor(valX, valY);
			var item = availableItems[color];

			// Convert values to integer because we want to transmit coordinates as an array of integers
			// (valX and valY are doubles due to the division by 2 above)
			var probeX = valX.intValue();
			var probeY = valY.intValue();
			
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
				
				var itemObj = mapItems.getSFSObject(item.id);
				itemObj.getIntArray("coords").add(probeX);
				itemObj.getIntArray("coords").add(probeY);
				
				// Save access point coordinates in a separate array too
				// (same approach taken above, but using a SFSArray)
				if (item.isAccess)
				{
					accessCoords.push(probeX);
					accessCoords.push(probeY);
				}
			}
		}
	}
	
	// Return object containing...
	var setupData = new SFSObject();
	
	// ...map items list
	setupData.putSFSObject("mapItems", mapItems);
	
	// ...access point coordinates
	setupData.putIntArray("accessPoints", accessCoords);
	
	// ...hitmap bytes
	var baos = new java.io.ByteArrayOutputStream();
	javax.imageio.ImageIO.write(this.hitmap, "png", baos);
	setupData.putByteArray("hitmap", baos.toByteArray());
	
	return setupData;
};

HitmapProcessor.prototype.getColor = function(x, y)
{
	return this.hitmap.getRGB(x, y) & 0x00FFFFFF;
};

HitmapProcessor.prototype.getRandomWalkablePosition = function()
{
	var pad = 20;
	var px;
	var py;
	
	do 
	{
		px = Math.floor(Math.random() * (this.mapWidth - pad*2)) + pad;
		py = Math.floor(Math.random() * (this.mapHeight - pad*2)) + pad;
	}
	while (!this.isWalkable(px,py));
	
	return Vectors.newVec3D(px, py, 0);
};

HitmapProcessor.prototype.isWalkable = function(x, y)
{
	// Transparent areas of the image and those covered by static items are considered non-walkable
	
	var availableItems = StaticItems.ItemsByColor;
	
	var color = this.getColor(x, y);
	var item = availableItems[color];
	
	return item == null && color != 0;
};


// ==========================================================================================

StaticItem = function(id, color, regX, regY, isAccess)
{
	this.id = id;
	this.color = color;
	this.regX = regX;
	this.regY = regY;
	this.isAccess = isAccess;
};

StaticItem.prototype.toSFSObject = function()
{
	var obj = new SFSObject();
	obj.putInt("rx", this.regX);
	obj.putInt("ry", this.regY);
	obj.putIntArray("coords", []);
	
	return obj;
};

var StaticItems = {};

StaticItems.BUSH1 = new StaticItem("bush1", 0x0020FF, 18, 25, false);
StaticItems.BUSH4 = new StaticItem("bush4", 0xFF6600, 20, 58, false);
StaticItems.TREE2 = new StaticItem("tree2", 0x44FF00, 72, 127, false);
StaticItems.TREE3 = new StaticItem("tree3", 0xFF0000, 21, 121, false);
StaticItems.TREE4 = new StaticItem("tree4", 0xFFDD00, 67, 125, false);
StaticItems.DOOR  = new StaticItem("door", 0xFFFFFF, 15, 68, true);

StaticItems.ItemsByColor = {};
StaticItems.ItemsByColor[StaticItems.BUSH1.color] = StaticItems.BUSH1;
StaticItems.ItemsByColor[StaticItems.BUSH4.color] = StaticItems.BUSH4;
StaticItems.ItemsByColor[StaticItems.TREE2.color] = StaticItems.TREE2;

StaticItems.ItemsByColor[StaticItems.TREE3.color] = StaticItems.TREE3;
StaticItems.ItemsByColor[StaticItems.TREE4.color] = StaticItems.TREE4;
StaticItems.ItemsByColor[StaticItems.DOOR.color] = StaticItems.DOOR;
