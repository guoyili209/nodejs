var Dictionary = require('../utils/Dictionary');
var CmdMap = function () {
    var cmdToPacket = new Dictionary();
    var cmdToCallBack = new Dictionary();
    var cmdToCaller = new Dictionary();
    function _registerCmd(cmd, packet, callback, caller) {
        cmdToPacket.set(cmd, packet);
        cmdToCallBack.set(cmd, callback);
        cmdToCaller.set(cmd, caller);
    }
    function _getPacket(cmd) {
        return cmdToPacket.get(cmd);
    }
    function _getCallBack(cmd) {
        return cmdToCallBack.get(cmd);
    }
    function _getCaller(cmd) {
        return cmdToCaller.get(cmd);
    }
    CmdMap.registerCmd = _registerCmd;
    CmdMap.getPacket = _getPacket;
    CmdMap.getCallBack = _getCallBack;
    CmdMap.getCaller = _getCaller;
}
module.exports = CmdMap;