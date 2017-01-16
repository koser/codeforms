function Tentacle(){
	this.ang = radians(random(360));
	this.rad = random(2, 20);
	this.tail = new Tail(0, 0);
	this.angChange = random(-0.1, 0.1);
	this.count = 0;

	this.update = function(baseX, baseY){

		this.ang += this.angChange;

		this.count++;
		var tmprad = atan(count) * this.rad;

		var x = cos(this.ang) * tmprad;
		var y = sin(this.ang) * tmprad;

		fill(96);
		ellipse(baseX + x, baseY + y, 6, 6);

		this.tail.moveTo(baseX + x, baseY + y);
	}

	this.setWeight = function(newWeight){
		this.tail.weight = newWeight;
	}
}
