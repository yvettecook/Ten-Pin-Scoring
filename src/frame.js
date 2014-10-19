Frame = function(game) {
	this.throw1 = new Throw(this);
	this.throw2 = new SecondThrow(this);
	this.game = game;
	this.throwScore = null;
	this.bonusScore = null;
	this.totalScore = null;
};

Frame.prototype.calculateTotalScore = function() {
	if (this.throw2.score === null) {
		this.totalScore = this.throw1.score;
	} else { 
		this.totalScore = this.throw1.score + this.throw2.score;
	};
	return this.totalScore;
};

Frame.prototype.whatGame = function() {
	return this.game;
};

Frame.prototype.whatFrame = function() {
	thisIndex = this.game.frames.indexOf(this);
	return thisIndex;
};

Frame.prototype.nextFrameIndex = function() {
	nextIndex = this.whatFrame() + 1;
	return nextIndex
};

Frame.prototype.getNextFrameFirstThrow = function() {
	i = this.nextFrameIndex();
	return this.game.frames[i].throw1.score;
};

Frame.prototype.getNextFrameSecondThrow = function() {
	i = this.nextFrameIndex();
	return this.game.frames[i].throw2.score;
};


//private  method for testing speed!)
Frame.prototype.setTotalScore = function(number) {
	this.totalScore = number;
};


