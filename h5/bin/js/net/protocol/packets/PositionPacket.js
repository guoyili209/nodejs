var PositionPacket = /** @class */ (function () {
    function PositionPacket() {
    }
    PositionPacket.SC_PositionUpdate = {
        positionData: [],
        defines: [
        // ["positionData", PositionPacket.PositionData,DataType.VECTOR]
        ]
    };
    PositionPacket.PositionData = {
        playerId: "",
        x: 0,
        y: 0,
        rotation: 0,
        defines: [
        // ["playerId", DataType.STRING],
        // ["x", DataType.INT32],
        // ["y", DataType.INT32],
        // ["rotation", DataType.INT16]
        ]
    };
    PositionPacket.CS_MyPosition = {
        x: 0,
        y: 0,
        defines: [
        // ["x", DataType.INT32],
        // ["y", DataType.INT32]
        ]
    };
    return PositionPacket;
}());
//# sourceMappingURL=PositionPacket.js.map