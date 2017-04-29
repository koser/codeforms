	/*
	
	Easing animation class
	Mikkel Koser, April 2017
	Using Penner easing math


	Usage:

	// set it up
	var e = new Easer();
	e.setVal(value) // initially always set at 0

	// use it
	e.easeTo(targetValue, duration, delay)
	e.update();
	var myEasedNumber = e.getVal();

	*/

function Easer(){

	this.val = 0;
	this.start = 0;
	this.count = 0;
	this.duration = 0;
	this.distance = 0;
	this.doAnimation = false;

	this.update = function(){
		this.animate();
	}

	this.easeTo = function(_to, _duration, _delay){
		// console.log("ease to --> " + _to);
		this.distance = _to - this.val;
		this.start = this.val;
		this.duration = _duration;
		this.count = -_delay;
		this.doAnimation = true;
	}

	this.setVal = function(_newVal){
		this.val = _newVal;
	}

	this.getVal = function(){
		return this.val;
	}

	this.animate = function(){
		if(this.count < this.duration && this.doAnimation){
			this.count++;
			if(this.count > 0){
				this.val = easeOutCubic(this.count,    this.start, this.distance, 	this.duration);
			}
		}else{
			this.doAnimation = false;
		}
	}
}

function easeOutCubic (t, b, c, d) {
	// t: current time, b: begInnIng value, c: change In value, d: duration
	return c*((t=t/d-1)*t*t + 1) + b;
}