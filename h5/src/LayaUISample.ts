import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;

//程序入口
Laya.init(1136, 640, WebGL);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

function beginLoad() {
	// Laya.loader.load("/ui/ship.jpg", Handler.create(null, onLoaded));
	var sceneUI = new ui.scene.SceneUI()
	Laya.stage.addChild(sceneUI);
	let scLogin = new SC_LoginPacket();
	CmdMap.getInstance().registerCmd(Cmd.SC_LOGIN, scLogin, this._callBack);
	var net = NetWork.getInstance();
	net.initSocket();
	net.connectSocket();
}

function onLoaded(): void {
	var sceneUI = new ui.scene.SceneUI()
	Laya.stage.addChild(sceneUI);
}
function _callBack(packet: SC_LoginPacket) {
	if (packet.ret == 1) {
		_createShip(packet.x, packet.y)
	}
}
function _createShip(x, y) {
	let ship = new Ship(x, y);

}
