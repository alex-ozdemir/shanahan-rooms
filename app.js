var express = require('express');
var server = express();
var MongoClient = require('mongodb').MongoClient

function normDate(date) {
	std = new Date("January 5, 2014");
	weeksLater = Math.floor( (date - std) / 1000 / 3600 / 24 / 7);
	date.setDate(date.getDate() - weeksLater * 7);
	return date;
}

function getAllBlocks(callback) {
	MongoClient.connect('mongodb://127.0.0.1:27017/shanahan_rooms', function(err,db) {

		var collection = db.collection('time_blocks');
		collection.find().toArray(function (err, results) {
			callback(results);
		})
	})
}

function getRooms(blocks) {
	var rooms = [];
	for (var i = 0; i < blocks.length; i++)
		if (rooms.indexOf(blocks[i].room) == -1) 
			rooms.push(blocks[i].room);
	return rooms
}

function getBlocksByRoom(room, callback) {
	MongoClient.connect('mongodb://127.0.0.1:27017/shanahan_rooms', function(err, db) {

		var collection = db.collection('time_blocks');
		collection.find({room: room}).toArray(function (err, results) {
			callback(results);
		})
	})
}

function isOpen(room, blocks) {
	now = normDate(new Date());
	console.log(blocks);
	for (var i = 0; i < blocks.length; i++) {
		var block = blocks[i];
		if (block.room == room) {
			start = new Date(block.start);
			end = new Date(block.end);
			console.log(start, end);
			if (now > start && now < end)
				return false;
		}
	}
	return true;
}

server.get(/^\/room\/(\w+)$/, function (req, res) {
	var room = req.params[0];
	getBlocksByRoom(room, function (blocks) {
		if (isOpen(room, blocks)) res.send("The room is open!");
		else res.send("The room is closed");
	});
});

server.get('/rooms/', function (req, res) {
	getAllBlocks(function (blocks) {
		var rooms = getRooms(blocks);
		var msg = '<ul>';
		for (var i = 0; i < rooms.length; i++) {
			if (isOpen(rooms[i], blocks)) msg += "<li>" + rooms[i] + "</li>";
		}
		msg += '<ul>'
		res.send("Open rooms: <br />" + msg);
	})
});

server.get(/^\/block\/(\w*)\/([^\/]*)\/([^\/]*)\/$/, function (req, res) {
	var room = req.params[0];
	var start = normDate(new Date(req.params[1])).toJSON();
	var end = normDate(new Date(req.params[2])).toJSON();
	console.log("Start: " + req.params[1]);
	console.log("  End: " + req.params[2]);
	console.log("Start: " + start);
	console.log("  End: " + end);
	MongoClient.connect('mongodb://127.0.0.1:27017/shanahan_rooms', function(err, db) {
		var collection = db.collection('time_blocks');
		collection.insert({room: room, start: start, end: end}, function(err, rec) {
			res.send("Insert complete, id: " + rec[0]._id);
		})
	})
})

server.listen(80);