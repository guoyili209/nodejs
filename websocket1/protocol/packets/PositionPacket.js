var BasePacket = require("./BasePacket.js");
var DataType = require("../DataType.js");
var PositionData = require("./PositionData.js");
var PositionPacket = function () {
}
PositionPacket.SC_PositionUpdate = {
    positionData: [],
    defines: [
        ["positionData", PositionPacket.PositionData, DataType.VECTOR]
    ]
}
PositionPacket.PositionData = {
    playerId: "",
    x: 0,
    y: 0,
    rotation: 0,
    defines: [
        ["playerId", DataType.STRING],
        ["x", DataType.INT32],
        ["y", DataType.INT32],
        ["rotation", DataType.INT16]
    ]
}
module.exports = PositionUpdate;