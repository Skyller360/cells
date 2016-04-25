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

var x = canvas.width/2;
var y = canvas.height/2;

var cell = new Cell(400,300);
var cell2 = new Cell(390,310);
var cell3 = new Cell(410,310);
var cell4 = new Cell(400,320);
cells.push(cell, cell2, cell3, cell4);


for (var i = 0; i < cells.length; i++) {
	cells[i].create(cells);
}

/*requestAnimationFrame(gridW);*/

function init() {
	gridW();
}

var count = 0;

x = 600;
y = 800;

function animate(){


	if (count % 180 == 0) {
		
		for (var i = 0; i < canvas.width; i++) {
			console.log(y);
			count = 0;
			var cell = new Cell(x,y);
			x += 10;
			cells.push(cell);
			if (x >= canvas.width) {
				x = 0;
				y += 10;
			}
			if(y >= canvas.height){
				x = 0;
				y = 0;
			}
			cell.create(cells);
		}
	}

	requestAnimationFrame(animate);
	count++;
}

init();
animate();