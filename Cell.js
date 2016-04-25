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
	console.log(cells);
	if (_self.x + 10 == cells.x) {
		console.log('voisin');
	}

}