function renderMesh(){
	
	noStroke();

	for(var i=0; i<c1.NUM-1; i++){
		
		var HUE = 60;//255 * (second()/60);
		var SAT = 90;
		var ALPHA = 60;

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

function renderMeshOutline(){

	strokeWeight(3);
	stroke(90, 90, 255, 255);
	
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
	
	//var highSideY = max(c1.joints[last].y, c3.joints[last].y); 
	//console.log(highSideY);

	var posY = c2.joints[last].y - c3.joints[last].y;
	console.log(posY);

	fill(255, 255, 255);
	ellipse(c3.joints[last].x, c3.joints[last].y, 10, 10);

}