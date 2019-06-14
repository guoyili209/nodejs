var test = ui.test.TestPageUI;
var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
//程序入口
Laya.init(1136, 640, WebGL);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
function beginLoad() {
    // Laya.loader.load("/ui/ship.jpg", Handler.create(null, onLoaded));
    var sceneUI = new ui.scene.SceneUI();
    Laya.stage.addChild(sceneUI);
    var net = new NetWork();
    // net.initSocket();
    // net.connectSocket();
    // _createShip(100, 100);
    // PositionPacket.CS_MyPosition.x = 1;
    // console.log(PositionPacket.CS_MyPosition.x);
}
function onLoaded() {
    var sceneUI = new ui.scene.SceneUI();
    Laya.stage.addChild(sceneUI);
    var scLogin = new SC_LoginPacket();
    CmdMap.getInstance().registerCmd(Cmd.SC_LOGIN, scLogin, this._callBack);
}
function _callBack(packet) {
    console.log("登录返回");
    if (packet.ret == 1) {
        _createShip(packet.x, packet.y);
    }
}
function _createShip(x, y) {
    var ship = new Ship(x, y);
}
//# sourceMappingURL=LayaUISample.js.map