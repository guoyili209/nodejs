class NetWork {
    private _scriptPacket: ScriptPacket = null;
    private _socket: Laya.Socket;
    private static _instance;
    constructor() {
        this._scriptPacket = new ScriptPacket();
        this._socket = new Laya.Socket();
    }
    static getInstance() {
        if (!NetWork._instance) {
            NetWork._instance = new NetWork();
        }
        return NetWork._instance;
    }
    initSocket() {
        this._socket = new Laya.Socket();
        this._socket.endian = Laya.Byte.LITTLE_ENDIAN;
        this._socket.on(Laya.Event.OPEN, this, this._openHandler);
        this._socket.on(Laya.Event.MESSAGE, this, this._receiveHandler);
        this._socket.on(Laya.Event.CLOSE, this, this._closeHandler);
        this._socket.on(Laya.Event.ERROR, this, this._errorHandler);
    }
    connectSocket() {
        this._socket.connectByUrl("ws://172.16.100.105:8002");
    }
    private _openHandler(e: any = null) {
        console.log("连接");
        let csLogin = new CS_LoginPacket();
        csLogin.userName = "guoyili";
        csLogin.pw = "123456";
        csLogin.testArr = [1, 2, 3];
        this.send(Cmd.CS_LOGIN, csLogin);
    }
    private _receiveHandler(msg: any = null) {
        let byte = new Laya.Byte(msg);
        byte.pos = 0;
        let dataLen = byte.getUint32();
        let cmd = byte.getUint16();
        let defineObj = CmdMap.getInstance().getCmdProtocol(cmd);
        let obj: any = new Object();
        this._scriptPacket.decode(obj, defineObj, byte);
        CmdMap.getInstance().getCmdCallBack(cmd).apply(null, [obj]);
    }
    private _closeHandler(e: any = null) {
        console.log("关闭");
    }
    private _errorHandler(e: any = null) {
        console.log("错误:" + e);
    }
    send(cmd, obj) {
        let tempByte = new Laya.Byte();
        this._scriptPacket.encode(obj, tempByte);
        let len = tempByte.length;
        let byte = new Laya.Byte();
        byte.writeUint32(len + 6);
        byte.writeUint16(cmd);
        byte.writeArrayBuffer(tempByte.buffer, 0, len);
        this._socket.send(byte.buffer);
        byte.clear();

    }
}