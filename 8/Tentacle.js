function Tentacle(){
	this.ang = radians(random(360));
	this.rad = 50;//random(2, 20);
	this.baseRad = this.rad/2;
	this.tail = new Tail(0, 0);
	this.angChange = random(0.02, 0.05);
	this.count = 0;

	this.update = function(baseX, baseY){

		this.ang += this.angChange;

		this.count++;
		// var tmprad = atan(count) * this.rad;
		var animrad = this.rad + (sin(count) * this.baseRad);

		// tmprad = 80;

		var x = cos(this.ang) * animrad;
		var y = sin(this.ang) * animrad;

		// tentacle moving logic visualised
		strokeWeight(0.5);
		noFill();
		ellipse(baseX, baseY, animrad*2, animrad*2);

		fill(96);
		ellipse(baseX, baseY, 6, 6);

		stroke(96);
		line(baseX, baseY, baseX + x, baseY + y);

		// head of tail
		fill(96);
		ellipse(baseX + x, baseY + y, 6, 6);

		this.tail.moveTo(baseX + x, baseY + y);
	}

	this.setWeight = function(newWeight){
		this.tail.weight = newWeight;
	}

}
