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

function fillB450(color) {
	context = thisContext(color)
	context.beginPath();
	var x = 89;
	var y = 354;
	var w = 45;
	var h = 57;
    context.rect(x, y, w, h);
	context.fill();
}