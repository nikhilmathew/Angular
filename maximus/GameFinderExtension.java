package co.sports.unity.maximus;

import com.smartfoxserver.v2.entities.Zone;
import com.smartfoxserver.v2.extensions.SFSExtension;

/**
 * 
 * GameFinderExtension class is a zone level extension class.
 * It must be applied on "SportsUnity" zone which is the default zone for MAXIMUS players.
 * It handles the Player's Random Game Request using {@link GameRequestHandler} class.
 */
public class GameFinderExtension extends SFSExtension {

	private final String GAME_REQUEST_ID = "g";

	@Override
	public void init() {

		addRequestHandler(GAME_REQUEST_ID, GameRequestHandler.class);

	}

	Zone getGameZone() {
		return this.getParentZone();
	}

}
