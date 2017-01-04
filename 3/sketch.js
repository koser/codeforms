
var NUM;
var joints;
var minSize;
var maxSize;
var debug;


function setup() {

	createCanvas(800, 800);

	textSize(12);

	generate();
	debug = true;


}

function generate(){

	NUM = 24;
	minSize = random(2, 8);
	maxSize = random(16, 48);	

	joints = [];

	var startSize = random(minSize, maxSize);
	var startingJoint = new Joint(width/2, height/2, startSize);
	startingJoint = new Joint(0, -300, 0, 0, startSize);



	// var startingJoint = new Joint(0, height/2, startSize);

	joints.push(startingJoint);

	// add more joints
  	for(var i=1; i<NUM; i++){
  		
  		var rad = random(minSize, maxSize);
  		// var rad = 5 + i*4;

  		var ang = radians((i*5) + random(-90, 90));
  		ang = radians(i*8.5);
  		// var ang = 0;
  		
  		var x = joints[i-1].x + (cos(ang) * (joints[i-1].rad + rad));
  		var y = joints[i-1].y + (sin(ang) * (joints[i-1].rad + rad));
		
  		var j = new Joint(i, x, y, ang, rad);
  		joints.push(j);

  	}

  	// joints[0].SayHello();

}

function draw() {
	background(36);
	translate(width/2, height/2);

	// var offsetAng = sin(count++/speed);

	// test manipulate
	joints[5].setRad(mouseX/10);
	// joints[5].setAng(offsetAng);


	for(var i=0; i<NUM; i++){	

		joints[i].update();

		if(debug)joints[i].renderDebug();

		// curve segment
		if(i>0 && i <NUM-1){
			joints[i].renderArc();
		}

	}

}

function keyPressed(){
	if (keyCode === LEFT_ARROW) {
		debug = !debug;
	}else if(keyCode === DOWN_ARROW){
		var filename = year() + "-" + month() + "-" + day() + "_" + hour() + "-" + minute() + "-" + second();
		//console.log(filename);
		saveCanvas(filename, 'png');

	}
}

function calcAngRadians(ax, ay, bx, by){
	 // returns angle between two points in RADIANS
	 var a = Math.atan2((ay-by), (ax-bx));
	 return a;
}


function Joint(id, x, y, ang, rad){
	this.id = id;
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

		//this.count++;
		var angOffset = sin(this.count/this.angSpeed);
		var radOffset = this.baseRad + (this.baseRad/2 * sin(this.count++/this.radSpeed));

		this.setAng(angOffset);
		if(id>0){
			this.setRad(radOffset);

	  		this.x = joints[this.id-1].x + (cos(this.ang) * (joints[this.id-1].rad + this.rad));
	  		this.y = joints[this.id-1].y + (sin(this.ang) * (joints[this.id-1].rad + this.rad));
  		}
	}

	this.setAng = function(newAng){
		this.ang = newAng;
	}

	this.setRad = function(newRad){
		this.rad = newRad;
		//console.log(this.id + " / " + this.dim);
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
		stroke(255, 16);
		//ellipse(joints[i].x, joints[i].y, joints[i].dim, joints[i].dim);
		ellipse(this.x, this.y, this.dim, this.dim);


		// connector lines
		if(id>0){
			line(this.x, this.y, joints[this.id-1].x, joints[this.id-1].y);
		}

		// number
		// noStroke(); fill(255, 32);
		// text("" + id, this.x, this.y);	
	}

	this.renderArc = function(){
		stroke(50, 180, 200);
		noFill();
			
		// angle to previous
		var startAng;// = PI + calcAngRadians(this.x, this.y, joints[this.id-1].x, joints[this.id-1].y);

		//angle to next
		var endAng;// = PI + calcAngRadians(this.x, this.y, joints[this.id+1].x, joints[this.id+1].y);

		// arc syntax, parameter order
		// center-x, center-y, width, heigh, start, stop

		strokeWeight(4);
		stroke(0, 150, 255);

		if(this.id%2){

			this.startAng = PI + calcAngRadians(this.x, this.y, joints[this.id-1].x, joints[this.id-1].y);
			this.endAng = PI + calcAngRadians(this.x, this.y, joints[this.id+1].x, joints[this.id+1].y);
			arc(this.x, this.y, this.dim, this.dim, this.startAng, this.endAng);
		
		}else{

			this.endAng = PI + calcAngRadians(this.x, this.y, joints[this.id-1].x, joints[this.id-1].y);
			this.startAng = PI + calcAngRadians(this.x, this.y, joints[this.id+1].x, joints[this.id+1].y);
			arc(this.x, this.y, this.dim, this.dim, this.startAng, this.endAng);
		}

		strokeWeight(1);
	}

}

// Joint.sayHello = function(){
// 	console.log("hello");
// }

function mousePressed(){
	generate();
}