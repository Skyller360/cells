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
	var siblings = 0;
	for (var i = 0; i < cells.length; i++) {
		
		if ( (_self.x + 10) == cells[i].x  && _self.y == cells[i].y) {
			siblings++;
		}
		if ( (_self.x - 10) == cells[i].x && _self.y == cells[i].y){
			siblings ++;
		}
		if ( _self.x == cells[i].x && (_self.y + 10) == cells[i].y ) {
			siblings++;
		}
		if ( _self.x == cells[i].x && (_self.y - 10) == cells[i].y ) {
			siblings++;
		}
		if ( (_self.x + 10) == cells[i].x && ( _self.y + 10) == cells[i].y ) {
			siblings++;
		}
		if ( (_self.x + 10) == cells[i].x && (_self.y - 10) == cells[i].y ) {
			siblings++;
		}
		if ( (_self.x - 10) == cells[i].x && (_self.y + 10) == cells[i].y ) {
			siblings++;
		}
		if ( (_self.x - 10) == cells[i].x && (_self.y - 10) == cells[i].y ) {
			siblings++;
		}
	}

	console.log(siblings);
}