/*
jQWidgets v2.5.0 (2012-Oct-17)
Copyright (c) 2011-2012 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxNavigationBar","",{});a.extend(a.jqx._jqxNavigationBar.prototype,{defineInstance:function(){this.expandAnimationDuration=350,this.collapseAnimationDuration=350,this.disabled=false;this.animationType="slide";this.toggleMode="click";this.expandMode="single";this.sizeMode="auto";this.showArrow=true;this.arrowPosition="right";this.expandedIndexes=undefined;this.expandedIndex=-1;this.height="auto";this.width="auto";this._expandersList=[];this._toggleModesBackup=[];this._expandedIndexes=undefined;this._maxHeight=0;this._currentExpandedItem=null;this._events=["expandingItem","expandedItem","collapsingItem","collapsedItem"];this._invalidArgumentExceptions={invalidStructure:"Invalid structure of the navigation bar!",invalidExpandAnimationDuration:"Expand animation duration is invalid!",invalidCollapseAnimationDuration:"Collapse animation duration is invalid!",invalidAnimationType:"The animation type is invalid!",invalidToggleMode:"The toggle mode is invalid!",invalidArrowPosition:"The arrow position is invalid!",invalidNavigationBarSize:"This size is not valid!",invalidExpandModeException:"The expand mode you've entered is invalid!",invalidExpandedIndexesLength:"expandedIndexes is not with valid size.",invalidExpandedIndex:"Invalid expanded index!",invalidModeException:"You can't use fitAvailableHeight in multiple expand mode!",invalidSizeMode:"You have entered invalid size mode!"}},createInstance:function(c){this.host.addClass(this.toThemeProperty("jqx-navigationbar"));this.host.addClass(this.toThemeProperty("jqx-widget"));this.host.css("visibility","hidden");var e=this.host.children("."+this.toThemeProperty("jqx-expander-header",true)).detach();var b=this.host.children("."+this.toThemeProperty("jqx-expander-content",true)).detach();try{if(e.length===0||b.length===0){var f=this._addExpanderClasses();e=f.headersList;b=f.contentsList}if(e.length!=b.length){throw this._invalidArgumentExceptions.invalidStructure}}catch(d){alert(d)}this.headersList=e;this.contentsList=b;this._createNavigationBar(e,b);this.host.css("visibility","visible")},_addExpanderClasses:function(){var f=this.host.children("div");if(f.length>0){var e=[];for(var d=0,c=0;d<f.length;d+=2,c++){e[c]=a(f[d]).detach();e[c].addClass(this.toThemeProperty("jqx-widget-header"));e[c].addClass(this.toThemeProperty("jqx-expander-header"))}if(f.length>1){var b=[];for(var d=1,c=0;d<f.length;d+=2,c++){b[c]=a(f[d]).detach();b[c].addClass(this.toThemeProperty("jqx-widget-content"));b[c].addClass(this.toThemeProperty("jqx-expander-content"))}}else{throw this._invalidArgumentExceptions.invalidStructure}}else{throw this._invalidArgumentExceptions.invalidStructure}return{headersList:e,contentsList:b}},_updateExpandedIndexes:function(c){if(c==null||c==undefined){c=0}this._expandedIndexes=[];if(this.expandedIndexes===undefined){this.expandedIndexes=[]}else{for(var b=0;b<c;b++){this._expandedIndexes[b]=false}for(var b=0;b<this.expandedIndexes.length;b++){if(this.expandedIndexes[b]<c){this._expandedIndexes[this.expandedIndexes[b]]=true}}}},_createNavigationBar:function(c,b){this._updateExpandedIndexes(c.length);this._render(c,b);this._refreshNavigationBar()},_refreshNavigationBar:function(){this._validateProperties();this._fixView();this._performLayout();this._fixView()},_collapseItems:function(){for(var b=0;b<this._expandersList.length;b++){if(!this._expandedIndexes[b]){a(this._expandersList[b]).jqxExpander("_absoluteCollapse")}}},_removeArrayItem:function(c,d){var b=this._getItemIndex(c,d);if(b>=0){d.splice(b,1)}},_removeEventHandlers:function(){var b=this;a.each(this._expandersList,function(){var c=this;b.removeHandler(a(c),"expanded");b.removeHandler(a(c),"collapsed");b.removeHandler(a(c),"collapsing");b.removeHandler(a(c),"expanding");b.removeHandler(a(window),"load")})},_addEventHandlers:function(c){var b=this;this.addHandler(a(c),"mouseenter",function(){c.css("z-index",100)});this.addHandler(a(c),"mouseleave",function(){c.css("z-index",0)});this.addHandler(a(c),"expanded",function(){var d=b._getItemIndex(c,b._expandersList);b._expandedIndexes[d]=true;if(b.expandMode==="single"){b.expandedIndex=d}a(this).css("margin-bottom",0);var e=b._getItemIndex(this,b._expandersList);if(b.expandedIndexes[e]==undefined){b.expandedIndexes.push(e)}b._raiseEvent(1,b._getItemIndex(this,b._expandersList))});this.addHandler(a(c),"collapsed",function(){var d=b._getItemIndex(c,b._expandersList);b._expandedIndexes[d]=false;b._removeArrayItem(b._getItemIndex(this,b._expandersList),b.expandedIndexes);b._raiseEvent(3,b._getItemIndex(this,b._expandersList))});this.addHandler(a(c),"collapsing",function(d){b._raiseEvent(2,b._getItemIndex(this,b._expandersList));if(b.expandMode==="single"){a(this).jqxExpander("toggleMode",b.toggleMode)}});this.addHandler(a(c),"expanding",function(d){if(b.expandMode==="single"||b.expandMode==="toggle"){if(b._currentExpandedItem&&b._getItemIndex(d.owner.element,b._expandersList)>=0){b.collapseAt(b._getItemIndex(b._currentExpandedItem,b._expandersList));a(b._currentExpandedItem).jqxExpander("toggleMode",b.toggleMode);if((b.sizeMode==="maxItemHeight"||b.sizeMode==="fitAvailableHeight")&&(a.browser.webkit||a.browser.opera||a.browser.msie&&parseInt(a.browser.version)<9)){}}b._currentExpandedItem=this;if(b.expandMode==="single"){a(this).jqxExpander("toggleMode","none")}if(b.animationType!=="none"){}}b._raiseEvent(0,b._getItemIndex(this,b._expandersList))});this.addHandler(a(window),"load",function(d){if(b.sizeMode==="maxItemHeight"){b._refreshNavigationBar()}})},_getItemIndex:function(c,d){for(var b=0;b<d.length;b++){if(d[b]===c||d[b][0]===c){return b}}return -1},_validateProperties:function(){try{if((parseInt(this.width)<=0||parseInt(this.height)<=0)&&(this.width!=="auto"&&this.height!=="auto"||this.width!==undefined&&this.height!==undefined)){throw this._invalidArgumentExceptions.invalidNavigationBarSize}if(this.animationType!=="slide"&&this.animationType!=="none"&&this.animationType!=="fade"){throw this._invalidArgumentExceptions.invalidAnimationType}if(this.expandMode!=="single"&&this.expandMode!=="multiple"&&this.expandMode!=="none"&&this.expandMode!=="toggle"){throw this._invalidArgumentExceptions.invalidExpandMode}if(this.expandedIndexes.length>this._expandersList.length){throw this._invalidArgumentExceptions.invalidExpandedIndexesLength}if(this.expandedIndex>(this._expandersList.length-1)){throw this._invalidArgumentExceptions.invalidExpandedIndex}if(this.sizeMode!=="auto"&&this.sizeMode!=="fitAvailableHeight"&&this.sizeMode!=="maxItemHeight"){throw this._invalidArgumentExceptions.invalidSizeMode}if(this.expandMode==="multiple"&&this.sizeMode==="fitAvailableHeight"){throw this._invalidArgumentExceptions.invalidModeException}}catch(b){alert(b)}},_render:function(e,c){this._maxHeight=0;for(var d=0;d<e.length;d++){var h=a(e[d]).addClass(this.toThemeProperty("jqx-expander-header"));var f=a(c[d]).addClass(this.toThemeProperty("jqx-expander-content"));h.addClass(this.toThemeProperty("jqx-widget-header"));f.addClass(this.toThemeProperty("jqx-widget-content"));var b=a('<div class="'+this.toThemeProperty("jqx-expander")+'"></div>');b.append(h);b.append(f);this.host.append(b);this._expandersList[d]=this._createExpanderByNavigationBarExpandMode(d,b);var g=parseInt(a(this._expandersList[d]).children(".jqx-expander-contentWrapper",true).children(this.toThemeProperty(".jqx-expander-content",true)).outerHeight());if(this._maxHeight<g){this._maxHeight=g}this._addEventHandlers(this._expandersList[d])}},_performLayout:function(){var d=0;for(var b=0;b<this._expandersList.length;b++){d+=this._expandersList[b].children(this.toThemeProperty(".jqx-expander-header",true)).outerHeight()}switch(this.sizeMode){case"auto":break;case"fitAvailableHeight":for(var c=0;c<this._expandersList.length;c++){var f=0;f+=parseInt(this._expandersList[0].children(this.toThemeProperty(".jqx-expander-header",true)).css("border-top-width"))+parseInt(this._expandersList[this._expandersList.length-1].children(".jqx-expander-contentWrapper").children(this.toThemeProperty(".jqx-expander-content",true)).css("border-bottom-width"));var e=parseInt(this.height)-d;a(this._expandersList[c]).jqxExpander("setContentHeight",e)}break;case"maxItemHeight":for(var c=0;c<this._expandersList.length;c++){a(this._expandersList[c]).jqxExpander("setContentHeight",this._maxHeight)}break}this._performHostLayout(d)},_performHostLayout:function(d){if(this.width){this.host.width(this.width)}for(var c=0;c<this._expandersList.length;c++){if(!this._expandedIndexes[c]){a(this._expandersList[c]).jqxExpander("expanded",false)}else{a(this._expandersList[c]).jqxExpander("expanded",true)}}if((this.sizeMode==="maxItemHeight")&&(this.expandMode==="single")){var b=parseInt(this._expandersList[this._expandersList.length-1].children(".jqx-expander-contentWrapper",true).children(this.toThemeProperty(".jqx-expander-content",true)).css("border-bottom-width"));this.host.height(d+this._maxHeight+b+"px")}else{if((this.sizeMode==="fitAvailableHeight")&&(this.expandMode==="toggle"||this.expandMode==="single")){this.host.height(parseInt(this.height))}else{this.host.height("auto")}}},_fixView:function(){for(var b=0;b<this._expandersList.length;b++){this._expandersList[b].css("position","relative");var d=this._expandersList[b].children("."+this.toThemeProperty("jqx-expander-header",true));var c=this._expandersList[b].children("."+this.toThemeProperty("jqx-expander-contentWrapper",true));if(b>0){d.css("margin-top","-1px")}c.css("border-left-width","0px");c.css("border-right-width","0px");c.css("border-top-width","0px");c.css("border-bottom-width","0px");c.children().css("border-top-width","0px");if(b!==0&&b!==(this._expandersList.length-1)){this._removeRoundedCorners(this._expandersList[b],true,true)}if(b===0){this._removeRoundedCorners(this._expandersList[b],false,true)}if(b===(this._expandersList.length-1)){this._removeRoundedCorners(this._expandersList[b],true,false)}}},_createExpander:function(b,c){var d=a(b).jqxExpander({expanded:true,width:this.width,arrowPosition:this.arrowPosition,expandAnimationDuration:this.expandAnimationDuration,collapseAnimationDuration:this.collapseAnimationDuration,disabled:this.disabled,animationType:this.animationType,showArrow:this.showArrow,toggleMode:c,theme:this.theme});return d},_createExpanderByNavigationBarExpandMode:function(c,b){var d=this;var e;switch(this.expandMode){case"single":e=this._singleExpandModeCreateExpander(c,b);break;case"multiple":e=this._multipleExpandModeCreateExpander(c,b);break;case"toggle":e=this._toggleExpandModeCreateExpander(c,b);break;case"none":e=this._noneExpandModeCreateExpander(c,b);break}return e},_disableItems:function(){for(var b=0;b<this._expandersList.length;b++){this._toggleModesBackup[b]=a(this._expandersList[b]).jqxExpander("toggleMode");a(this._expandersList[b]).jqxExpander("toggleMode","none")}},_enableItems:function(){for(var b=0;b<this._expandersList.length;b++){a(this._expandersList[b]).jqxExpander("toggleMode",this._toggleModesBackup[b])}},_isValidIndex:function(b){return(b<this._expandersList.length)},_toggleExpandModeCreateExpander:function(c,b){var d;if(this.expandedIndex===c){d=this._createExpander(b,this.toggleMode,true);this._expandedIndexes[c]=true;this._currentExpandedItem=d}else{d=this._createExpander(b,this.toggleMode,false);this._expandedIndexes[c]=false}return d},_singleExpandModeCreateExpander:function(c,b){var d;if((this.expandedIndex===-1&&c===0)||this.expandedIndex===c){d=this._createExpander(b,this.toggleMode,true);this._expandedIndexes[c]=true;this._currentExpandedItem=d}else{d=this._createExpander(b,this.toggleMode,false);this._expandedIndexes[c]=false}return d},_multipleExpandModeCreateExpander:function(c,b){var d;if(this._expandedIndexes[c]){d=this._createExpander(b,this.toggleMode,this._expandedIndexes[c]);this._expandedIndexes[c]=true}else{d=this._createExpander(b,this.toggleMode,this._expandedIndexes[c]);this._expandedIndexes[c]=false}return d},_noneExpandModeCreateExpander:function(c,b){var d;if(this._expandedIndexes[c]){d=this._createExpander(b,this.toggleMode,this._expandedIndexes[c]);this._expandedIndexes[c]=true}else{d=this._createExpander(b,this.toggleMode,this._expandedIndexes[c]);this._expandedIndexes[c]=false}return d},_removeRoundedCorners:function(f,d,b){if(d){var e=a(f).children(this.toThemeProperty(".jqx-expander-header",true));e.css("-moz-border-radius","0px");f.css("-moz-border-radius-topleft","0px");f.css("-moz-border-radius-topright","0px");e.css("border-radius","0px");f.css("border-top-left-radius","0px");f.css("border-top-right-radius","0px")}if(b){var c=a(f).children(".jqx-expander-contentWrapper").children(this.toThemeProperty(".jqx-expander-content",true));c.css("-moz-border-radius","0px");f.css("-moz-border-radius-topleft","0px");f.css("-moz-border-radius-topright","0px");c.css("border-radius","0px");f.css("border-bottom-left-radius","0px");f.css("border-bottom-right-radius","0px")}},collapseAt:function(b){if(this._isValidIndex(b)){a(this._expandersList[b]).jqxExpander("collapse");this._expandedIndexes[b]=false;this.expandedIndexes.splice(b,1);if(this.expandedIndex==b){this.expandedIndex=-1}}},expandAt:function(b){if(this._isValidIndex(b)){a(this._expandersList[b]).jqxExpander("expand");this._expandedIndexes[b]=true;this.expandedIndex=b}},getItemStates:function(){return this._expandedIndexes},disableAt:function(b){if(this._isValidIndex(b)){if(!a(this._expandersList[b]).jqxExpander("disabled")){a(this._expandersList[b]).jqxExpander("disabled",true)}}},enableAt:function(b){if(this._isValidIndex(b)){if(a(this._expandersList[b]).jqxExpander("disabled")){a(this._expandersList[b]).jqxExpander("disabled",false)}}},setContentAt:function(b,c){if(this._isValidIndex(b)){a(this._expandersList[b]).jqxExpander("setContent",c)}},setHeaderContentAt:function(b,c){if(this._isValidIndex(b)){a(this._expandersList[b]).jqxExpander("setHeaderContent",c)}},getHeaderContentAt:function(b){if(this._isValidIndex(b)){return a(this._expandersList[b]).jqxExpander("getHeaderContent")}return null},getContentAt:function(b){if(this._isValidIndex(b)){return a(this._expandersList[b]).jqxExpander("getContent")}return null},lockAt:function(b){if(this._isValidIndex(b)){a(this._expandersList[b]).jqxExpander("toggleMode","none")}},unlockAt:function(b){if(this._isValidIndex(b)){a(this._expandersList[b]).jqxExpander("toggleMode",this.toggleMode)}},showArrowAt:function(b){if(this._isValidIndex(b)){a(this._expandersList[b]).jqxExpander("showArrow",true)}},hideArrowAt:function(b){if(this._isValidIndex(b)){a(this._expandersList[b]).jqxExpander("showArrow",false)}},disable:function(){for(var b=0;b<this._expandersList.length;b++){this.disableAt(b)}},enable:function(){for(var b=0;b<this._expandersList.length;b++){this.enableAt(b)}},destroy:function(){this.host.removeClass()},_raiseEvent:function(f,d){if(d==undefined){d=-1}var c=this._events[f];var e=a.Event(c);e.owner=d;e.item=d;var b=this.host.trigger(e);return b},_getHeaders:function(){var c=[];for(var b=0;b<this._expandersList.length;b++){c[b]=a('<div class="'+this.toThemeProperty("jqx-expander-header")+'" />').append(a(this._expandersList[b]).jqxExpander("getHeaderContent"))}return c},_getContents:function(){var b=[];for(var c=0;c<this._expandersList.length;c++){b[c]=a('<div class="'+this.toThemeProperty("jqx-expander-content")+'" />').append(a(this._expandersList[c]).jqxExpander("getContent"))}return b},propertyChangedHandler:function(b,c,e,d){if(this.isInitialized==undefined||this.isInitialized==false){return}this._validateProperties();if(c==="arrowPosition"){a.each(b._expandersList,function(){this.jqxExpander({arrowPosition:d})})}else{if(c==="expandAnimationDuration"){a.each(b._expandersList,function(){this.jqxExpander({expandAnimationDuration:d})})}else{if(c==="collapseAnimationDuration"){a.each(b._expandersList,function(){this.jqxExpander({collapseAnimationDuration:d})})}else{if(c==="showArrow"){a.each(b._expandersList,function(){this.jqxExpander({showArrow:d})})}else{if(c==="toggleMode"){a.each(b._expandersList,function(){this.jqxExpander({toggleMode:d})})}else{if(c==="theme"){a.each(b._expandersList,function(){this.jqxExpander({theme:d})})}else{if(c==="animationType"){a.each(b._expandersList,function(){this.jqxExpander({animationType:d})})}else{if(c==="disabled"){a.each(b._expandersList,function(){this.jqxExpander({disabled:d})})}else{if(c==="expandedIndexes"){a.each(b.expandedIndexes,function(){if(d){b.expandAt(this)}else{b.collapseAt(this)}})}else{if(c==="disabled"){if(d){this.disable()}else{this.enable()}}else{this._updateExpandedIndexes(this.headersList.length);this._refreshNavigationBar()}}}}}}}}}}}})})(jQuery);