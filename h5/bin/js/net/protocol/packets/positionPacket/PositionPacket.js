var PositionPacket = /** @class */ (function () {
    function PositionPacket() {
    }
    PositionPacket.SC_PositionUpdate = new BasePakcet([
        ["positionData", PositionPacket.PositionData, DataType.VECTOR]
    ]);
    PositionPacket.PositionData = new BasePakcet([
        ["playerId", DataType.STRING],
        ["x", DataType.INT32],
        ["y", DataType.INT32],
        ["rotation", DataType.INT16]
    ]);
    PositionPacket.CS_MyPosition = new BasePakcet([
        ["x", DataType.INT32],
        ["y", DataType.INT32]
    ]);
    return PositionPacket;
}());
//# sourceMappingURL=PositionPacket.js.map