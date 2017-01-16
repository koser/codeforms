var h;
var ten, ten2;

var POP;
var t;

var count;

function setup() {
	createCanvas(800, 800);

	// h = new Point(width/2, height/2);
	h = new Point(width/2, height/2);

	POP = 12;
	t = [];
	for(var i=0; i<=POP; i++){
		var temp = new Tentacle();
		temp.setWeight(2 * (i/POP));

		t.push(temp);
	}

	count = 0;

}

function draw() {
	background("#e5e5e5");

	count += 0.015;
	var tempX = cos(count) * 300;
	var tempY = sin(count) * 300;

	//h.setPos(mouseX, mouseY);
	h.setPos(width/2 + tempX, height/2 + tempY);

	for(var i=0; i<=POP; i++){
		t[i].update(h.x, h.y)
	}
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		var filename = year() + "-" + month() + "-" + day() + "_" + hour() + "-" + minute() + "-" + second();
		saveCanvas(filename, 'png');
	}
}




function Point(x, y){

	this.x = x;
	this.y = y;

	this.setPos = function(newX, newY){
		this.x = newX;
		this.y = newY;
	}
	
}



















