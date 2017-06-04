package sfs2x.extensions.games.simplemmo2;

import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import sfs2x.extensions.games.simplemmo2.util.HitmapProcessor;

import com.smartfoxserver.v2.SmartFoxServer;
import com.smartfoxserver.v2.api.ISFSMMOApi;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.entities.variables.RoomVariable;
import com.smartfoxserver.v2.entities.variables.SFSRoomVariable;
import com.smartfoxserver.v2.extensions.SFSExtension;
import com.smartfoxserver.v2.mmo.IMMOItemVariable;
import com.smartfoxserver.v2.mmo.MMOItem;
import com.smartfoxserver.v2.mmo.MMOItemVariable;
import com.smartfoxserver.v2.mmo.MMORoom;
import com.smartfoxserver.v2.mmo.Vec3D;

/**
 * This Room Extension for the SimpleMMOWorld 2 example for SmartFoxServer 2X is in charge of loading the Room's external "hitmap",
 * a colored representation of the actual 2D background on which the avatars move and which defines the walkable areas, the static
 * items (like trees) and map access point(s).
 * Also, the Extension spawns a new MMOItem each time a player locates and clicks the previous one while walking around on the map,
 * keeping track of the number or items clicked by each player.
 */
public class SimpleMMOExtension extends SFSExtension
{
	private final int MAP_WIDTH = 1400;
	private final int MAP_HEIGHT = 740;
	
	private SmartFoxServer sfs;
	private ISFSMMOApi mmoApi;
	private MMORoom room;
	
	private HitmapProcessor hitmapProcessor;
	
	@Override
	public void init()
	{
		// Get a reference to the current MMORoom
		room = (MMORoom) this.getParentRoom();
		
		// Get a reference to the SmartFoxServer instance
		sfs = SmartFoxServer.getInstance();
		
		// Get a reference to the MMO dedicated API
		mmoApi = sfs.getAPIManager().getMMOApi();
		
		// Register handler for "barrelClick" client requests
		// (the Extension request sent by the client when the player clicks an MMOItem, represented by a barrel)
		addRequestHandler("barrelClick", ItemClickRequestHandler.class);
		
		try
		{
			// Initialize hitmap processor
			hitmapProcessor = new HitmapProcessor(MAP_WIDTH, MAP_HEIGHT, this.getCurrentFolder());
			
			// Retrieve the MMORoom's setup data from the hitmap
			// The returned data contains the static items to be rendered on the map (trees/bushes), the access points coordinates and the hitmap itself
			ISFSObject mapSetupData = hitmapProcessor.setup(this.getParentRoom().getName());
			
			// Setup data is split into multiple Room Variables:
			// - we save map items list in a global Room Variable, so it is sent to the the client together with the Rooms list upon login
			//   (by means of a global variable we can use the data to draw the minimap Room selector on the client)
			// - access points coordinates and hitmap are saved in a non-global Room Variable, so they are sent to client upon login only;
			//   we need to use an additional SFSObject because Room Variables don't accept byte arrays (for the hitmap)
			List<RoomVariable> varList = new ArrayList<RoomVariable>();
			
			varList.add(new SFSRoomVariable("mapItems", mapSetupData.getSFSObject("mapItems"), true, true, true));
			
			ISFSObject container = new SFSObject();
			container.putByteArray("hitmap", mapSetupData.getByteArray("hitmap"));
			container.putIntArray("accessPoints", mapSetupData.getIntArray("accessPoints"));
			varList.add(new SFSRoomVariable("mapData", container, true, true, false));
			
			// As the MMORoom to which this Extension is attached is created statically at server startup, we inhibit the Room Variables
			// update event dispatching because the server is not yet ready to do it (we would need to wait for the SERVER_READY event)
			sfsApi.setRoomVariables(null, getParentRoom(), varList, false, false, false);
			
			// Spawn the first MMOItem in a random (valid) position
			spawnMMOItem();
			
			trace("SimpleMMOWorld 2 Extension initialized");
		}
		catch (IOException e)
		{
			e.printStackTrace();
		}
	}

	@Override
	public void destroy()
	{
		super.destroy();
	}
	
	/**
	 * Create a new MMOItem at a random valid position on the map.
	 * 
	 * MMOItems in this example are barrels placed one at a time on the map: players must find and click them to open them.
 	 * We use an MMOItem Variable to track the opened/closed status, without removing the item from the map.
	 */
	public void spawnMMOItem()
	{
		// Create MMOItem Variable for the opened/closed status (initially set to false=closed)
	    List<IMMOItemVariable> variables = new LinkedList<IMMOItemVariable>();
	    variables.add(new MMOItemVariable("open", false));
	     
	    // Create the MMOItem
	    MMOItem barrel = new MMOItem(variables);
	    
	    // Get a random, valid position on the map
	    Vec3D position = hitmapProcessor.getRandomWalkablePosition();
	     
	    // Deploy the MMOItem in the MMORoom's map
	    mmoApi.setMMOItemPosition(barrel, position, room);
	    
	    // Log some info
	    trace("New MMOItem spawned at " + position);
	}
}
