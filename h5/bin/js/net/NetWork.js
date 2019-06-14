var NetWork = /** @class */ (function () {
    function NetWork() {
        this._scriptPacket = null;
        this._scriptPacket = new ScriptPacket();
        this._socket = new Laya.Socket();
    }
    NetWork.prototype.initSocket = function () {
        this._socket = new Laya.Socket();
        this._socket.endian = Laya.Byte.LITTLE_ENDIAN;
        this._socket.on(Laya.Event.OPEN, this, this._openHandler);
        this._socket.on(Laya.Event.MESSAGE, this, this._receiveHandler);
        this._socket.on(Laya.Event.CLOSE, this, this._closeHandler);
        this._socket.on(Laya.Event.ERROR, this, this._errorHandler);
    };
    NetWork.prototype.connectSocket = function () {
        this._socket.connectByUrl("ws://172.16.100.105:8002");
    };
    NetWork.prototype._openHandler = function (e) {
        if (e === void 0) { e = null; }
        console.log("连接");
        var csLogin = new CS_LoginPacket();
        csLogin.userName = "guoyili";
        csLogin.pw = "123456";
        csLogin.testArr = [1, 2, 3];
        this.send(Cmd.CS_LOGIN, csLogin);
    };
    NetWork.prototype._receiveHandler = function (msg) {
        if (msg === void 0) { msg = null; }
        var byte = new Laya.Byte(msg);
        byte.pos = 0;
        var dataLen = byte.getUint32();
        var cmd = byte.getUint16();
        var defineObj = CmdMap.getInstance().getCmdProtocol(cmd);
        var obj = new Object();
        this._scriptPacket.decode(obj, defineObj, byte);
        CmdMap.getInstance().getCmdCallBack(cmd).apply(null, [obj]);
    };
    NetWork.prototype._closeHandler = function (e) {
        if (e === void 0) { e = null; }
        console.log("关闭");
    };
    NetWork.prototype._errorHandler = function (e) {
        if (e === void 0) { e = null; }
        console.log("错误:" + e);
    };
    NetWork.prototype.send = function (cmd, obj) {
        var tempByte = new Laya.Byte();
        this._scriptPacket.encode(obj, tempByte);
        var len = tempByte.length;
        var byte = new Laya.Byte();
        byte.writeUint32(len + 6);
        byte.writeUint16(cmd);
        byte.writeArrayBuffer(tempByte.buffer, 0, len);
        this._socket.send(byte.buffer);
        byte.clear();
    };
    return NetWork;
}());
//# sourceMappingURL=NetWork.js.map