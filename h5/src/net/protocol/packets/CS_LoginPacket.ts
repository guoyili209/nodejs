class CS_LoginPacket {
    userName: string;
    pw: string;
    testArr = [];
    defines = [];
    constructor() {
        this.defines = [
            ["userName", DataType.STRING],
            ["pw", DataType.STRING],
            ["testArr", DataType.UINT8, DataType.VECTOR]
        ]
    }
}