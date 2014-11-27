function thisContext(color) {
	context = document.getElementById("canvas-floor3").getContext("2d");
	context.fillStyle = color;
	return context;
}

function drawHorizontalBaseTrap(context, x, y, h, w1, w2) {
	drawPoly(context, [x, y, x + w1, y, x + w2, y + h, x, y + h]);
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

function fill3481(color) {
	context = thisContext(color)
	var x = 70;
	var y = 138;
	var w = 99;
	var h = 50;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill3485(color) {
	context = thisContext(color)
	var x = 170;
	var y = 138;
	var w = 78;
	var h = 50;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill3466(color) {
	context = thisContext(color)
	var x = 38;
	var y = 227;
	var w = 20;
	var h = 46;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill3421(color) {
	context = thisContext(color)
	var x = 270;
	var y = 200;
	var w = 65;
	var h = 71;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill3425(color) {
	context = thisContext(color)
	var x = 270;
	var y = 271;
	var w = 65;
	var h = 45;
    drawRect(context, x, y, w, h);
	context.fill();
}

function fill3465(color) {
	context = thisContext(color)
	var x = 270;
	var y = 271;
	var height = 65;
	var topBase = 45;
	var botBase = 50;
    drawHorizontalBaseTrap(context, x, y, height, topBase, botBase);
	context.fill();
}


