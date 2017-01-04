
var NUM;
var joints;
var minSize;
var maxSize;
var debug;

var c1, c2, c3;


function setup() {

	createCanvas(800, 800);

	textSize(12);

	c1 = new Chain(-200, -300);
	c2 = new Chain(0, -300);
	c3 = new Chain(200, -300);
	
	// console.log(c.joints.length);

	// generate();
	debug = true;


}

function draw() {
	background(36);
	translate(width/2, height/2);

	c1.update();
	c2.update();
	c3.update();

	// for(var i=0; i<NUM; i++){	
	// 	joints[i].update();
	// 	joints[i].render();
	// }

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


function mousePressed(){
	// generate();
}