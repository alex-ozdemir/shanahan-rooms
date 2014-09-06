function thisContext(color) {
	context = document.getElementById("basement").getContext("2d");
	context.fillStyle = color;
	return context;
}


function fillB449(color) {
	context = thisContext(color)
	context.beginPath();
	var x = 113;
	var y = 291;
	var w = 50;
	var h = 46;
    context.rect(x, y, w, h);
	context.fill();
}

function fillB446(color) {
	context = thisContext(color)
	context.beginPath();
	var x = 163;
	var y = 291;
	var w = 50;
	var h = 46;
    context.rect(x, y, w, h);
	context.fill();
}

function fillB445(color) {
	context = thisContext(color)
	context.beginPath();
	var x = 213;
	var y = 291;
	var w = 60;
	var h = 46;
    context.rect(x, y, w, h);
	context.fill();
}

function fill1430(color) {
	context = thisContext(color)
	var x = 213;
	var y = 213;
	var w = 111;
	var w2 = 121;
	var h = 79;
	context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + w, y);
    context.lineTo(x + w2, y + h);
    context.lineTo(x, y + h);
    context.closePath()
	context.fill();
}

function fillB454(color) {
	context = thisContext(color)
	context.beginPath();
	var x = 89;
	var y = 354;
	var w = 45;
	var h = 56;
    context.rect(x, y, w, h);
	context.fill();
}

function fillAG(color) {
	context = thisContext(color)
	context.beginPath();
	var x = 92;
	var y = 125;
	var w = 87;
	var h = 35;
    context.rect(x, y, w, h);
	context.fill();
}

function fillB450(color) {
	context = thisContext(color)
	context.beginPath();
	var x = 134;
	var y = 354;
	var w = 79;
	var h = 56;
    context.rect(x, y, w, h);
	context.fill();
}

function fillB442(color) {
	context = thisContext(color)
	context.beginPath();
	var x = 213;
	var y = 354;
	var w = 77;
	var h = 56;
    context.rect(x, y, w, h);
	context.fill();
}

function fillB460(color) {
	context = thisContext(color)
	var x = 5;
	var y = 308;
	var ph = 14;
	var pw = 13;
	var ph2 = 3;
	var w = 84;
	var h = 102;
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