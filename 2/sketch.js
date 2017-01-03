
var NUM;
var joints;
var minSize;
var maxSize;
var debug;


function setup() {

	createCanvas(800, 800);

	centerX = 

	generate();
	debug = true;

}

function generate(){

	NUM = 64;
	minSize = random(2, 8);
	maxSize = random(16, 64);	

	joints = [];

	var startSize = random(minSize, maxSize);
	var startingJoint = new Joint(width/2, height/2, startSize);


	// var startingJoint = new Joint(0, height/2, startSize);

	joints.push(startingJoint);

	// add more joints
  	for(var i=1; i<NUM; i++){
  		
  		var rad = random(minSize, maxSize);
  		// var rad = 5 + i*4;

  		var ang = radians((i*5) + random(-90, 90));
  		var x = joints[i-1].x + (cos(ang) * (joints[i-1].rad + rad));
  		var y = joints[i-1].y + (sin(ang) * (joints[i-1].rad + rad));


  		// var x = joints[i-1].x + joints[i-1].rad + rad;
  		// var y = height/2;
		
  		var j = new Joint(x, y, rad);
  		joints.push(j);

  	}

}

function draw() {
	background(36);
	stroke(255, 50);

	stroke(255, 200, 0);
	//curve(100,100,0, 200,400,0, 480,480,0);
	//arc(50, 55, 50, 50, 0, HALF_PI);


	for(var i=0; i<NUM; i++){	

		if(debug){
			// center dot
			noFill();
			noStroke();
			fill(255, 32);
			ellipse(joints[i].x, joints[i].y, 3, 3);


			// out ring
			noFill();
			stroke(255, 16);
			ellipse(joints[i].x, joints[i].y, joints[i].dim, joints[i].dim);


			// connector lines
			if(i>0){
				line(joints[i-1].x, joints[i-1].y, joints[i].x, joints[i].y);
			}	
		}

		// curve segment
		if(i>0 && i <NUM-1){

			// console.log(i%2);

			// noStroke();
			// ellipse(joints[i].x, joints[i].y, 10, 10);
			stroke(50, 180, 200);
			noFill();
				
			// angle to previous
			var startAng = PI + calcAngRadians(joints[i].x, joints[i].y, joints[i-1].x, joints[i-1].y);

			//angle to next
			var endAng = PI + calcAngRadians(joints[i].x, joints[i].y, joints[i+1].x, joints[i+1].y);

			// var totalAng = abs(startAng) + abs(endAng);

			strokeWeight(2.0);

			// center-x, center-y, width, heigh, start, stop
			if(i%2){

				// stroke(0, 150, 255);
				startAng = PI + calcAngRadians(joints[i].x, joints[i].y, joints[i-1].x, joints[i-1].y);
				endAng = PI + calcAngRadians(joints[i].x, joints[i].y, joints[i+1].x, joints[i+1].y);
				arc(joints[i].x, joints[i].y, joints[i].dim, joints[i].dim, startAng, endAng);
			
			}else{

				// stroke(255, 0, 150);
				endAng = PI + calcAngRadians(joints[i].x, joints[i].y, joints[i-1].x, joints[i-1].y);
				startAng = PI + calcAngRadians(joints[i].x, joints[i].y, joints[i+1].x, joints[i+1].y);
				arc(joints[i].x, joints[i].y, joints[i].dim, joints[i].dim, startAng, endAng);
			}

			strokeWeight(1.0);
		}

	}

	// console.log(calcAngRadians(mouseX, mouseY, 480, 480));
}

function keyPressed(){
	if (keyCode === LEFT_ARROW) {
		debug = !debug;
	}else if(keyCode === RIGHT_ARROW){
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


function Joint(xx, yy, rrad){
	this.x = xx;
	this.y = yy;
	this.rad = rrad;
	this.dim = this.rad*2;
}

function mousePressed(){
	generate();
}