function fillB449(color) {
	var canvas = document.getElementById("basement");
	console.log("height: " + canvas.offsetHeight);
	console.log("width: " + canvas.offsetWidth);
	var context = canvas.getContext("2d");
	var image = document.getElementById("img");
	context.fillStyle = color;
	context.beginPath();
	var x = 115;
	var y = 265;
	var h = 40;
	var w = 50;
	context.moveTo(x, y);
	context.lineTo(x + w, y);
	context.lineTo(x + w, y + h);
	context.lineTo(x, y + h);
	context.closePath();
	context.fill();
}