package sfs2x.extensions.games.simplemmo2;

import java.util.LinkedList;
import java.util.List;

import com.smartfoxserver.v2.SmartFoxServer;
import com.smartfoxserver.v2.annotations.Instantiation;
import com.smartfoxserver.v2.api.ISFSMMOApi;
import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.variables.SFSUserVariable;
import com.smartfoxserver.v2.entities.variables.UserVariable;
import com.smartfoxserver.v2.extensions.BaseClientRequestHandler;
import com.smartfoxserver.v2.mmo.BaseMMOItem;
import com.smartfoxserver.v2.mmo.IMMOItemVariable;
import com.smartfoxserver.v2.mmo.MMOItemVariable;
import com.smartfoxserver.v2.mmo.MMORoom;

@Instantiation
public class ItemClickRequestHandler extends BaseClientRequestHandler
{
	private static final String MMOITEMVAR_OPEN = "open";
	private static final String USERVAR_ITEM_COUNT = "cnt";
	
	@Override
	public void handleClientRequest(User sender, ISFSObject params)
	{
		SmartFoxServer sfs = SmartFoxServer.getInstance();
		ISFSMMOApi mmoApi = sfs.getAPIManager().getMMOApi();
		
		MMORoom room = (MMORoom) this.getParentExtension().getParentRoom();
		
		// Retrieve the clicked MMOItem
		int itemId = params.getInt("id");
		BaseMMOItem item = room.getMMOItemById(itemId);
		
		if (item != null)
		{
			IMMOItemVariable var = item.getVariable(MMOITEMVAR_OPEN);
			
			if (!var.getBoolValue())
			{
				// Update item status (set it to "opened")
				List<IMMOItemVariable> iVariables = new LinkedList<IMMOItemVariable>();
				iVariables.add(new MMOItemVariable(MMOITEMVAR_OPEN, true));
				
				mmoApi.setMMOItemVariables(item, iVariables);
				
				// Spawn a new item on the map
				((SimpleMMOExtension) this.getParentExtension()).spawnMMOItem();
				
				// Update player counter of clicked items using a dedicated User Variable
				int counter = (sender.getVariable(USERVAR_ITEM_COUNT) != null ? sender.getVariable(USERVAR_ITEM_COUNT).getIntValue() : 0) + 1;
				
				List<UserVariable> uVariables = new LinkedList<UserVariable>();
				uVariables.add(new SFSUserVariable(USERVAR_ITEM_COUNT, counter));
				
				getParentExtension().getApi().setUserVariables(sender, uVariables);
			}
		}
	}
}
