var express = require('express');
var server = express();
var MongoClient = require('mongodb').MongoClient

function isTimeInRangeWrap(hour, min, start_hour, start_min, end_hour, end_min) {
	if (isTimeAfter(start_hour, start_min, end_hour, end_min))	{
		console.log("Inverted Range");
		return !isTimeInRange(hour, min, end_hour, end_min, start_hour, start_min);
	}
	else return isTimeInRange(hour, min, start_hour, start_min, end_hour, end_min);
}

function isTimeInRange(hour, min, start_hour, start_min, end_hour, end_min) {
	var after = isTimeAfter(hour, min, start_hour, start_min);
	var before = isTimeBefore(hour, min, end_hour, end_min);
	return after && before;
}

function isTimeAfter(hour, min, ref_hour, ref_min) {
	if (hour != ref_hour) return (hour > ref_hour);
	else return (min >= ref_min);
}
function isTimeBefore(hour, min, ref_hour, ref_min) {
	if (hour != ref_hour) return (hour < ref_hour);
	else return (min <= ref_min);
}

// function isOpen(roomNumber) {
// 	MongoClient.connect('mongodb://127.0.0.1:27017/shanahan_rooms', function(err,db) {

// 		var collection = db.collection('time_blocks');
// 		collection.find({room: roomNumber}).toArray(function (err, results){ 
// 			for(var i = 0; i < results.length; i++){
// 				var date = new Date();
// 				var hour = date.getHours();
// 				var mins = date.getMinutes();
// 				console.log("Time: " + hour + ":" + mins);
// 				var block = results[i];
// 				console.log("Block: " + block.start_hour + ":" + block.start_min + " - " + block.end_hour + ":" + block.end_min);
// 				if (isTimeInRangeWrap(hour, mins, block.start_hour, block.start_min, block.end_hour, block.end_min)) {
// 					callback(false);
// 					db.close();
// 					return;
// 				}
// 			}
// 			callback(true);
// 			db.close();
// 			return;
// 		})
// 	})
// }

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
	for (var i = 0; i < blocks.length; i++) {
		var block = blocks[i];
		if (block.room == room) {
			var date = new Date();
			var hour = date.getHours();
			var mins = date.getMinutes();
 			console.log("Time: " + hour + ":" + mins);
			console.log("Block: " + block.start_hour + ":" + block.start_min + " - " + block.end_hour + ":" + block.end_min);
			if (isTimeInRangeWrap(hour, mins, block.start_hour, block.start_min, block.end_hour, block.end_min))
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

server.listen(80);