var Cell = function(x,y){

	this.x = x;
	this.y = y;

	this.create();

	return this;
}

Cell.prototype.create = function(){
	var _self = this;

	context.beginPath();
	context.rect(_self.x, _self.y, 10, 10);
	context.fillStyle = 'red';
	context.fill();
	context.closePath();

}

Cell.prototype.checkSiblings = function(cells){
	var _self = this;

	for (var i = 0; i < cells.length; i++) {
		if (_self.x == (cells[i].x - 10) && _self.y == cells[i].y) {
			console.log('voisin');
			// console.log(cells[i]);
		}	
	}
}