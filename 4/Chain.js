function Chain(_x, _y){

	this.NUM = 16;
	this.minSize = random(2, 8);
	this.maxSize = random(16, 48);	

	this.joints = [];

	this.startSize = random(minSize, maxSize);
	this.startingJoint = new Joint(width/2, height/2, this.startSize);

	// Constructor: Joint(id, parent, x, y, ang, rad){
	this.startingJoint = new Joint(0, this, _x, _y, 0, this.startSize);

	this.joints.push(this.startingJoint);

	// add more joints
  	for(var i=1; i<this.NUM; i++){
  		
  		var rad = random(this.minSize, this.maxSize);
  		// var rad = 5 + i*4;

  		var ang = radians((i*5) + random(-90, 90));
  		ang = radians(i*8.5);
  		// var ang = 0;
  		
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

/*
function generate(){

	NUM = 16;
	minSize = random(2, 8);
	maxSize = random(16, 48);	

	joints = [];

	var startSize = random(minSize, maxSize);
	var startingJoint = new Joint(width/2, height/2, startSize);

	// Constructor: id, x, y, ang, rad
	startingJoint = new Joint(0, -300, -300, 0, startSize);



	// var startingJoint = new Joint(0, height/2, startSize);

	joints.push(startingJoint);

	// add more joints
  	for(var i=1; i<NUM; i++){
  		
  		var rad = random(minSize, maxSize);
  		// var rad = 5 + i*4;

  		var ang = radians((i*5) + random(-90, 90));
  		ang = radians(i*8.5);
  		// var ang = 0;
  		
  		var x = 0;//joints[i-1].x + (cos(ang) * (joints[i-1].rad + rad));
  		var y = 0;//joints[i-1].y + (sin(ang) * (joints[i-1].rad + rad));
		
  		var j = new Joint(i, x, y, ang, rad);
  		joints.push(j);

  	}

}
*/