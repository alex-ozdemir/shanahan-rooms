var express = require('express');
var server = express();
var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var Block = require('./block.js');

// Get all the blocks from the db
function getAllBlocks(callback) {
    MongoClient.connect('mongodb://127.0.0.1:27017/shanahan_rooms', function(err,db) {

        var collection = db.collection('time_blocks');
        collection.find().toArray(function (err, results) {
            if (err)
                console.log(err);
            callback(results);
        });
    });
}

// Get all the blocks from the DB related to this room
function getBlocksByRoom(room, callback) {
    MongoClient.connect('mongodb://127.0.0.1:27017/shanahan_rooms', function(err, db) {

        var collection = db.collection('time_blocks');
        collection.find({room: room}).toArray(function (err, results) {
            callback(results);
        });
    });
}

// Reset the DB's blocks and then inserts the new ones
// callback(String err, String out) err will be "" if no error
function resetBlocks(blocks, callback) {
    MongoClient.connect('mongodb://127.0.0.1:27017/shanahan_rooms', function(err, db) {
        var collection = db.collection('time_blocks');
        collection.remove({}, function (err, rec) {
            if (err)
                callback("Time Blocks could not be cleared","");
            else
                collection.insert(blocks , function(err, rec) {
                    out = ""
                    for (var i in rec) {
                        out += Block.blockToString(rec[i]) + "\n";
                    }
                    callback(err, out);
                });
        });
    });
}

// Check is a room is open
server.get(/^\/room\/(\w+)$/, function (req, res) {
    var room = req.params[0];
    // Get all blocks from the DB for this room
    getBlocksByRoom(room, function (blocks) {
        // Report whether its open
        if (Block.isOpen(room, blocks)) res.send("The room is open!");
        else res.send("The room is closed");
    });
});

server.get('/rooms/', function (req, res) {
    getAllBlocks(function (blocks) {
        var states = Block.getRoomStates(blocks);
        console.log(states);
        for (room in states) {
            if (states[room] == Block.OPEN_ROOM)
                states[room] = "#afa";
            else if (states[room] == Block.CLOSED_ROOM)
                states[room] = "#faa";
            else
                console.log("Room state not recognized:", states[room]);
        }
        res.render('shanahan-joined.ejs', {rooms: states});
    });
});

server.get('/reset/', function(req, res) {
    var s = fs.readFileSync("./schedule.txt", {encoding: 'utf-8'});
    Block.parseReset(s, function(err, blocks) {
        if (err) {
            console.log("ERROR parsing schedule!!");
            console.log(err);
            res.send(err);
        }
        else {
            resetBlocks(blocks, function(err, out) {
                if (err != null) {
                    res.send(err.replace(/\n/gm, '<br />'));
                    console.log("ERROR resetting database!!");
                }
                else {
                    res.send(out.replace(/\n/gm, '<br />'));
                    console.log(out);
                }
            });
        }
    });
});

server.use(express.static(__dirname + '/static'));

server.listen(80);