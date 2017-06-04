(function (window) {
    function Avatar(userId, userName, mainSpritesheet, balloonSpritesheet)
    {
        var nextX;
        var nextY;
        var lastUpdateX;
        var lastUpdateY;

        this.initialize(userId, userName, mainSpritesheet, balloonSpritesheet);
    }
     
    Avatar.prototype = new createjs.Container();
    Avatar.prototype.Container_initialize = Avatar.prototype.initialize;
    Avatar.prototype.Container_tick = Avatar.prototype._tick; 
     
    Avatar.prototype.initialize = function (userId, userName, mainSpritesheet, balloonSpritesheet)
    {
        this.Container_initialize();

        // Set container name to unique user id, to retrieve it later on the map
        this.name = userId;

        // Create shadow
        var shadow = new createjs.Shape();
        shadow.graphics.beginFill("#333333").drawEllipse(-12, -8, 24, 12);
        shadow.alpha = 0.2;
        this.addChild(shadow);

        // Create main sprite
        this._sprite = new createjs.Sprite(mainSpritesheet);
        this.addChild(this._sprite);

        // Show user name at the feet of the avatar
        var text = new createjs.Text(userName);
        text.textAlign ="center";
        text.y = 5;
        text.x = 0;
        this.addChild(text);

        // Create balloon
        this._createBalloon(balloonSpritesheet);

        // Setup messages queue
        this._msgQueue = [];

        // Inhibit mouse events
        this.mouseEnabled = false;
        this.mouseChildren = false;

        //console.log("Avatar initialized (" + userId + ", " + userName + ")");
    }

    Avatar.prototype.destroy = function ()
    {
        // TODO
    }

    /**
     * Makes the avatar execute the proper action (stand or walk) in the proper direction.
     */
    Avatar.prototype.setGraphics = function (action, dir)
    {
        if (action == "stand")
            this._sprite.gotoAndStop("avatar" + dir);
        else if (action == "walk")
            this._sprite.gotoAndPlay("avatar" + dir);
    }

    /**
     * Shows the Area of Interest rectangle.
     */
    Avatar.prototype.setAOIFrame = function (width, height)
    {
        var graphic = new createjs.Graphics();
        graphic.setStrokeStyle(0.5).beginStroke("#CC0000");
        graphic.rect(-width/2, -height/2, width, height);
        graphic.endStroke();
        this.addChild(new createjs.Shape(graphic));
    }

    /**
     * Makes the avatar's chat balloon show a message.
     */
    Avatar.prototype.showChatMessage = function (message)
    {
        var now = new Date();
        this._msgQueue.push({msg:message, time:now.getTime()});
        
        this._updateBalloon();
    }
     
    Avatar.prototype._tick = function ()
    {
        this.Container_tick();

        // Continuously check the balloon to make the messages disappear
        var msgObj = this._msgQueue[0];

        if (msgObj != null)
        {
            var now = new Date();
            if (msgObj.time + 4000 <= now)
            {
                this._msgQueue.shift();
                this._updateBalloon();
            }
        }
    }
     
    Avatar.prototype._createBalloon = function (balloonSpritesheet)
    {
        this._balloon = new createjs.Container();

        var top = new createjs.Sprite(balloonSpritesheet);
        top.gotoAndStop("balloon_top");
        top.name = "top";
        this._balloon.addChild(top);
        
        var middle = new createjs.Shape();
        middle.graphics.beginBitmapFill(createjs.SpriteSheetUtils.extractFrame(balloonSpritesheet, "balloon_middle"), "repeat-y");
        middle.graphics.rect(0,0,100,10);
        middle.graphics.endFill();
        middle.name = "middle";
        middle.y = top.getBounds().height;
        this._balloon.addChild(middle);
        
        var bottom = new createjs.Sprite(balloonSpritesheet);
        bottom.gotoAndStop("balloon_bottom");
        bottom.name = "bottom";
        this._balloon.addChild(bottom);

        var text = new createjs.Text("");
        text.name = "text";
        text.lineWidth = 94;
        text.x = 3;
        text.y = top.getBounds().height;
        this._balloon.addChild(text);
        
        this.addChild(this._balloon)
        this._balloon.regX = 45;
        this._balloon.visible = false;
    }

    Avatar.prototype._updateBalloon = function ()
    {
        if (this._msgQueue.length == 0)
        {
            this._balloon.visible = false;
        }
        else
        {
            var text = this._balloon.getChildByName("text");
            
            var str = "";
            for (var i = 0; i < this._msgQueue.length; i++)
            {
                if (i > 0)
                    str += "\n";

                str += this._msgQueue[i].msg;
                text.text = str;
            }

            var top = this._balloon.getChildByName("top");
            var middle = this._balloon.getChildByName("middle");
            var bottom = this._balloon.getChildByName("bottom");

            middle.scaleY = text.getBounds().height / 10;
            bottom.y = top.getBounds().height + text.getBounds().height;

            this._balloon.y = -(bottom.y + bottom.getBounds().height) - this._sprite.getBounds().height + 10;
            this._balloon.visible = true;
        }
    }

    window.Avatar = Avatar;
} (window));