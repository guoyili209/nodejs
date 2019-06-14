class SC_LoginPacket{
    ret;
    x;
    y;
    defines=[];
    constructor(){
        this.defines=[
            ["ret",DataType.INT8],
            ["x",DataType.INT32],
            ["y",DataType.INT32]
        ]   
    }
}