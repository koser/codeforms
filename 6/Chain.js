function Chain(_x, _y, _yScale){

	this.NUM = 8;
	this.minSize = _yScale * random(28, 32);
	this.maxSize = _yScale * random(36, 42);	

	this.joints = [];

	this.startSize = random(minSize, maxSize);
	this.startingJoint = new Joint(width/2, height/2, this.startSize);

	// Constructor: Joint(id, parent, x, y, ang, rad){
	this.startingJoint = new Joint(0, this, _x, _y, 0, this.startSize);

	this.joints.push(this.startingJoint);

	// add more joints
  	for(var i=1; i<this.NUM; i++){
  		
  		var rad = random(this.minSize, this.maxSize);
  	
  		var ang = radians((i*5) + random(-90, 90));
  		//ang = radians(i*8.5);
  		
  		var x = 0;//joints[i-1].x + (cos(ang) * (joints[i-1].rad + rad));
  		var y = 0;//joints[i-1].y + (sin(ang) * (joints[i-1].rad + rad));
		
  		var j = new Joint(i, this, x, y, ang, rad);
  		this.joints.push(j);

  	}

  	this.update = function(){
  		for(var i=0; i<this.NUM; i++){	
  			this.joints[i].update();
  			this.joints[i].render();
		  }	
  	}


}