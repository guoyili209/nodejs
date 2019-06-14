var CmdMap = require('../protocol/CmdMap');
var Cmd = require('../protocol/Cmd');
var CS_LoginPacket = require('../protocol/packets/CS_LoginPacket');
var SC_LoginPacket = require('../protocol/packets/SC_LoginPacket');
var Login = function () {
    CmdMap.registerCmd(Cmd.CS_LOGIN, new CS_LoginPacket, _csLogin);
    function _csLogin(packet) {
        scriptPacket.encode(scLogin, scLogin, byte1);
        var newbyte = new Byte();
        newbyte.writeUInt32(byte1.getLength() + 6);
        newbyte.writeUInt16(1);
        newbyte.copy(byte1.getBuffer(), newbyte.pos);
        ws.send(newbyte.getArrayBuffer());
    }
}