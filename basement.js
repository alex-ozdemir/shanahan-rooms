function fillB449(color) {
	var canvas = document.getElementById("basement");
	console.log("height: " + canvas.offsetHeight);
	console.log("width: " + canvas.offsetWidth);
	var context = canvas.getContext("2d");
	var image = document.getElementById("img");
	context.fillStyle = '#faa';
	context.beginPath();
	context.moveTo(205, 548);
	context.lineTo(293, 548);
	context.lineTo(293, 634);
	context.lineTo(205, 634);
	context.closePath();
	context.fill();
}