var express = require('express');
var server = express();
var MongoClient = require('mongodb').MongoClient

function isOpen(roomNumber, callback) {
	MongoClient.connect('mongodb://127.0.0.1:27017/shanahan_rooms', function(err,db) {

		var collection = db.collection('time_blocks');
		collection.find({room:roomNumber}).toArray(function (err, results){ 
			for(var i = 0; i < results.length; i++){
				var date = new Date();
				var hour = date.getHours();
				var mins = date.getMinutes();
				var block = results[i];
				if(hour >= block.start_hour && hour <= block.end_hour &&
					mins >= block.start_min && mins<= block.end_min){
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
	res.send(String(roomNumber));
});

server.listen(80);