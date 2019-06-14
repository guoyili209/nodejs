var BasePacket = require("./BasePacket.js");
var DataType = require("../DataType.js");
var LoginReq = function () {
    this.nick = "";
    this.pw = "";
    this.testArr = [];
}
LoginReq.prototype = new BasePacket([
    ["nick", DataType.STRING],
    ["pw", DataType.STRING],
    ["testArr", DataType.UINT8, DataType.VECTOR]
]);
module.exports = LoginReq;