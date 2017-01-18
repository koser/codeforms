var h;
var ten, ten2;

var POP;
var t;
var baseRad;

var count;

function setup() {
	createCanvas(800, 800);

	// h = new Point(width/2, height/2);
	h = new Point(width/2, height/2);
	baseRad = 300;

	this.reset();

	count = random(1000);

}

function reset(){
	POP = 6;
	t = [];
	for(var i=0; i<POP; i++){
		var temp = new Tentacle();
		temp.setWeight(2 * (i/POP));
		// temp.setWeight(1.5 + i*3);

		t.push(temp);
	}
}

function draw() {
	// if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
		background("#e5e5e5");

		stroke(96, 96);
		strokeWeight(0.5);
		noFill();
		// ellipse(width/2, height/2, baseRad*2, baseRad*2);

		count += 0.015;

		// var moveRad = 200 + ((baseRad/3) * sin(count));
		// ellipse(width/2, height/2, moveRad*2, moveRad*2);
		// var tempX = cos(count) * moveRad;
		// var tempY = sin(count) * moveRad;

		var tempX = cos(count) * baseRad;
		var tempY = sin(count) * baseRad;
		fill(255, 128);
		// noStroke();
		// ellipse(width/2, height/2, baseRad*2 + 160, baseRad*2 + 160);

		// fill("#e5e5e5")
		// ellipse(width/2, height/2, baseRad*2 - 160, baseRad*2 - 160);

		//h.setPos(mouseX, mouseY);
		h.setPos(width/2 + tempX, height/2 + tempY);

		// t[0].update(h.x, h.y);
		// t[1].update(h.x, h.y);

		for(var i=0; i<t.length; i++){
			t[i].update(h.x, h.y)
			// console.log(i);
		}
	// }
}

function mousePressed(){
	this.reset();
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		var filename = year() + "-" + month() + "-" + day() + "_" + hour() + "-" + minute() + "-" + second();
		saveCanvas(filename, 'png');
	}
}




















