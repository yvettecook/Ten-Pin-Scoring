Frame = function() {
	this.throw1 = new Throw(this);
	this.throw2 = new SecondThrow(this);
	this.totalScore = null;
};

Frame.prototype.calculateTotalScore = function() {
	if (this.throw2.score === null) {
		this.totalScore = this.throw1.score;
	} else { 
		this.totalScore = this.throw1.score + this.throw2.score;
	};
};


