var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

var w = canvas.width;
var h = canvas.height;
var cells = [];

var gridW = function(){
	
	context.beginPath();
	context.moveTo(w, h - 10);
	context.lineTo(0, h - 10);
	context.stroke();
	context.closePath();
	h -= 10;
	if (h > 0) {
		requestAnimationFrame(gridW);
	}
	if (h <= 0){
		requestAnimationFrame(gridH);
	}
}

var gridH = function(){
	context.beginPath();
	context.moveTo(w, 0);
	context.lineTo(w, 600);
	context.stroke();
	context.closePath();
	w -= 10;
	if (w > 0) {
		requestAnimationFrame(gridH);
	}
}

requestAnimationFrame(gridW);

var x = canvas.width/2;
var y = canvas.height/2;

for (var i = 0; i < 4; i++) {
	
	var cell = new Cell(x,y);
	x += 10;
	cells.push(cell);

	if (i == 1) {
		y -= 10;
		x = canvas.width/2;
	} 
}

for (var i = 0; i < cells.length; i++) {
	cells[i].create(cells);
}