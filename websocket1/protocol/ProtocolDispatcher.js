var Dispatcher = require("../events/Dispatcher");
var EventName = require("../events/EventName");
var Cmd = require("../protocol/Cmd");
var ProtocolDispatcher = function () {
    ProtocolDispatcher.dispatcher = function (cmd, ...packet) {
        switch (cmd) {
            case Cmd.CS_LOGIN:
                Dispatcher.emit(EventName.CS_LOGIN, packet);
                break;
            case Cmd.CS_MY_POSITION:
                Dispatcher.emit(EventName.CS_MY_POSITION, packet);
                break;
        }
    }
}