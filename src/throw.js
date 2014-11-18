//Refactoring: the issue was that if SecondThrow was a prototype of Throw, the frame reference wasn't getting passed down. this.frame returned undefined
//Refactoring - can also pull out methods to ensure single responsibility
var whatFrame = function() {
	return this.frame;
};

function Throw(frame) {
	this.score = null;
	this.frame = frame;
}

Throw.prototype.assignScore = function(pinsDown) {
	if (pinsDown <= 10)
		this.score = pinsDown;
	return this.score;
};

Throw.prototype.whatFrame = whatFrame;

function SecondThrow(frame) {
	this.score = null;
	this.frame = frame;
}

SecondThrow.prototype.whatFrame = whatFrame;

SecondThrow.prototype.throw1Score = function() {
	return this.frame.throw1.score;
};

SecondThrow.prototype.assignScore = function(pinsDown) {
 	if (this.isFinalFrame()) {
 		if (pinsDown <= 10) {
			this.score = pinsDown;
		}
 	} else if (pinsDown <= 10 - this.throw1Score()) {
 		this.score = pinsDown;
 	};
 	return this.score;
 };

SecondThrow.prototype.isFinalFrame = function () {
	return this.frame.type === 'FinalFrame'
};


function ThirdThrow(frame) {
	this.score = null;
	this.frame = frame;
}

ThirdThrow.prototype.whatFrame = whatFrame;


ThirdThrow.prototype.throw1Score = function() {
	return this.frame.throw1.score;
};

ThirdThrow.prototype.assignThirdScore = function(pinsDown) {
 	if (pinsDown <= 10) { this.score = pinsDown };
	return this.score;
};
