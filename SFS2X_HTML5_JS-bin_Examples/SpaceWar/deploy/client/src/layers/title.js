var TitleLayer = cc.Layer.extend(
{
	ctor: function()
	{
		this._super();

		var size = cc.director.getWinSize();

		var titleSpriteFrame = cc.spriteFrameCache.getSpriteFrame("title.png");
		var titleSprite = new cc.Sprite(titleSpriteFrame);

		titleSprite.x = size.width / 2;
		titleSprite.y = size.height - 100 - titleSprite.height / 2;
		this.addChild(titleSprite);

		return true;
	}
});