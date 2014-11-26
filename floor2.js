function thisContext(color) {
	context = document.getElementById("canvas-floor1").getContext("2d");
	context.fillStyle = color;
	return context;
}

function drawHorizontalBaseTrap(context, x, y, h, w1, w2) {
	drawPoly(context, [x, y, x + w1, y, x + w2, y + h, x, y + h]);
}

function drawPoly(context, points) {
	context.beginPath();
	context.moveTo(points[0], points[1]);
	for (var i = 2; i < points.length; i += 2)
		context.lineTo(points[i], points[i + 1]);
	context.closePath();
}

function fill2475(color) {
	context = thisContext(color);
	var x = 49;
	var y = 100;
	var height = 76;
	var topBase = 92;
	var botBase = 79;
	drawHorizontalBaseTrap(context, x, y, height, topBase, botBase);
	context.fill();
}

function fill2471(color) {
	context = thisContext(color);
	var x = 49;
	var y = 177;
	var height = 30;
	var topBase = 79;
	var botBase = 75;
	drawHorizontalBaseTrap(context, x, y, height, topBase, botBase);
	context.fill();
}

function fill2465(color) {
	context = thisContext(color);
	var x = 49;
	var y = 206;
	var height = 55;
	var topBase = 75;
	var botBase = 64;
	drawHorizontalBaseTrap(context, x, y, height, topBase, botBase);
	context.fill();
}

function fill2461(color) {
	context = thisContext(color);
	var x = 49;
	var y = 261;
	var lowHeight = 56;
	var highHeigt = 50;
	var topBase = 65;
	var botBase = 56;
	drawPoly(context,
		[x, y,
		x + topBase, y,
		x + botBase, y + lowHeight,
		x, y + highHeigt])
	context.fill();
}