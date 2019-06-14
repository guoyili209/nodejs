var Ship = /** @class */ (function () {
    function Ship(x, y) {
        this._animation = null;
        this._vx = 0;
        this._vy = 0;
        this._x = x;
        this._y = y;
        this._animation = new Laya.Animation();
        this._animation.loadAtlas("assets/ship.atlas", Laya.Handler.create(this, this._loadComplete));
    }
    Ship.prototype._loadComplete = function () {
        console.log("ship load complete!");
        Laya.stage.addChild(this._animation);
        this._animation.pivot(23, 31);
        Laya.stage.on(Laya.Event.KEY_DOWN, this, this._moveShip);
        Laya.stage.on(Laya.Event.KEY_UP, this, this._stopShip);
        Laya.timer.frameLoop(1, this, this._update);
    };
    Ship.prototype._update = function () {
        this._animation.x += this._vx;
        this._animation.y += this._vy;
    };
    Ship.prototype._moveShip = function (e) {
        this._vx = 0;
        this._vy = 0;
        switch (e.keyCode) {
            case 37:
                this._vx = -1;
                this._animation.rotation = 270;
                break;
            case 38:
                this._vy = -1;
                this._animation.rotation = 0;
                break;
            case 39:
                this._vx = 1;
                this._animation.rotation = 90;
                break;
            case 40:
                this._vy = 1;
                this._animation.rotation = 180;
                break;
        }
    };
    Ship.prototype._stopShip = function (e) {
        switch (e.keyCode) {
            case 37:
                this._vx = 0;
                break;
            case 38:
                this._vy = 0;
                break;
            case 39:
                this._vx = 0;
                break;
            case 40:
                this._vy = 0;
                break;
        }
    };
    return Ship;
}());
//# sourceMappingURL=Ship.js.map