package sfs2x.extensions.games.tris;

public enum Tile
{
	EMPTY(0),
	GREEN(1),
	RED(2);
	
	private Tile(int id)
    {
		this.id = id;
    }
	
	private int id;
	
	public int getId()
    {
	    return id;
    }
	
}
