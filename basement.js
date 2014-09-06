function thisContext() {
	return document.getElementById("basement").getContext("2d");
}


function fillB449(color) {
	context = thisContext()
	context.fillStyle = color;
	context.beginPath();
	var x = 113;
	var y = 291;
	var h = 46;
	var w = 50;
	context.moveTo(x, y);
	context.lineTo(x + w, y);
	context.lineTo(x + w, y + h);
	context.lineTo(x, y + h);
	context.closePath();
	context.fill();
}