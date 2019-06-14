var Byte = function (dataLength) {
    var _allocated = 8;
    var _u8d = null;
    var _buffer = null;
    var _pThis = this;
    this.endian = Byte.LITTLE_ENDIAN;
    this.pos = 0;
    if (dataLength) {
        _u8d = new Uint8Array(dataLength);
        _buffer = Buffer.from(_u8d.buffer);
    } else {
        _resizeBuffer(_allocated);
    }
    this.getArrayBuffer = function () {
        return _buffer.buffer;
    }
    this.getBuffer = function () {
        return _buffer;
    }
    this.copy = function (buf,pos) {
        _ensureWrite(buf.length+pos);
        buf.copy(_buffer, pos, 0, buf.length);
        this.pos = 0;
    }
    this.getLength = function () {
        return _buffer.length;
    }
    this.getByteLength = function () {
        return this._buffer.byteLength;
    }
    this.getString = function () {
        return _rUTF(this.readUInt16());
    }
    this.readUInt8 = function () {
        if (this.pos + 1 > _getLength()) {
            throw "readUInt8 error - Out of bounds";
        }
        var v = _buffer.readInt8(this.pos);
        this.pos += 1;
        return v;
    }
    this.readUInt16 = function () {
        if (this.pos + 2 > _getLength()) {
            throw "readUInt16 error - Out of bounds";
        }
        var v;
        if (this.endian == Byte.LITTLE_ENDIAN) {
            v = _buffer.readUInt16LE(this.pos);
        } else {
            v = _buffer.readUInt16BE(this.pos);
        }
        this.pos += 2;
        return v;
    }
    this.readUInt32 = function () {
        if (this.pos + 4 > _getLength()) {
            throw "readUInt32 error - Out of bounds";
        }
        var v;
        if (this.endian == Byte.LITTLE_ENDIAN) {
            v = _buffer.readUInt32LE(this.pos);
        } else {
            v = _buffer.readUInt32BE(this.pos);
        }
        this.pos += 4;
        return v;
    }
    this.readUInt48 = function () {
        if (this.pos + 6 > _getLength()) {
            throw "readUInt48 error - Out of bounds";
        }
        var v;
        if (this.endian == Byte.LITTLE_ENDIAN) {
            v = _buffer.readUInt48LE(this.pos);
        } else {
            v = _buffer.readUInt48BE(this.pos);
        }
        this.pos += 6;
        return v;
    }
    this.readInt8 = function () {
        if (this.pos + 1 > _getLength()) {
            throw "readInt8 error - Out of bounds";
        }
        var v = _buffer.readInt8(this.pos);
        this.pos += 1;
        return v;
    }
    this.readInt16 = function () {
        if (this.pos + 2 > _getLength()) {
            throw "readInt16 error - Out of bounds";
        }
        var v;
        if (this.endian == Byte.LITTLE_ENDIAN) {
            v = _buffer.readInt16LE(this.pos);
        } else {
            v = _buffer.readInt16BE(this.pos);
        }
        this.pos += 2;
        return v;
    }
    this.readInt32 = function () {
        if (this.pos + 4 > _getLength()) {
            throw "readInt32 error - Out of bounds";
        }
        var v;
        if (this.endian == Byte.LITTLE_ENDIAN) {
            v = _buffer.readInt32LE(this.pos);
        } else {
            v = _buffer.readInt32BE(this.pos);
        }
        this.pos += 4;
        return v;
    }
    this.readInt48 = function () {
        if (this.pos + 6 > _getLength()) {
            throw "readInt48 error - Out of bounds";
        }
        var v;
        if (this.endian == Byte.LITTLE_ENDIAN) {
            v = _buffer.readInt48LE(this.pos);
        } else {
            v = _buffer.readInt48BE(this.pos);
        }
        this.pos += 6;
        return v;
    }
    this.readFloat32 = function () {
        if (this.pos + 4 > _getLength()) {
            throw "readFloat32 error - Out of bounds";
        }
        var v;
        if (this.endian == Byte.LITTLE_ENDIAN) {
            v = _buffer.readFloatLE(this.pos);
        } else {
            v = _buffer.readFloatBE(this.pos);
        }
        this.pos += 4;
        return v;
    }
    this.readDouble64 = function () {
        if (this.pos + 8 > _getLength()) {
            throw "readDouble64 error - Out of bounds";
        }
        var v;
        if (this.endian == Byte.LITTLE_ENDIAN) {
            v = _buffer.readDoubleLE(this.pos);
        } else {
            v = _buffer.readDoubleBE(this.pos);
        }
        this.pos += 8;
        return v;
    }
    this.getBytesAvailable = function () {
        return this.byteLength - this.pos;
    }
    this.readUTFString = function () {
        return _readUTFBytes(this.readUInt16());
    }
    this.writeInt8 = function (value) {
        _ensureWrite(this.pos + 1);
        _buffer.writeInt8(value, this.pos);
        this.pos += 1;
        this.byteLength += 1;
    }
    this.writeInt16 = function (value) {
        _ensureWrite(this.pos + 2);
        if (this.endian == Byte.LITTLE_ENDIAN) {
            _buffer.writeInt16LE(value, this.pos);
        } else {
            _buffer.writeInt16BE(value, this.pos);
        }
        this.pos += 2;
        this.byteLength += 2;
    }
    this.writeInt32 = function (value) {
        _ensureWrite(this.pos + 4);
        if (this.endian == Byte.LITTLE_ENDIAN) {
            _buffer.writeInt32LE(value, this.pos);
        } else {
            _buffer.writeInt32BE(value, this.pos);
        }
        this.pos += 4;
        this.byteLength += 4;
    }
    this.writeInt48 = function (value) {
        _ensureWrite(this.pos + 6);
        if (this.endian == Byte.LITTLE_ENDIAN) {
            _buffer.writeInt48LE(value, this.pos);
        } else {
            _buffer.writeInt48BE(value, this.pos);
        }
        this.pos += 6;
        this.byteLength += 6;
    }
    this.writeUInt8 = function (value) {
        _ensureWrite(this.pos + 1);
        _buffer.writeUInt8(value, this.pos);
        this.pos += 1;
        this.byteLength += 1;
    }
    this.writeUInt16 = function (value) {
        _ensureWrite(this.pos + 2);
        if (this.endian == Byte.LITTLE_ENDIAN) {
            _buffer.writeUInt16LE(value, this.pos);
        } else {
            _buffer.writeUInt16BE(value, this.pos);
        }
        this.pos += 2;
        this.byteLength += 2;
    }
    this.writeUInt32 = function (value) {
        _ensureWrite(this.pos + 4);
        if (this.endian == Byte.LITTLE_ENDIAN) {
            _buffer.writeUInt32LE(value, this.pos);
        } else {
            _buffer.writeUInt32BE(value, this.pos);
        }
        this.pos += 4;
        this.byteLength += 4;
    }
    this.writeUInt48 = function (value) {
        _ensureWrite(this.pos + 6);
        if (this.endian == Byte.LITTLE_ENDIAN) {
            _buffer.writeUInt48LE(value, this.pos);
        } else {
            _buffer.writeUInt48BE(value, this.pos);
        }
        this.pos += 6;
        this.byteLength += 6;
    }
    this.writeFloat32 = function (value) {
        _ensureWrite(this.pos + 4);
        if (this.endian == Byte.LITTLE_ENDIAN) {
            _buffer.writeFloatLE(value, this.pos);
        } else {
            _buffer.writeFloatBE(value, this.pos);
        }
        this.pos += 4;
        this.byteLength += 4;
    }
    this.writeDouble64 = function (value) {
        _ensureWrite(this.pos + 8);
        if (this.endian == Byte.LITTLE_ENDIAN) {
            _buffer.writeDoubleLE(value, this.pos);
        } else {
            _buffer.writeDoubleBE(value, this.pos);
        }
        this.pos += 8;
        this.byteLength += 8;
    }
    this.writeUTFString = function (value) {
        var tPos = this.pos;
        this.writeUInt16(1);
        _writeUTFBytes(value);
        var strLen = this.pos - tPos - 2;
        if (strLen >= 65536) {
            throw "writeUTFString byte len more than 65536";
        }
        if (this.endian == Byte.LITTLE_ENDIAN) {
            _buffer.writeUInt16LE(strLen, tPos);
        } else {
            _buffer.writeUInt16BE(strLen, tPos);
        }
        this.byteLength += (strLen + 2);
    }
    function _writeUTFBytes(value) {
        value = value + "";
        for (var i = 0, sz = value.length; i < sz; i++) {
            var c = value.charCodeAt(i);
            if (c <= 0x7f) {
                _pThis.writeInt8(c);
            } else if (c <= 0x7ff) {
                _ensureWrite(_pThis.pos + 2);
                _u8d.set([0xc0 | (c >> 6), 0x80 | (c & 0x3f)], _pThis.pos);
                _pThis.pos += 2;
            } else if (c <= 0xffff) {
                _ensureWrite(_pThis.pos + 3);
                _u8d.set([0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f)], _pThis.pos);
                _pThis.pos += 3;
            } else {
                _ensureWrite(_pThis.pos + 4);
                _u8d.set([0xf0 | (c >> 18), 0x80 | ((c >> 12) & 0x3f), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f)], _pThis.pos);
                _pThis.pos += 4;
            }
        }
    }

    function _resizeBuffer(len) {
        var newU8 = new Uint8Array(len);
        if (_u8d != null) {
            if (_u8d.length <= len) {
                newU8.set(_u8d);
            } else {
                newU8.set(_u8d.subarray(0, len));
            }
        }
        _u8d = newU8;
        _buffer = Buffer.from(_u8d.buffer);
    }
    function _ensureWrite(value) {
        if (_getLength() < value) {
            _resizeBuffer(_allocated = Math.floor(Math.max(value, _allocated * 2)));
        }/*  else if (_allocated > value) {
            _resizeBuffer(_allocated = value);
        } */
    }
    function _rUTF(len) {
        var v = "", max = _pThis.pos + len, c = 0, c2 = 0, c3 = 0, f = String.fromCharCode;
        var u = _u8d, i = 0;
        while (_pThis.pos < max) {
            c = u[_pThis.pos++];
            if (c < 0x80) {
                if (c != 0) {
                    v += f(c);
                }
            } else if (c < 0xe0) {
                v += f(((c & 0x3f) << 6) | (u[_pThis.pos++] & 0x7f));
            } else if (c < 0xf0) {
                c2 = u[_pThis.pos++];
                v += f(((c & 0x1f) << 12) | ((c2 & 0x7f) << 6) | (u[_pThis.pos++] & 0x7f));
            } else {
                c2 = u[_pThis.pos++];
                c3 = u[_pThis.pos++];
                v += f(((c & 0x0f) << 18) | ((c2 & 0x7f) << 12) | ((c3 << 6) & 0x7f) | (u[_pThis.pos++] & 0x7f));
            }
            i++;
        }
        return v;
    }
    function _readUTFBytes(len) {
        (len === void 0) && (len = -1)
        if (len == 0)
            return "";
        var lastBytes = _pThis.getBytesAvailable();
        if (len > lastBytes)
            throw "readUTFBytes error - Out of bounds";
        len = len > 0 ? len : lastBytes;
        return _rUTF(len);
    }
    function _getLength() {
        return _buffer.length;
    }
}
Byte.BIG_ENDIAN = "bigEndian";
Byte.LITTLE_ENDIAN = "littleEndian";
module.exports = Byte;