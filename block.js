//block.js

module.exports = {
    OPEN_ROOM: 'open',
    CLOSED_ROOM: 'closed',
    CLOSED_SOON_ROOM: 'yellow',
    getRoomStates: getRoomStates,
	blockToString: blockToString,
	parseReset: parseReset,
	isOpen: isOpen
}

var OPEN_ROOM = 'open';
var CLOSED_ROOM = 'closed';
var CLOSED_SOON_ROOM = 'yellow';

var ROOMS = ['B449','B446','B445','1430b','AG','B454','B450','B442','B460',
             'B480','B470','B467','1480','1430','1470','LR','Cafe','2475',
             '2471','2465','2461','2460','2454','2450','2481','2407','2421',
             '2425','2444','2440','2430','3481','3485','3466','3421','3425',
             '3465','3461','3460'];

// Date which all other dates are sent to the same week as.
var REF_DATE = "January 5, 2014";

// The characters for each day of the week
var DAYSOFWEEK = "SMTWRFA";

// Abbreviations for each day of the week
var DAYSOFWEEKFULL = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Useful
var log = console.log;

function getRoomStates(blocks) {
    var states = {};
    for (var i = 0; i < ROOMS.length; i++)
        if (isOpen(ROOMS[i], blocks))
            states[ROOMS[i]] = OPEN_ROOM;
        else
            states[ROOMS[i]] = CLOSED_ROOM;
    return states;
}


/* Changes a date to be in the week after the refence week
 * -input: a date to change
 * -return: the changed date (original is changed as well)
 */
function normDate(date) {
    std = new Date(REF_DATE);
    weeksLater = Math.floor( (date - std) / 1000 / 3600 / 24 / 7);
    date.setDate(date.getDate() - weeksLater * 7);
    return date;
}

// Formats a time block as a string
function blockToString(block) {
    return "" + block.room + ", " + dateToScheduleTime(block.start) + " - "
        + dateToScheduleTime(block.end); 
}

// Formats the time of a date object (MM:SS)
function dateToScheduleTime(date) {
    return DAYSOFWEEKFULL[date.getDay()] + " " 
        + fixedWidthStr(date.getHours(), 2, '0') + ":" 
        + fixedWidthStr(date.getMinutes(), 2, '0'); 
}

/* makes the string representation of and object a fixed width
 * -input: inp  : thing to convert to string
 * -input: size : number of spaces output should take
 * -input: fill : optional fill character, defaults to ' '
 * -return: a string of length size, filled or trimmed to size
 */
function fixedWidthStr(inp, size, fill) {
    fill = typeof fill == 'undefined' ? ' ' : fill;
    var out = "" + inp;
    var diff = size - out.length;
    var extra = '';
    for(var i = 0; i < diff; i++)
        extra += fill;
    out = extra + out;
    return out.slice(0, size);
}

// Sees if the room is blocked by this block (String Dates).
function isBlocked(room, block) {
	if (block.room == room) {
        start = new Date(block.start);
        end = new Date(block.end);
        if (start < end && now > start && now < end)
            return true;
        else if (start > end && now > start)
            return true;
	}
    return false;
}

// Sees if a room is open according to the given blocks (String Dates)
function isOpen(room, blocks) {
    now = normDate(new Date());
    for (var i = 0; i < blocks.length; i++)
        if (isBlocked(room, blocks[i]))
        	return false;
    return true;
}

// Gets a list of rooms in the blocks
function getRooms(blocks) {
    var rooms = [];
    for (var i = 0; i < blocks.length; i++)
        if (rooms.indexOf(blocks[i].room) == -1) 
            rooms.push(blocks[i].room);
    return rooms
}

// Converts parsedLine objects to block objects
function parsedLinesToBlocks(parsedLines) {
    return parsedLines.map(parsedLineToBlocks).reduce(function(a, b) {
        return a.concat(b);
    }, []);
}

// Converts a parsed line to blocks
function parsedLineToBlocks(parsedLine) {
    var blocks = [];
    var room, day;
    for (var r = 0; r < parsedLine.rooms.length; ++r) {
        room = parsedLine.rooms[r];
        for (var i = 0; i < parsedLine.days.length; ++i) { 
            day = parsedLine.days[i];

            start = new Date(REF_DATE);
            end = new Date(REF_DATE);

            start.setDate(start.getDate() + DAYSOFWEEK.indexOf(day));
            end.setDate(end.getDate() + DAYSOFWEEK.indexOf(day));

            start.setHours(parsedLine.start.hour);
            start.setMinutes(parsedLine.start.min);
            end.setHours(parsedLine.end.hour);
            end.setMinutes(parsedLine.end.min);

            if (start > end) {
                end.setDate(end.getDate() + 1);
            }
            end = normDate(end);
            blocks.push({room: room, start: start, end: end});
        }
    }
    return blocks;
}

// Parses a string of instructions into parsedLin
function parseReset(instructions, callback) {
    var err = "";
    var errLines = [];

    var parsed = [];

    var COMMENT = '#';
    var ROOM = 'ROOM';
    var START = 'CLOSE';
    var END = 'OPEN';
    var DAYS = 'DAYS';
    var keyWords = [ROOM, START, END, DAYS, COMMENT];

    instructions = instructions.replace(/#.*/gm, '');
    instructions = instructions.replace(/\\\s*\n/gm, ' ');
    instructions = instructions.replace(/^\s+/gm, '');
    instructions = instructions.replace(/[\r\n]+/gm, '\n');
    instructions = instructions.replace(/\n\s+/gm, '\n');
    instructions = instructions.replace(/[ \t]+/gm, ' ');
    instructions = instructions.replace(/\s+$/gm, '');

    var lines = instructions.split("\n");

    for (var i = 0 ; i < lines.length; i++) {
        line = lines[i];
        var room, start, end, days;
                  
        function error(msg) {
            if (errLines.indexOf(i) < 0) {
                errLines.push(i);
                err += ("ERROR: " + msg + " in line " + (i + 1) + ":\n" + lines[i] + "\n");
            }
        };

        // Check for comments
        if (line.length == 0 || line[0] == COMMENT)
            continue;

        // Check number of tokens
        if (line.split(" ").length != 8)
            error("Incorrect number of arguments");
        
        // Parse the line
        var re = /^ROOM\s((?:\w+,)*\w+)\sDAYS\s([SMTWRFA]{1,7})\sCLOSE\s(\d{1,2}):(\d{2})\sOPEN\s(\d{1,2}):(\d{2})\s*$/i
        var results = re.exec(line)
        if (results != null) {
            rooms = results[1].split(",");
            days = results[2];
            start_hr = parseInt(results[3]);
            start_min = parseInt(results[4]);
            end_hr = parseInt(results[5]);
            end_min = parseInt(results[6]);
            if (start_hr > 23 || end_hr > 23 || start_min > 59 || end_min > 59)
                error("Could not parse the times");
        } else {
            error("Could not parse expression");
        }

        if (errLines.indexOf(i) < 0) {
            parsed.push({rooms: rooms, days: days,
                    start: {hour: start_hr, min: start_min},
                    end: {hour: end_hr, min: end_min}});
        }
    }
    callback(err, parsedLinesToBlocks(parsed));
}