function fillB449(color) {
	context = getContext("canvas-basement", color)
	context.beginPath();
	var x = 113;
	var y = 279;
	var w = 50;
	var h = 50;
    drawRect(context, x, y, w, h);
	context.fill();
}

function fillB446(color) {
	context = getContext("canvas-basement", color)
	context.beginPath();
	var x = 163;
	var y = 279;
	var w = 50;
	var h = 50;
    drawRect(context, x, y, w, h);
	context.fill();
}

function fillB445(color) {
	context = getContext("canvas-basement", color)
	context.beginPath();
	var x = 213;
	var y = 279;
	var w = 60;
	var h = 50;
    drawRect(context, x, y, w, h);
	context.fill();
}

function fill1430b(color) {
	context = getContext("canvas-basement", color)
	var x = 213;
	var y = 193;
	var w = 112;
	var w2 = 121;
	var h = 86;
	drawHorizontalBaseTrap(context, x, y, h, w, w2);
	context.fill();
}

function fillB454(color) {
	context = getContext("canvas-basement", color)
	context.beginPath();
	var x = 89;
	var y = 349;
	var w = 45;
	var h = 62;
    drawRect(context, x, y, w, h);
	context.fill();
}

function fillAG(color) {
	context = getContext("canvas-basement", color)
	context.beginPath();
	var x = 92;
	var y = 125;
	var w = 87;
	var h = 35;
    drawRect(context, x, y, w, h);
	context.fill();
}

function fillB450(color) {
	context = getContext("canvas-basement", color)
	context.beginPath();
	var x = 134;
	var y = 349;
	var w = 79;
	var h = 62;
    drawRect(context, x, y, w, h);
	context.fill();
}

function fillB442(color) {
	context = getContext("canvas-basement", color)
	context.beginPath();
	var x = 213;
	var y = 349;
	var w = 77;
	var h = 62;
    drawRect(context, x, y, w, h);
	context.fill();
}

function fillB460(color) {
	context = getContext("canvas-basement", color)
	var x = 5;
	var y = 298;
	var ph = 14;
	var pw = 13;
	var ph2 = 3;
	var w = 85;
	var h = 112;
	context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + pw, y);
    context.lineTo(x + pw, y - ph);
    context.lineTo(x + w, y - ph2);
    context.lineTo(x + w, y + h);
    context.lineTo(x, y + h);
    context.closePath()
	context.fill();
}

function fillB480(color) {
	context = getContext("canvas-basement", color)
	var x = 5;
	var y = 132;
	var ph = 8;
	var pw = 28;
	var w = 86;
	var h1 = 23;
	var h2 = 65;
	var w2 = 84;
	var w3 = 36;
	var h = 71;
	context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + pw, y);
    context.lineTo(x + pw, y - ph);
    context.lineTo(x + w, y - ph);
    context.lineTo(x + w, y + h1);
    context.lineTo(x + w, y + h1);
    context.lineTo(x + w2, y + h2);
    context.lineTo(x + w3, y + h);
    context.lineTo(x, y + h);
    context.closePath()
	context.fill();
}

function fillB470(color) {
	context = getContext("canvas-basement", color)
	var x = 35;
	var y = 227;
	var w = 51;
	var w2 = 46;
	var h = 3;
	var h2 = 53;
	var h3 = 47
	var w3 = 1
	context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + w, y + h);
    context.lineTo(x + w2, y + h2);
    context.lineTo(x + w3, y + h3);
    context.closePath()
	context.fill();
}

function fillB467(color) {
	context = getContext("canvas-basement", color)
	var x = 35;
	var y = 203;
	var w1 = 10;
	var w2 = 54;
	var h2 = 6;
	var w3 = 51;
	var h3 = 28;
	var h4 = 25;
	context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + w1, y);
    context.lineTo(x + w2, y - h2);
    context.lineTo(x + w3, y + h3);
    context.lineTo(x, y + h4);
    context.closePath()
	context.fill();
}
