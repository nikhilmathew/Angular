/**
 * Base class for starship and solar system selection layers.
 */
var BaseMenuLayer = cc.Layer.extend(
{
	LABEL_OFFSET: 30,
	MAX_MENU_WIDTH: 600,

	menuItems: null,

	ctor: function()
	{
		this._super();

		return true;
	}
});