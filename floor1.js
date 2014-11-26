function thisContext(color) {
	context = document.getElementById("canvas-floor1").getContext("2d");
	context.fillStyle = color;
	return context;
}

function fill1480(color) {
	context = thisContext(color)
	var x = 50;
	var y = 126;
	var w = 63;
	var w2 = 54;
	var h2 = 69;
	var w3 = -23;
	var h3 = 57;
	var h4 = 53;
	context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + w, y);
    context.lineTo(x + w2, y + h2);
    context.lineTo(x + w3, y + h3);
    context.lineTo(x + w3, y + h4);
    context.closePath();
	context.fill();
}

function fill1470(color) {
	context = thisContext(color)
	var x = 27;
	var y = 126;
	var w = 63;
	var w2 = 54;
	var h2 = 69;
	var w3 = -23;
	var h3 = 57;
	var h4 = 53;
	context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + w, y);
    context.lineTo(x + w2, y + h2);
    context.lineTo(x + w3, y + h3);
    context.lineTo(x + w3, y + h4);
    context.closePath();
	context.fill();
}

function fill1430(color) {
	context = thisContext(color)
	var x = 214;
	var y = 233;
	var w = 108;
	var wc = 122;
	var hc = 82;
	var h = 175;
	context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + w, y);
    context.lineTo(x + wc, y + hc);
    context.lineTo(x + w, y + h);
    context.lineTo(x, y + h);
    context.closePath();
	context.fill();
}
