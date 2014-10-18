Frame = function() {
	this.throw1 = new Throw(this);
	this.throw2 = new SecondThrow(this);
};

Frame.prototype.throwScore = function() {
	if (this.throw2 === null) return this.throw1.score;
	else return this.throw1.score + this.throw2.score;
};


//put frame and throw object models together for ease of comparision
//will seperate back out later

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

//I know this is ugly, but its kinda working
//Refactoring: the issue was that if SecondThrow was a prototype of Throw, the frame reference wasn't gettin passed down

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
 	if (pinsDown <= (10 - (this.frame.throw1.score)))
 		this.score = pinsDown;
 		return this.score;
 }; 




