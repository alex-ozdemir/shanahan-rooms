var express = require('express');
var server = express();

server.get(/^\/room\/(\w+)$/, function (req, res) {
	var roomNumber = req.params[0];
	res.send(String(roomNumber));
});

server.listen(80);