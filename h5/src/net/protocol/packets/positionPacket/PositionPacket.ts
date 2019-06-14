interface IPositionData {
    playerId: string;
    x: number;
    y: number;
    rotation: number;
}
let PositionData = {
    defines: [
        ["playerId", DataType.STRING],
        ["x", DataType.INT32],
        ["y", DataType.INT32],
        ["rotation", DataType.INT16]
    ]
};
interface ISC_PositionUpdate {
    positionData: Array<IPositionData>;
}
let SC_PositionUpdate = {
    defines: [
        ["positionData", PositionData, DataType.VECTOR]
    ]
};
interface ICS_MyPosition {
    x: number;
    y: number;
}
let CS_MyPosition = {
    defines: [
        ["x", DataType.INT32],
        ["y", DataType.INT32]
    ]
}