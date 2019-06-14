var ScriptPacket = /** @class */ (function () {
    function ScriptPacket() {
    }
    ScriptPacket.prototype.encode = function (packetObj, byte) {
        var arr = packetObj.defines;
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            var memenber = arr[i];
            this._writeData(packetObj, memenber, byte);
        }
    };
    ScriptPacket.prototype._writeData = function (packetObj, item, byte) {
        var keyName = item[0];
        var dataType = item[1];
        var data = packetObj[keyName];
        var isVector = item.length == 3 ? true : false;
        if (isVector) {
            var len = data.length;
            byte.writeInt32(len);
            for (var i = 0; i < len; i++) {
                var dataCell = data[i];
                this._writeDataCell(dataType, dataCell, byte);
            }
        }
        else {
            this._writeDataCell(dataType, data, byte);
        }
    };
    ScriptPacket.prototype._writeDataCell = function (dataType, data, byte) {
        if (typeof dataType == 'number') {
            this._writeVal(dataType, data, byte);
        }
        else if (typeof dataType == 'object') {
            this.encode(data, byte);
        }
        else {
            throw new Error("不支持的数据类型:" + dataType.toString());
        }
    };
    ScriptPacket.prototype._writeVal = function (dataType, data, byte) {
        switch (dataType) {
            case DataType.BOOL:
                var val = data == true ? 1 : 0;
                byte.writeByte(val);
                break;
            case DataType.STRING:
                byte.writeUTFString(data);
                break;
            case DataType.INT8:
                byte.writeByte(data);
                break;
            case DataType.INT16:
                byte.writeInt16(data);
                break;
            case DataType.INT32:
                byte.writeInt32(data);
                break;
            case DataType.UINT8:
                byte.writeUint8(data);
                break;
            case DataType.UINT16:
                byte.writeUint16(data);
                break;
            case DataType.UINT32:
                byte.writeUint32(data);
                break;
            case DataType.FLOAT32:
                byte.writeFloat32(data);
                break;
            case DataType.DOUBLE64:
                byte.writeFloat64(data);
                break;
            default:
                throw new Error("不支持的数据类型：" + dataType);
        }
    };
    ScriptPacket.prototype.decode = function (packetObj, defineObj, byte) {
        var arr = defineObj.defines;
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            this._readData(packetObj, arr[i], byte);
        }
    };
    ScriptPacket.prototype._readData = function (packetObj, arrDefine, byte) {
        var keyName = arrDefine[0];
        var dataType = arrDefine[1];
        var isVector = arrDefine.length == 3 ? true : false;
        if (isVector) {
            var len = byte.getInt32();
            var arr = [];
            packetObj[keyName] = arr;
            for (var i = 0; i < len; i++) {
                this._readDataCell(arr, dataType, byte, i);
            }
        }
        else {
            this._readDataCell(packetObj, dataType, byte, keyName);
        }
    };
    ScriptPacket.prototype._readDataCell = function (packetObj, dataType, byte, keyName) {
        if (typeof dataType == 'number') {
            this._readVal(packetObj, dataType, byte, keyName);
        }
        else if (typeof dataType == 'object') {
            var obj = new Object();
            packetObj[keyName] = obj;
            this.decode(obj, dataType, byte);
        }
        else {
            throw new Error("不支持的数据类型");
        }
    };
    ScriptPacket.prototype._readVal = function (packetObj, dataType, byte, keyName) {
        switch (dataType) {
            case DataType.BOOL:
                var val = byte.readByte();
                packetObj[keyName] = val;
                break;
            case DataType.STRING:
                packetObj[keyName] = byte.readUTFString();
                break;
            case DataType.INT8:
                packetObj[keyName] = byte.readByte();
                break;
            case DataType.INT16:
                packetObj[keyName] = byte.getInt16();
                break;
            case DataType.INT32:
                packetObj[keyName] = byte.getInt32();
                break;
            case DataType.UINT8:
                packetObj[keyName] = byte.getUint8();
                break;
            case DataType.UINT16:
                packetObj[keyName] = byte.getUint16();
                break;
            case DataType.UINT32:
                packetObj[keyName] = byte.getUint32();
                break;
            case DataType.FLOAT32:
                packetObj[keyName] = byte.getFloat32();
                break;
            case DataType.DOUBLE64:
                packetObj[keyName] = byte.getFloat64();
                break;
            default:
                throw new Error("不支持的数据类型：" + dataType);
        }
    };
    return ScriptPacket;
}());
//# sourceMappingURL=ScriptPacket.js.map