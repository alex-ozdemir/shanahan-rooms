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
	var h = 46;
    context.rect(x, y, w, h);
	context.fill();
}