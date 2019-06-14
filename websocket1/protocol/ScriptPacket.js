var DataType = require("./DataType.js");
var ScriptPacket = function () {
    //
    this.encode = function (packetObj, defineObj, byte) {
        var defineArr = defineObj.defines;
        for (var i = 0; i < defineArr.length; i++) {
            var memenber = defineArr[i];
            if (!writeData(packetObj, memenber, byte)) {
                console.log("serialize writeData error!");
                return false;
            }
        }
        return true;
    }
    function writeData(packetObj, defineArr, byte) {
        var keyName = defineArr[0];
        var keyType = defineArr[1];
        var isVector = defineArr.length == 3 ? true : false;
        if (isVector) {
            var data = packetObj[keyName];
            var len = data.length;
            //写入数组长度
            byte.writeInt32(len);
            for (var i = 0; i < len; i++) {
                var dataCell = data[i];
                writeDataCell(dataCell, keyType, byte);
            }
        } else {
            data = packetObj[keyName];
            writeDataCell(data, keyType, byte);
        }
        return true;
    }
    function writeDataCell(data, dataType, byte) {
        if (typeof dataType == 'number') {
            //直接写入数据
            writeValue(data, dataType, byte);
        } else if (typeof dataType == 'object') {
            this.encode(data, dataType, byte);
        } else {
            console.warn("doesn't exsist type:" + dataType);
            return false;
        }
        return true;
    }
    function writeValue(data, dataType, byte) {
        switch (dataType) {
            case DataType.INT8:
                byte.writeInt8(data);
                break;
            case DataType.STRING:
                byte.writeUTFString(data);
                break;
            case DataType.BOOL:
                var val = Boolean(data) == true ? 1 : 0;
                byte.writeUInt8(val);
                break;
            case DataType.UINT8:
                byte.writeUInt8(data);
                break;
            case DataType.UINT16:
                byte.writeUInt16(data);
                break;
            case DataType.UINT32:
                byte.writeUInt32(data);
                break;
            case DataType.UINT48:
                byte.writeUInt48(data);
                break;
            case DataType.INT8:
                byte.writeInt8(data);
                break;
            case DataType.INT16:
                byte.writeInt16(data);
                break;
            case DataType.INT32:
                byte.writeInt32(data);
                break;
            case DataType.INT48:
                byte.writeInt48(data);
                break;
            case DataType.FLOAT32:
                byte.readFloat32(data);
                break;
            case DataType.DOUBLE64:
                byte.readDouble64(data);
                break;
        }
    }
    //
    this.decode = function (byte, definesObj, packetObj) {
        var definesArr = definesObj.defines;
        for (var i = 0; i < definesArr.length; i++) {
            var memenber = definesArr[i];
            if (readData(byte, memenber, packetObj) == false) {
                return false;
            }
        }
        return true;
    }
    function readData(byte, defineArr, packetObj) {
        var keyName = defineArr[0];
        var keyType = defineArr[1];
        var isVector = defineArr.length == 3 ? true : false;
        if (isVector) {
            var len = byte.readInt32();
            var arr = [];
            packetObj[keyName] = arr;
            for (var i = 0; i < len; i++) {
                readDataCell(byte, keyType, i, arr);
            }
        } else {
            readDataCell(byte, keyType, keyName, packetObj);
        }
        return true;
    }
    function readDataCell(byte, keyType, keyName, packetObj) {
        if (typeof keyType == 'object') {
            var obj = new Object();
            packetObj[keyName] = obj;
            this.decode(byte, keyType, obj);
            return true;
        }
        switch (Number(keyType)) {
            case DataType.BOOL:
                var val = byte.readUInt8();
                var b = (val == 1) ? true : false;
                packetObj[keyName] = b;
                break;
            case DataType.STRING:
                packetObj[keyName] = byte.readUTFString();
                break;
            case DataType.UINT8:
                packetObj[keyName] = byte.readUInt8();
                break;
            case DataType.UINT16:
                packetObj[keyName] = byte.readUInt16();
                break;
            case DataType.UINT32:
                packetObj[keyName] = byte.readUInt32();
                break;
            case DataType.UINT48:
                packetObj[keyName] = byte.readUInt48();
                break;
            case DataType.INT8:
                packetObj[keyName] = byte.readUInt8();
                break;
            case DataType.INT16:
                packetObj[keyName] = byte.readUInt16();
                break;
            case DataType.INT32:
                packetObj[keyName] = byte.readUInt32();
                break;
            case DataType.INT48:
                packetObj[keyName] = byte.readUInt48();
                break;
            case DataType.FLOAT32:
                packetObj[keyName] = byte.readFloat32();
                break;
            case DataType.DOUBLE64:
                packetObj[keyName] = byte.readDouble64();
                break;
        }
        return true;
    }
}
module.exports = ScriptPacket;