var express = require('express');
var expressWs = require('express-ws');
var CmdMap = require('./protocol/CmdMap');
var router = express.Router();

var Byte = require("./sockets/Byte.js");
var ScriptPacket = require("./protocol/ScriptPacket.js");
var CS_LoginPacket = require("./protocol/packets/CS_LoginPacket.js");
var SC_LoginPacket = require("./protocol/packets/SC_LoginPacket.js");
var byte = new Byte();
var byte1 = new Byte();
var scriptPacket = new ScriptPacket();
expressWs(router);
router
    .ws('/', function (ws, req) {
        console.log(ws);
        console.log("连接成功");
        ws.on('message', function (msg) {
            byte.copy(msg);
            var dataLen = byte.readUInt32();
            var cmd = byte.readUInt16();
            var defines = CmdMap.getPacket(cmd);
            var obj = {};
            scriptPacket.decode(byte, defines, obj);
            var callBack = CmdMap.getCallBack(cmd);
            callBack.apply(CmdMap.getCaller(cmd), [obj]);
        });
        ws.on("close", function (msg) {
            console.log("client close!");
        })
    })
    .get('/user', function (req, resp) {

    })
    .post('/user', function (req, resp) {

    });
function encode() {
    var buf = Buffer.from()
}

module.exports = router;