var whatFrame = function() {
	return this.frame;
};

var notAllPinsDown = function(pinsDown) {
	return pinsDown <= 10;
}

// First Throw

function Throw(frame) {
	this.score = null;
	this.frame = frame;
}

Throw.prototype.assignScore = function(pinsDown) {
	if (this.notAllPinsDown(pinsDown)) { this.score = pinsDown };
	return this.score;
};

Throw.prototype.whatFrame = whatFrame;
Throw.prototype.notAllPinsDown = notAllPinsDown

// Second Throw

function SecondThrow(frame) {
	this.score = null;
	this.frame = frame;
}

SecondThrow.prototype.whatFrame = whatFrame;
SecondThrow.prototype.notAllPinsDown = notAllPinsDown

SecondThrow.prototype.throw1Score = function() {
	return this.frame.throw1.score;
};

SecondThrow.prototype.assignScore = function(pinsDown) {
 	if (this.isFinalFrame() && this.notAllPinsDown(pinsDown)) {
		this.score = pinsDown;
 	} else if (pinsDown <= 10 - this.throw1Score()) {
 		this.score = pinsDown;
 	}
	return this.score;
 };

SecondThrow.prototype.isFinalFrame = function() {
	return this.frame.type === 'FinalFrame'
};

// Third Throw

function ThirdThrow(frame) {
	this.score = null;
	this.frame = frame;
}

ThirdThrow.prototype.whatFrame = whatFrame;
ThirdThrow.prototype.notAllPinsDown = notAllPinsDown

ThirdThrow.prototype.throw1Score = function() {
	return this.frame.throw1.score;
};

ThirdThrow.prototype.assignThirdScore = function(pinsDown) {
 	if (this.notAllPinsDown(pinsDown)) { this.score = pinsDown };
	return this.score;
};
