function Joint(id, parent, x, y, ang, rad){
	this.id = id;
	this.parent = parent,
	this.x = x,
	this.y = y,
	this.ang = ang,
	this.rad = rad,
	this.baseRad = rad,
	this.dim = rad*2,

	this.count = random(1000),
	this.angSpeed = random(60, 120),
	this.radSpeed = random(40, 60),

	this.update = function(){

		var angOffset = 0.2 * sin(this.count/this.angSpeed);
		// var radOffset = this.baseRad + (this.baseRad/2 * sin(this.count++/this.radSpeed));
		var radOffset = this.baseRad + (this.baseRad/9 * sin(this.count++/this.radSpeed));

		this.setAng(-HALF_PI + angOffset);

		if(id>0){
			this.setRad(radOffset);
	  		this.x = this.parent.joints[this.id-1].x + (cos(this.ang) * (this.parent.joints[this.id-1].rad + this.rad));
	  		this.y = this.parent.joints[this.id-1].y + (sin(this.ang) * (this.parent.joints[this.id-1].rad + this.rad));
  		}
	}

	this.render = function(){
  		if(debug)this.renderDebug();

  		// if(this.id>0 && this.id <this.parent.NUM-1){
  		// 	this.renderArc();
  		// }
	}

	this.setAng = function(newAng){
		this.ang = newAng;
	}

	this.setRad = function(newRad){
		this.rad = newRad;
		this.dim = newRad*2;
	}




	this.renderDebug = function(){
		// center dot
		noFill();
		noStroke();
		fill(255, 32);
		ellipse(this.x, this.y, 3, 3);


		// out ring
		noFill();
		stroke(255, 32);
		//ellipse(joints[i].x, joints[i].y, joints[i].dim, joints[i].dim);
		ellipse(this.x, this.y, this.dim, this.dim);


		// connector lines
		if(id>0){
			line(this.x, this.y, this.parent.joints[this.id-1].x, this.parent.joints[this.id-1].y);
		}

	}

	this.renderArc = function(){
			
		// angle to previous
		var startAng;// = PI + calcAngRadians(this.x, this.y, joints[this.id-1].x, joints[this.id-1].y);

		//angle to next
		var endAng;// = PI + calcAngRadians(this.x, this.y, joints[this.id+1].x, joints[this.id+1].y);

		// arc syntax, parameter order
		// center-x, center-y, width, heigh, start, stop

		strokeWeight(4);
		stroke(180, 255, 100);

		if(this.id%2){

			var startAng = PI + calcAngRadians(this.x, this.y, this.parent.joints[this.id-1].x, this.parent.joints[this.id-1].y);
			var endAng = PI + calcAngRadians(this.x, this.y, this.parent.joints[this.id+1].x, this.parent.joints[this.id+1].y);
			arc(this.x, this.y, this.dim, this.dim, startAng, endAng);

		
		}else{

			var endAng = PI + calcAngRadians(this.x, this.y, this.parent.joints[this.id-1].x, this.parent.joints[this.id-1].y);
			var startAng = PI + calcAngRadians(this.x, this.y, this.parent.joints[this.id+1].x, this.parent.joints[this.id+1].y);
			arc(this.x, this.y, this.dim, this.dim, startAng, endAng);

		}

		strokeWeight(1);
	}

}