var MAP_WIDTH = 1400;
var MAP_HEIGHT = 740;

var hitmapProcessor;
var room;

var MMOITEMVAR_OPEN = "open";
var USERVAR_ITEM_COUNT = "cnt";

include("HelperClasses.js");

function init()
{
	// Get a reference to the current MMORoom
	room = getParentRoom();
		
	// Register handler for "barrelClick" client requests
	// (the Extension request sent by the client when the player clicks an MMOItem, represented by a barrel)
	addRequestHandler("barrelClick", onItemClickRequest);

	try
	{
		// Initialize hitmap processor
		hitmapProcessor = new HitmapProcessor(MAP_WIDTH, MAP_HEIGHT, getCurrentFolder());
		
		// Retrieve the MMORoom's setup data from the hitmap
		// The returned data contains the static items to be rendered on the map (trees/bushes), the access points coordinates and the hitmap itself
		var mapSetupData = hitmapProcessor.setup(getParentRoom().getName());
		
		// Setup data is split into multiple Room Variables:
		// - we save map items list in a global Room Variable, so it is sent to the the client together with the Rooms list upon login
		//   (by means of a global variable we can use the data to draw the minimap Room selector on the client)
		// - access points coordinates and hitmap are saved in a non-global Room Variable, so they are sent to client upon login only;
		//   we need to use an additional SFSObject because Room Variables don't accept byte arrays (for the hitmap)
		var varList = [];
		var rVar = new SFSRoomVariable("mapItems", mapSetupData.getSFSObject("mapItems"));
		rVar.setPrivate(true);
		rVar.setPersistent(true);
		rVar.setGlobal(true);
		
		varList.push(rVar);
		
		var container = new SFSObject();
		container.putByteArray("hitmap", mapSetupData.getByteArray("hitmap"));
		container.putIntArray("accessPoints", mapSetupData.getIntArray("accessPoints"));
		
		var rVar2 = new SFSRoomVariable("mapData", container);
		rVar2.setPrivate(true);
		rVar2.setPersistent(true);
		
		varList.push(rVar2);
		
		// As the MMORoom to which this Extension is attached is created statically at server startup, we inhibit the Room Variables
		// update event dispatching because the server is not yet ready to do it (we would need to wait for the SERVER_READY event)
		getApi().setRoomVariables(null, getParentRoom(), varList, false, false, false);
		
		// Spawn the first MMOItem in a random (valid) position
		spawnMMOItem();
		
		trace("SimpleMMOWorld 2 Extension initialized");
	}
	catch (ex)
	{
		ex.printStackTrace();
	}
}

function destroy()
{
	trace("SimpleMMOWorld 2 [DESTROY]");
}

function spawnMMOItem()
{
	// Create MMOItem Variable for the opened/closed status (initially set to false=closed)
    var variables = [];
    variables.push(new MMOItemVariable("open", false));
     
    // Create the MMOItem
    var barrel = new MMOItem(variables);
    
    // Get a random, valid position on the map
    var position = hitmapProcessor.getRandomWalkablePosition();
     
    // Deploy the MMOItem in the MMORoom's map
    getMMOApi().setMMOItemPosition(barrel, position, room);
    
    // Log some info
    trace("New MMOItem spawned at " + position);
}

function onItemClickRequest(params, sender)
{
	var room = getParentRoom();

	// Retrieve the clicked MMOItem
	var itemId = params.getInt("id");
	var item = room.getMMOItemById(itemId);

	if (item != null)
	{
		var itemVar = item.getVariable(MMOITEMVAR_OPEN);
	
		if (!itemVar.getBoolValue())
		{
			// Update item status (set it to "opened")
			var iVariables = [];
			iVariables.push(new MMOItemVariable(MMOITEMVAR_OPEN, true));
		
			getMMOApi().setMMOItemVariables(item, iVariables, true);
		
			// Spawn a new item on the map
			spawnMMOItem();
		
			// Update player counter of clicked items using a dedicated User Variable
			var counter = (sender.getVariable(USERVAR_ITEM_COUNT) != null ? sender.getVariable(USERVAR_ITEM_COUNT).getIntValue() : 0) + 1;
		
			var uVariables = [];
			uVariables.push(new SFSUserVariable(USERVAR_ITEM_COUNT, counter,  com.smartfoxserver.v2.entities.variables.VariableType.INT));
		
			getApi().setUserVariables(sender, uVariables, true);
		}
	}
}