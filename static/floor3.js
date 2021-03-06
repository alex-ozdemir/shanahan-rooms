

function fill3481(color) {
	context = getContext("canvas-floor3", color)
	var x = 70;
	var y = 138;
	var w = 99;
	var h = 50;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill3485(color) {
	context = getContext("canvas-floor3", color)
	var x = 170;
	var y = 138;
	var w = 78;
	var h = 50;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill3466(color) {
	context = getContext("canvas-floor3", color)
	var x = 38;
	var y = 227;
	var w = 20;
	var h = 46;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill3421(color) {
	context = getContext("canvas-floor3", color)
	var x = 270;
	var y = 200;
	var w = 65;
	var h = 71;
	drawRect(context, x, y, w, h);
	context.fill();
}

function fill3425(color) {
	context = getContext("canvas-floor3", color)
	var x = 270;
	var y = 271;
	var w = 65;
	var h = 45;
    drawRect(context, x, y, w, h);
	context.fill();
}

function fill3465(color) {
	context = getContext("canvas-floor3", color)
	var x = 71;
	var y = 188;
	var height = 61;
	var topBase = 74;
	var botBase = 67;
    drawHorizontalBaseTrap(context, x, y, height, topBase, botBase);
	context.fill();
}

function fill3461(color) {
	context = getContext("canvas-floor3", color)
	var x = 71;
	var y = 250;
	var lowHeight = 68;
	var highHeigt = 61;
	var topBase = 66;
	var botBase = 60;
    drawPoly(context,
		[x, y,
		x + topBase, y,
		x + botBase, y + lowHeight,
		x, y + highHeigt])
	context.fill();
}

function fill3461(color) {
	context = getContext("canvas-floor3", color)
	var x = 71;
	var y = 250;
	var lowHeight = 68;
	var highHeigt = 61;
	var topBase = 66;
	var botBase = 60;
    drawPoly(context,
		[x, y,
		x + topBase, y,
		x + botBase, y + lowHeight,
		x, y + highHeigt])
	context.fill();
}


function fill3460(color) {
	context = getContext("canvas-floor3", color)
	var x = 56;
	var y = 330;
	var w1 = 76;
	var h1 = 9;
	var w2 = 66;
	var h2 = 78;
	var w3 = -9;
	var h3 = 70;
	context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + w1, y + h1);
    context.lineTo(x + w2, y + h2);
    context.lineTo(x + w3, y + h3);
    context.closePath();
	context.fill();
}


