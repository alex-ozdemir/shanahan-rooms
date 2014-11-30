var express = require('express');
var server = express();
var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var Block = require('./block.js');
var BlockStor = require('./files.js');

// Check is a room is open
server.get(/^\/room\/(\w+)$/, function (req, res) {
    var room = req.params[0];
    // Get all blocks from the DB for this room
    blocks = BlockStor.getBlocksByRoom(room);
    // Report whether its open
    if (Block.isOpen(room, blocks)) res.send("The room is open!");
    else res.send("The room is closed");
});

server.get('/rooms/', function (req, res) {
    blocks = BlockStor.getAllBlocks();
    var states = Block.getRoomStates(blocks);
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

server.get('/reset/', function(req, res) {
    var s = fs.readFileSync("./schedule.txt", {encoding: 'utf-8'});
    Block.parseReset(s, function(err, blocks) {
        if (err) {
            console.log("ERROR parsing schedule!!");
            console.log(err);
            res.send(err);
        }
        else {
            console.log("Inserting: ", blocks);
            BlockStor.insertRecords(blocks);
            out = "";
            for (block in blocks) {
                out += Block.blockToString(blocks[block]) + "<br />";
            }
            res.send(out);
        }
    });
});

server.use(express.static(__dirname + '/static'));

server.listen(80);