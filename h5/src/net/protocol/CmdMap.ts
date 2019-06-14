class CmdMap {
    private static _instance;
    private _callBackDic;
    private _protocolDic;
    constructor() {
        this._callBackDic = new Laya.Dictionary();
        this._protocolDic = new Laya.Dictionary();
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new CmdMap();
        }
        return this._instance;
    }
    registerCmd(cmd, protocol, callBack) {
        this._callBackDic.set(cmd, callBack);
        this._protocolDic.set(cmd, protocol);
    }
    getCmdCallBack(cmd) {
        return this._callBackDic.get(cmd);
    }
    getCmdProtocol(cmd) {
        return this._protocolDic.get(cmd);
    }
}