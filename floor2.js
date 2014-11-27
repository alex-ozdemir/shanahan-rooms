function getContext(canvasid, color) {
	context = document.getElementById(canvasid).getContext("2d");
	context.fillStyle = color;
	return context;
} 

function placeImage(canvasid, filename) {
	var img = new Image();
	img.src = filename;
	img.alt = filename;
	img.onload = function() {
		if (img.complete) {
			console.log("Native Image height:", img.naturalHeight);
			console.log("Native Image width:", img.naturalWidth);
			var canvas = document.getElementById(canvasid)
			var context = canvas.getContext("2d");          	
			context.drawImage(img,
							  0, 0, img.naturalWidth, img.naturalHeight,
							  0, 0, canvas.width, canvas.height);
		}
		else {
			console.log("Image failed to load");
		}
	};
}

function drawHorizontalBaseTrap(context, x, y, h, w1, w2) {
	drawPoly(context, [x, y, x + w1, y, x + w2, y + h, x, y + h]);
}

function drawVerticalBaseTrap(context, x, y, h1, h2, w) {
	drawPoly(context, [x, y, x + w, y + h1 - h2, x + w, y + h2, x, y + h2]);
}

function drawRect(context, x, y, w, h) {
	drawPoly(context, [x, y, x + w, y, x + w, y + h, x, y + h]);
}

function drawPoly(context, points) {
	context.beginPath();
	context.moveTo(points[0], points[1]);
	for (var i = 2; i < points.length; i += 2)
		context.lineTo(points[i], points[i + 1]);
	context.closePath();
}

function fill2475(color) {
	context = getContext("canvas-floor2", color);
	var x = 49;
	var y = 100;
	var height = 76;
	var topBase = 92;
	var botBase = 79;
	drawHorizontalBaseTrap(context, x, y, height, topBase, botBase);
	context.fill();
}

function fill2471(color) {
	context = getContext("canvas-floor2", color);
	var x = 49;
	var y = 177;
	var height = 30;
	var topBase = 79;
	var botBase = 75;
	drawHorizontalBaseTrap(context, x, y, height, topBase, botBase);
	context.fill();
}

function fill2465(color) {
	context = getContext("canvas-floor2", color);
	var x = 49;
	var y = 206;
	var height = 57;
	var topBase = 75;
	var botBase = 64;
	drawHorizontalBaseTrap(context, x, y, height, topBase, botBase);
	context.fill();
}

function fill2461(color) {
	context = getContext("canvas-floor2", color);
	var x = 49;
	var y = 263;
	var lowHeight = 54;
	var highHeigt = 48;
	var topBase = 65;
	var botBase = 56;
	drawPoly(context,
		[x, y,
		x + topBase, y,
		x + botBase, y + lowHeight,
		x, y + highHeigt])
	context.fill();
}

function fill2460(color) {
	context = getContext("canvas-floor2", color);
	var x = 5;
	var y = 328;
	var leftH = 95;
	var rightH = 85;
	var w = 83;
	drawVerticalBaseTrap(context, x, y, leftH, rightH, w);
	context.fill();
}

function fill2454(color) {
	context = getContext("canvas-floor2", color);
	var x = 87;
	var y = 338;
	var leftH = 85;
	var rightH = 75;
	var w = 86;
	drawVerticalBaseTrap(context, x, y, leftH, rightH, w);
	context.fill();
}

function fill2450(color) {
	context = getContext("canvas-floor2", color);
	var x = 173;
	var y = 348;
	var leftH = 73;
	var rightH = 64;
	var w = 80;
	drawVerticalBaseTrap(context, x, y, leftH, rightH, w);
	context.fill();
}


function fill2481(color) {
	context = getContext("canvas-floor2", color);
	var x = 5;
	var y = 100;
	var h = 30;
	var w = 44;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill2407(color) {
	context = getContext("canvas-floor2", color);
	var x = 253;
	var y = 72;
	var h = 52;
	var w = 74;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill2421(color) {
	context = getContext("canvas-floor2", color);
	context.fillStyle = "#afa";
	var x = 253;
	var y = 225;
	var h = 50;
	var w = 74;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill2425(color) {
	context = getContext("canvas-floor2", color);
	var x = 253;
	var y = 275;
	var h = 46;
	var w = 74;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill2444(color) {
	context = getContext("canvas-floor2", color);
	var x = 253;
	var y = 368;
	var h = 44;
	var w = 38;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill2440(color) {
	context = getContext("canvas-floor2", color);
	var x = 291;
	var y = 350;
	var h = 62;
	var w = 102;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill2430(color) {
	context = getContext("canvas-floor2", color);
	var x = 349;
	var y = 318;
	var h = 33;
	var w = 44;
	drawRect(context, x, y, w, h);
	context.fill();
}