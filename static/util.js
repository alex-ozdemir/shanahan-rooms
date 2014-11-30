function getContext(canvasid, color) {
	canvas = document.getElementById(canvasid);
	context = canvas.getContext("2d");
	context.fillStyle = color;
	return context;
} 

function placeImage(canvasid, filename) {
	var img = new Image();
	img.src = filename;
	img.alt = filename;
	img.onload = function() {
		if (img.complete) {
			var canvas = document.getElementById(canvasid)
			var context = canvas.getContext("2d");          	
			context.drawImage(img,
							  0, 0, img.naturalWidth, img.naturalHeight,
							  0, 0, canvas.width, canvas.height);
		}
		else {
			console.log("Image failed to load");
		}
	};
}

function drawHorizontalBaseTrap(context, x, y, h, w1, w2) {
	drawPoly(context, [x, y, x + w1, y, x + w2, y + h, x, y + h]);
}

function drawVerticalBaseTrap(context, x, y, h1, h2, w) {
	drawPoly(context, [x, y, x + w, y + h1 - h2, x + w, y + h2, x, y + h2]);
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