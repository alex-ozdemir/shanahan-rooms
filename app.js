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

function isOpen(roomNumber, callback) {
	MongoClient.connect('mongodb://127.0.0.1:27017/shanahan_rooms', function(err,db) {

		var collection = db.collection('time_blocks');
		collection.find({room: roomNumber}).toArray(function (err, results){ 
			for(var i = 0; i < results.length; i++){
				var date = new Date();
				var hour = date.getHours();
				var mins = date.getMinutes();
				console.log("Time: " + hour + ":" + mins);
				var block = results[i];
				console.log("Block: " + block.start_hour + ":" + block.start_min + " - " + block.end_hour + ":" + block.end_min);
				if (isTimeInRangeWrap(hour, mins, block.start_hour, block.start_min, block.end_hour, block.end_min)) {
					callback(false);
					db.close();
					return;
				}
			}
			callback(true);
			db.close();
			return;
		})
	})

}

server.get(/^\/room\/(\w+)$/, function (req, res) {
	var roomNumber = req.params[0];
	isOpen(roomNumber, function (isOpen) {
		if(isOpen) res.send("The room is open!");
		else res.send("The room is closed");
	});
});

server.listen(80);