var __reflect=this&&this.__reflect||function(e,t,r){e.__class__=t,r?r.push(t):r=[t],e.__types__=e.__types__?r.concat(e.__types__):r},__extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);r.prototype=t.prototype,e.prototype=new r},__awaiter=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,a){function o(e){try{h(i.next(e))}catch(t){a(t)}}function s(e){try{h(i["throw"](e))}catch(t){a(t)}}function h(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(o,s)}h((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function r(e){return function(t){return i([e,t])}}function i(r){if(n)throw new TypeError("Generator is already executing.");for(;h;)try{if(n=1,a&&(o=a[2&r[0]?"return":r[0]?"throw":"next"])&&!(o=o.call(a,r[1])).done)return o;switch(a=0,o&&(r=[0,o.value]),r[0]){case 0:case 1:o=r;break;case 4:return h.label++,{value:r[1],done:!1};case 5:h.label++,a=r[1],r=[0];continue;case 7:r=h.ops.pop(),h.trys.pop();continue;default:if(o=h.trys,!(o=o.length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){h=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){h.label=r[1];break}if(6===r[0]&&h.label<o[1]){h.label=o[1],o=r;break}if(o&&h.label<o[2]){h.label=o[2],h.ops.push(r);break}o[2]&&h.ops.pop(),h.trys.pop();continue}r=t.call(e,h)}catch(i){r=[6,i],a=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var n,a,o,s,h={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},myRectangle=function(){function e(e,t,r,i){this.x=e,this.y=t,this.width=r,this.height=i}return e}();__reflect(myRectangle.prototype,"myRectangle");var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),this.createGameScene(),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return r.sent(),[4,this.loadTheme()];case 2:return r.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return r.sent(),this.stage.removeChild(e),[3,5];case 4:return t=r.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,r){var i=new eui.Theme("resource/default.thm.json",e.stage);i.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){this.addChild(new StartUI)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var Bullet=function(e){function t(){var t=e.call(this)||this;return t.source=RES.getRes("aircraftBullet_png"),t.width=GameVar.bulletWidth,t.height=GameVar.bulletHeight,t.anchorOffsetX=0,t.anchorOffsetY=0,t}return __extends(t,e),t}(eui.Image);__reflect(Bullet.prototype,"Bullet");var FruitType;!function(e){e[e.None=0]="None",e[e.Fruit1=1]="Fruit1",e[e.Fruit2=2]="Fruit2",e[e.Fruit3=3]="Fruit3"}(FruitType||(FruitType={}));var Fruit=function(e){function t(t,r){var i=e.call(this)||this;return i.fruitType=t,i.speed=r,i}return __extends(t,e),Object.defineProperty(t.prototype,"fruitType",{get:function(){return this._fruitType},set:function(e){this._fruitType=e,this.source=RES.getRes("fruit_"+e+"_png"),this.width=GameVar.FruitWidth[e],this.height=GameVar.FruitHeight[e],this.hp=GameVar.FruitHP[e],this.score=GameVar.FruitScore[e],this.isRectangle=GameVar.FruitRectangle[e],this.rectangleArea=GameVar.FruitRectangleArray[e]},enumerable:!0,configurable:!0}),t}(eui.Image);__reflect(Fruit.prototype,"Fruit");var Game=function(e){function t(){var t=e.call(this)||this;return t.bullets=[],t.bulletlasttime=0,t.bulletbirthtime=0,t.lasttime=0,t.birthtime=0,t.skinName="resource/skins/GameSkin.exml",t}return __extends(t,e),t.getInstance=function(){return null==this._instance&&(this._instance=new t),this._instance},Object.defineProperty(t.prototype,"gameScore",{get:function(){return this._gameScore},set:function(e){this._gameScore=e,this.lb_score.text=this.lb_overscore.text=e.toString(),e>16e5&&400==GameVar.FruitBirthSpeed?GameVar.FruitBirthSpeed=200:e>4e5&&600==GameVar.FruitBirthSpeed?GameVar.FruitBirthSpeed=400:e>15e4&&800==GameVar.FruitBirthSpeed?GameVar.FruitBirthSpeed=600:e>5e4&&1e3==GameVar.FruitBirthSpeed&&(GameVar.FruitBirthSpeed=800)},enumerable:!0,configurable:!0}),t.prototype.restart=function(){this.lasttime=0,this.birthtime=0,this.bulletlasttime=0,this.bulletbirthtime=0,this.com_aircreft.x=295,this.com_aircreft.y=1127.52,this.com_aircreft.visible=!0,this.gp_fruit.removeChildren(),this.removeChild(this.gp_gameover),this.com_aircreft.fire(),this.com_aircreft.moveAir(),this.com_aircreft.addEventListener("createBullet",this.createBulletHandler,this),egret.startTick(this.onUpdate,this);var e=RES.getRes("boom_json"),t=RES.getRes("boom_png");this.boomFactory=new egret.MovieClipDataFactory(e,t),this.gameScore=0},t.prototype.back=function(){this.parent.addChild(StartUI.getInstance()),this.parent.removeChild(this)},t.prototype.gameOver=function(){this.addChild(this.gp_gameover),this.btn_restart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.restart,this),this.btn_mainmenu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.back,this),this.com_aircreft.stopFire(),this.com_aircreft.stopMoveAir(),this.com_aircreft.removeEventListener("createBullet",this.createBulletHandler,this),egret.stopTick(this.onUpdate,this);for(var e=0;e<this.gp_gameover.numChildren;e++){var t=this.gp_gameover.getChildAt(e);t.alpha=0,egret.Tween.get(t).wait(200*e).to({alpha:1},500)}},t.prototype.createBulletHandler=function(e){var t=egret.getTimer(),r=t-this.bulletlasttime;if(this.bulletlasttime=t,this.bulletbirthtime+=r,this.bulletbirthtime>GameVar.BulletBirthSpeed){this.bulletbirthtime=0;var i=new Bullet;i.x=this.com_aircreft.x+this.com_aircreft.width/2-i.width/2,i.y=this.com_aircreft.y-i.height+20,this.addChild(i),this.bullets.push(i)}},t.prototype.onUpdate=function(e){var t=this,r=e-this.lasttime;if(0==this.lasttime)return this.lasttime=e,!1;this.lasttime=e,this.birthtime+=r;for(var i=this.bullets.length-1;i>=0;i--){var n=this.bullets[i];n.y-=r*GameVar.BulletSpeed,n.y<0&&(this.removeChild(n),this.bullets.splice(i,1))}if(this.birthtime>GameVar.FruitBirthSpeed){this.birthtime=0;var a=GameVar.FruitRandom[Math.floor(20*Math.random())],o=GameVar.FruitDownSpeed[a]*(Math.random()+1);3!=a&&(o=GameVar.FruitDownSpeed[a]*(Math.random()+GameVar.FruitSpeedRandom[Math.floor(10*Math.random())]));var s=new Fruit(a,o);s.x=Math.random()*(this.gp_fruit.width-this.com_aircreft.width)+this.com_aircreft.width/2-s.width/2,this.gp_fruit.addChild(s)}for(var h,u=function(e){h=c.gp_fruit.getChildAt(e);var i=r*h.speed;if(h.y+=i,GameUtil.hitTestFruitAir(h,c.com_aircreft)){var n=new egret.MovieClip(c.boomFactory.generateMovieClipData("boom"));return n.x=c.com_aircreft.x+c.com_aircreft.width/2,n.y=c.com_aircreft.y+c.com_aircreft.height/2,c.addChild(n),n.gotoAndPlay(0,1),c.com_aircreft.visible=!1,c.gameOver(),n.addEventListener(egret.Event.COMPLETE,function(e){t.removeChild(n),n=null},c),{value:!1}}h.y>c.gp_fruit.height&&c.gp_fruit.removeChild(h)},c=this,i=this.gp_fruit.numChildren-1;i>=0;i--){var l=u(i);if("object"==typeof l)return l.value}for(var f=this.bullets.length-1;f>=0;f--)for(var h,n=this.bullets[f],p=function(e){if(h=d.gp_fruit.getChildAt(e),GameUtil.hitTestFruitObj(h,n)){if(d.removeChild(n),d.bullets.splice(f,1),h.hp--,0==h.hp){d.gameScore+=h.score;var r=new egret.MovieClip(d.boomFactory.generateMovieClipData("boom"));r.x=h.x+h.width/2,r.y=h.y+h.height/2,d.addChild(r),r.gotoAndPlay(0,1),r.addEventListener(egret.Event.COMPLETE,function(e){t.removeChild(r),r=null},d),d.gp_fruit.removeChild(h)}return"break"}},d=this,i=this.gp_fruit.numChildren-1;i>=0;i--){var g=p(i);if("break"===g)break}return this.gp_fruit_bg.anchorOffsetY-=r*GameVar.BgDownSpeed,this.gp_fruit_bg.anchorOffsetY<=-1125&&(this.gp_fruit_bg.anchorOffsetY=0),!1},t._instance=null,t}(eui.Component);__reflect(Game.prototype,"Game");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=667,this.textField.width=750,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,r){function i(i){t.call(r,i,e)}if(RES.hasRes(e)){var n=RES.getRes(e);n?i(n):RES.getResAsync(e,i,this)}else RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Aircraft=function(e){function t(){var t=e.call(this)||this;return t._touchStatus=!1,t._distance=new egret.Point,t.fireDelay=GameVar.FireDelay,t.fireTimer=new egret.Timer(t.fireDelay),t.fireTimer.addEventListener(egret.TimerEvent.TIMER,t.createBullet,t),t}return __extends(t,e),t.prototype.fire=function(){this.fireTimer.start()},t.prototype.stopFire=function(){this.fireTimer.stop()},t.prototype.moveAir=function(){console.log(this.hasEventListener(egret.TouchEvent.TOUCH_BEGIN)),this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this),this.addEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this)},t.prototype.stopMoveAir=function(){console.log(this.hasEventListener(egret.TouchEvent.TOUCH_BEGIN)),this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this),this.removeEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this),this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this)},t.prototype.createBullet=function(e){this.dispatchEventWith("createBullet")},t.prototype.mouseDown=function(e){this._touchStatus=!0,this._distance.x=e.stageX-this.x,this._distance.y=e.stageY-this.y,this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this)},t.prototype.mouseMove=function(e){this._touchStatus&&(this.x=Math.min(Math.max(0,e.stageX-this._distance.x),GameVar.stageWidth-this.width),this.y=Math.min(Math.max(0,e.stageY-this._distance.y),GameVar.stageHeight-this.height))},t.prototype.mouseUp=function(e){this._touchStatus=!1,this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this)},t}(eui.Component);__reflect(Aircraft.prototype,"Aircraft");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var StartUI=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/skins/StartSkin.exml",t.btn_play.addEventListener(egret.TouchEvent.TOUCH_TAP,t.onclick_play,t),t}return __extends(t,e),t.getInstance=function(){return null==t._instance&&(t._instance=new t),t._instance},t.prototype.onclick_play=function(){this.parent.addChild(Game.getInstance()),this.parent.removeChild(this),Game.getInstance().restart()},t._instance=null,t}(eui.Component);__reflect(StartUI.prototype,"StartUI");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,r,i){function n(e){t.call(i,e)}function a(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),r.call(i))}"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(i,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(e,n,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var GameUtil=function(){function e(){}return e.hitTestFruitAir=function(e,t){if(e.isRectangle){for(var r=0,i=e.rectangleArea;r<i.length;r++)for(var n=i[r],a=0,o=GameVar.AirRectangle;a<o.length;a++){var s=o[a],h=new egret.Rectangle(e.x+n.x,e.y+n.y,n.width,n.height),u=new egret.Rectangle(t.x+s.x,t.y+s.y,s.width,s.height);if(h.intersects(u))return!0}return!1}return this.hitTestObjAir(e,t)},e.hitTestObjAir=function(e,t){for(var r=new egret.Rectangle(e.x,e.y,e.width,e.height),i=0,n=GameVar.AirRectangle;i<n.length;i++){var a=n[i],o=new egret.Rectangle(t.x+a.x,t.y+a.y,a.width,a.height);if(r.intersects(o))return!0}return!1},e.hitTestFruitObj=function(e,t){if(e.isRectangle){for(var r=new egret.Rectangle(t.x,t.y,t.width,t.height),i=0,n=e.rectangleArea;i<n.length;i++){var a=n[i],o=new egret.Rectangle(e.x+a.x,e.y+a.y,a.width,a.height);if(o.intersects(r))return!0}return!1}return this.hitTest(e,t)},e.hitTest=function(e,t){var r=new egret.Rectangle(e.x,e.y,e.width,e.height),i=new egret.Rectangle(t.x,t.y,t.width,t.height);return r.intersects(i)},e}();__reflect(GameUtil.prototype,"GameUtil");var GameVar=function(){function e(){}return e.changeSpeed=function(e){e>3&&(this.FruitBirthSpeed=2),e>10&&(this.FruitBirthSpeed=1)},e.stageWidth=750,e.stageHeight=1334,e.bulletWidth=29,e.bulletHeight=47,e.FruitRandom=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3],e.FruitSpeedRandom=[1,1,1,1,1,1,1,1,1,3],e.FruitDownSpeed=[0,.14,.12,.1],e.FruitWidth=[0,40,80,160],e.FruitHeight=[0,41,77,226],e.FruitHP=[0,1,5,10],e.FruitScore=[0,1e3,6e3,3e4],e.FruitRectangle=[!1,!1,!0,!1],e.FruitRectangleArray=[[],[],[new myRectangle(1,20,46,57),new myRectangle(32,1,47,62)],[]],e.AirRectangle=[new myRectangle(60,18,42,34),new myRectangle(14,50,134,68)],e.FireDelay=100,e.BulletSpeed=1.2,e.BulletBirthSpeed=200,e.FruitBirthSpeed=1e3,e.BgDownSpeed=.1,e.BigScore=5,e.SmallScore=1,e}();__reflect(GameVar.prototype,"GameVar");