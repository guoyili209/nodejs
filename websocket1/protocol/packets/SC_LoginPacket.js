var BasePacket = require("./BasePacket.js");
var DataType = require("../DataType.js");
var LoginResp = function () {
    this.ret = "";
    this.x;
    this.y;
}
LoginResp.prototype = new BasePacket([
    ["ret", DataType.INT8],
    ["x", DataType.INT32],
    ["y", DataType.INT32]
]);
module.exports = LoginResp;