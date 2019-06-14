var express = require('express');
var expressWs = require('express-ws');
var ws = require('./ws');
var app = express();
expressWs(app);
app.use('/', ws);
var server = app.listen(8002, "172.16.100.31", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为http://" + host + ":" + port);
});

