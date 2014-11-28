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
            callback(results);
        })
    })
}

// Get all the blocks from the DB related to this room
function getBlocksByRoom(room, callback) {
    MongoClient.connect('mongodb://127.0.0.1:27017/shanahan_rooms', function(err, db) {

        var collection = db.collection('time_blocks');
        collection.find({room: room}).toArray(function (err, results) {
            callback(results);
        })
    })
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
        var rooms = getRooms(blocks);
        var msg = '<ul>';
        for (var i = 0; i < rooms.length; i++)
            if (Block.isOpen(rooms[i], blocks))
                msg += "<li>" + rooms[i] + "</li>";
        msg += '<ul>';
        res.send("Open rooms: <br />" + msg);
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

server.listen(80);