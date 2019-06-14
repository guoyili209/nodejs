var BasePacket = require("./BasePacket.js");
var DataType = require("../DataType.js");
var PositionData = function () {
    this.playerId;
    this.x;
    this.y;
    this.rotation;
}
LoginResp.prototype = new BasePacket([
    ["playerId", DataType.STRING],
    ["x", DataType.INT32],
    ["y", DataType.INT32],
    ["rotation",DataType.INT16]
]);
module.exports = PositionData;