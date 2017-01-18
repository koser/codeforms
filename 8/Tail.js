function Tail(pos){

	this.pos = pos;
	this.num = 150;
	this.hist = [];
	this.weight = 5;//random(0.2, 3.0);

	this.init = function(){
		// this.num = Math.round(random(15, 200));
		this.hist = [];
		for(var i=this.num-1; i>=0; i--){
			var p = new Point(this.pos.x, this.pos.y);
			this.hist.push(p);
		}
		console.log("Tail was made!");
	}
	this.init();

	this.moveTo = function(x, y){
		this.hist[0].x = x;
		this.hist[0].y = y;

		this.renderLine();
		if(frameCount % 2 == 0) this.update();
	}

	this.renderLine = function(){
		stroke(96);
		strokeWeight(this.weight);
		for(var i=this.num-1; i>0; i--){
			line(
				this.hist[i].x, this.hist[i].y,
				this.hist[i-1].x, this.hist[i-1].y
				)
		}
	}

	this.update = function(){
		fill(200, 180, 0);
		noStroke();

		for(var i=this.num-1; i>=0; i--){
			if(i > 0){
				this.hist[i].x = this.hist[i-1].x;
				this.hist[i].y = this.hist[i-1].y;
			}

			//ellipse(this.hist[i].x, this.hist[i].y, 6, 6);
		}
	}


}