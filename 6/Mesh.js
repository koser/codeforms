function renderMesh(){
	
	noStroke();

	for(var i=0; i<c1.NUM-1; i++){
		
		var HUE = 255 * (second()/60);
		var SAT = 90;
		var ALPHA = 255;

		// c1 + c2
		// colour calculations
		var leftTopDif = c1.joints[i].y - c2.joints[i].y;
		var leftBottomDif = c1.joints[i+1].y - c2.joints[i+1].y;
		var col = 128 + (leftTopDif + leftBottomDif)/1.5;
		var brightFactor = 1.0;
		fill(HUE, SAT, brightFactor * (255-col), ALPHA);

		beginShape();
		vertex(c1.joints[i].x, c1.joints[i].y);
		vertex(c2.joints[i].x, c2.joints[i].y);
		vertex(c2.joints[i+1].x, c2.joints[i+1].y);
		vertex(c1.joints[i+1].x, c1.joints[i+1].y);
		endShape(CLOSE);



		// c2 + c3
		// colour calculations
		var leftTopDif = c2.joints[i].y - c3.joints[i].y;
		var leftBottomDif = c2.joints[i+1].y - c3.joints[i+1].y;
		var col = 128 + (leftTopDif + leftBottomDif)/1.5;
		var brightFactor = 0.9;
		fill(HUE, SAT, brightFactor * (255-col), ALPHA);

		beginShape();
		vertex(c2.joints[i].x, c2.joints[i].y);
		vertex(c3.joints[i].x, c3.joints[i].y);
		vertex(c3.joints[i+1].x, c3.joints[i+1].y);
		vertex(c2.joints[i+1].x, c2.joints[i+1].y);
		endShape(CLOSE);
	}


}

function renderShapeOutline(){
	stroke(255);
	strokeWeight(4);

	// bottom
	line(c1.joints[0].x, c1.joints[0].y, c2.joints[0].x, c2.joints[0].y);
	line(c2.joints[0].x, c2.joints[0].y, c3.joints[0].x, c3.joints[0].y);

	for(var i=0; i<c1.NUM; i++){
		if(i>0){
			line(c1.joints[i].x, c1.joints[i].y, c1.joints[i-1].x, c1.joints[i-1].y); // left side
			line(c3.joints[i].x, c3.joints[i].y, c3.joints[i-1].x, c3.joints[i-1].y); // right side
		}	
	}	

	//top
	line(c1.joints[c1.NUM-1].x, c1.joints[c1.NUM-1].y, c2.joints[c2.NUM-1].x, c2.joints[c2.NUM-1].y);
	line(c2.joints[c2.NUM-1].x, c2.joints[c2.NUM-1].y, c3.joints[c3.NUM-1].x, c3.joints[c3.NUM-1].y);

	strokeWeight(1);
}

function renderShadow(){

	noStroke();
	fill(0, 64);

	push();
	translate(260, 150, 0);
	shearX(-PI/3.0);
	scale(1.0, 0.5);
	
	beginShape();

	for(var i=0; i<c1.NUM; i++){
		// if(i>0){
		vertex(c1.joints[i].x, c1.joints[i].y);//, c1.joints[i-1].x, c1.joints[i-1].y); // left side
			// line(c3.joints[i].x, c3.joints[i].y, c3.joints[i-1].x, c3.joints[i-1].y); // right side
		// }	
	}

	// top
	vertex(c1.joints[c1.NUM-1].x, c1.joints[c1.NUM-1].y);
	vertex(c2.joints[c2.NUM-1].x, c2.joints[c2.NUM-1].y);
	vertex(c3.joints[c3.NUM-1].x, c3.joints[c3.NUM-1].y);


	for(var i=c3.NUM-1; i>=0; i--){
		vertex(c3.joints[i].x, c3.joints[i].y);
	}

	// bottom
	vertex(c3.joints[0].x, c3.joints[0].y);
	vertex(c2.joints[0].x, c2.joints[0].y);
	vertex(c1.joints[0].x, c1.joints[0].y);


	endShape(CLOSE);

	pop();
	// translate(-300, 0, 0);

}

function renderMeshGridlines(){

	// strokeWeight(3);
	// stroke(90, 90, 255, 255);
	noStroke();
	
	for(var i=0; i<c1.NUM; i++){

		// horisontal lines
		line(c1.joints[i].x, c1.joints[i].y, c2.joints[i].x, c2.joints[i].y);
		line(c2.joints[i].x, c2.joints[i].y, c3.joints[i].x, c3.joints[i].y);

		// vertical lines
		if(i>0){
			line(c1.joints[i].x, c1.joints[i].y, c1.joints[i-1].x, c1.joints[i-1].y);
			line(c2.joints[i].x, c2.joints[i].y, c2.joints[i-1].x, c2.joints[i-1].y);
			line(c3.joints[i].x, c3.joints[i].y, c3.joints[i-1].x, c3.joints[i-1].y);
		}

	}

	strokeWeight(1);
}

function renderLid(){
	var last = c2.NUM-1;
	var xx = c2.joints[last].x;
	var yy = c2.joints[last].y;
	
	fill(255, 255, 255);

	var highSideY = min(c1.joints[last].y, c3.joints[last].y); 
	//console.log(highSideY);

	var posY = c2.joints[last].y - c3.joints[last].y;
	ellipse(c2.joints[last].x, c2.joints[last].y - posY, 10, 10);
//console.log(posY);

	//ellipse(c3.joints[last].x, c3.joints[last].y, 10, 10);

}












