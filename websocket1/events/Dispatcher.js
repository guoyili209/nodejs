var Emitter = require("events");
var Dispatcher = function () {
    var _emitter = new Emitter();
    var _t = this;
    Dispatcher.emit = function (eventName, ...args) {
        _emitter.emit(eventName, args);
    }
    Dispatcher.on = function (eventName, callBack) {
        _emitter.on(eventName, callBack);
    }
    Dispatcher.off = function (eventName, callBack) {
        _emitter.off(eventName, callBack);
    }
}