var CmdMap = /** @class */ (function () {
    function CmdMap() {
        this._callBackDic = new Laya.Dictionary();
        this._protocolDic = new Laya.Dictionary();
    }
    CmdMap.getInstance = function () {
        if (!this._instance) {
            this._instance = new CmdMap();
        }
        return this._instance;
    };
    CmdMap.prototype.registerCmd = function (cmd, protocol, callBack) {
        this._callBackDic.set(cmd, callBack);
        this._protocolDic.set(cmd, protocol);
    };
    CmdMap.prototype.getCmdCallBack = function (cmd) {
        return this._callBackDic.get(cmd);
    };
    CmdMap.prototype.getCmdProtocol = function (cmd) {
        return this._protocolDic.get(cmd);
    };
    return CmdMap;
}());
//# sourceMappingURL=CmdMap.js.map