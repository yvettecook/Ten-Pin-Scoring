Throw = function() {
	this.score
};

Throw.prototype.score = function(pinsDown) {
	if (pinsDown <= 10) this.score = pinsDown
};

