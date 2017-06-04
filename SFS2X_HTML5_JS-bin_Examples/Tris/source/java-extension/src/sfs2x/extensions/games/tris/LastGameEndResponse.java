package sfs2x.extensions.games.tris;

import com.smartfoxserver.v2.entities.data.ISFSObject;

public class LastGameEndResponse
{
	private final ISFSObject params;
	private final String cmd;
	
	public LastGameEndResponse(String cmd, ISFSObject params)
    {
	    this.params = params;
	    this.cmd = cmd;
    }
	
	public String getCmd()
    {
	    return cmd;
    }
	
	public ISFSObject getParams()
    {
	    return params;
    }
}
