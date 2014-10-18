//I know this is ugly, but its working
//Refactoring: the issue was that if SecondThrow was a prototype of Throw, the frame reference wasn't getting passed down. this.frame returned undefined
//Refactoring - can also pull out methods to ensure single responsibility

function Throw(frame) {
	this.score = null;
	this.frame = frame;
}

Throw.prototype.assignScore = function(pinsDown) {
	if (pinsDown <= 10) 
	this.score = pinsDown;
	return this.score;
};

Throw.prototype.whatFrame = function() {
	return this.frame;
};

function SecondThrow(frame) {
	this.score = null;
	this.frame = frame;
}

SecondThrow.prototype.whatFrame = function() {
	return this.frame;
};

SecondThrow.prototype.throw1Score = function() {
	return this.frame.throw1.score;
};

SecondThrow.prototype.assignSecondScore = function(pinsDown) {
 	if (pinsDown <= 10 - this.throw1Score())
 		this.score = pinsDown;
 		return this.score;
 }; 



