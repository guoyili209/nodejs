class Ship {
    private _animation: Laya.Animation = null;
    private _vx = 0;
    private _vy = 0;
    private _x;
    private _y;
    private _positionTime = 1000 / 4;
    constructor(x, y) {
        this._x = x;
        this._y = y;
        this._animation = new Laya.Animation();
        this._animation.loadAtlas("assets/ship.atlas", Laya.Handler.create(this, this._loadComplete));
    }
    private _loadComplete() {
        console.log("ship load complete!");
        Laya.stage.addChild(this._animation);
        this._animation.pivot(23, 31);
        Laya.stage.on(Laya.Event.KEY_DOWN, this, this._moveShip);
        Laya.stage.on(Laya.Event.KEY_UP, this, this._stopShip);
        Laya.timer.frameLoop(1, this, this._update);
        Laya.timer.loop(this._positionTime,this,this._sendShipPosition);
    }
    private _sendShipPosition(){
        
    }
    private _update() {
        this._animation.x += this._vx;
        this._animation.y += this._vy;
    }
    private _moveShip(e) {
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
    }
    private _stopShip(e) {
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
    }
}