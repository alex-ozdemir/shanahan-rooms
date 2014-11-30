// files.js

fs = require('fs');

module.exports = {

}

var log = console.log;
var DATAPATH = './data/';
var EXT = '.block';

function makeDeepDir(path) {
	if (fs.exists(path))
		return true;
	dirs = path.split('/').reverse();
	current = './';
	while (dirs.length > 0) {	
		dir = dirs.pop();
		if (dir == '' || dir == './')
			continue;
		current += '/' + dir;
		try {
			fs.mkdirSync(current);
		} catch (err) {
			// The directory exists, continue
		}

	}
}

function forceWrite(path, msg) {
	dirpah = "./"
	for (var i = path.length - 1; i >= 0; i++) {
		if (path[i] == '/') {
			dirpath = path.slice(0, i);
		}
	}
	makeDeepDir(dirpath);
	writeFileSync(path, msg);
}

function checkStorageExists() {
	if (!fs.existsSync(DATAPATH)) {
		log("ERROR, the path to the block storage does not exist! It is:", DATAPATH);
		log("^The block storage most likely needs to be reset.");
		throw "Block Storage does not exist";
	}
}

function getAllBlocks() {
	checkStorageExists();

	room_files = fs.readdirSync(DATAPATH);
	room_files.map(function (filename) {
		if filename.slice(filename.indexOf('.'))
			return JSON.parse(fs.readFileSync(DATAPATH + filename));
		else
			return [];
	});
	return room_files.reduce(function (a,b) {a.concat(b)});
}

function getBlocksByRoom(room) {
	checkStorageExists();
	if (!fs.existsSync(DATAPATH + room + EXT))
		return [];
	else
		return JSON.parse(fs.readFileSync(DATAPATH + room + EXT));
}

function insertRecords(pathToDir, records) {
	recordsByRoom = {}
	for (var i = 0; i < records.length; i++) {
		if (!recordsByRoom[records[i].room])
			recordsByRoom[records[i].room] = [records[i]];
		else
			recordsByRoom[records[i]].push(records[i]);
	}
	log("Records, by room: ", recordsByRoom);
	for (room in recordsByRoom) {
		forceWrite(DATAPATH + room + EXT, JSON.stringify(recordsByRoom[room]));
	}
}


function ocomp(a, b) {
	if (typeof(a) == typeof(b) && typeof(a) != 'object')
		return a == b;
	else {
		for (i in a)
			if (a[i] != b[i])
				return false;
		for (i in b)
			if (a[i] != b[i])
				return false;
		return true;
	}
}