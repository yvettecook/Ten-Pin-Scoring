Frame = function(game) {
	this.throw1 = new Throw(this);
	this.throw2 = new SecondThrow(this);
	this.game = game;
	this.throwScore = null;
	this.bonusScore = null;
	this.totalScore = null;
};

Frame.prototype.calculateThrowScore = function() {
	if (this.throw2.score === null) {
		this.throwScore = this.throw1.score;
	} else { 
		this.throwScore = this.throw1.score + this.throw2.score;
	};
	return this.throwScore;
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

Frame.prototype.nextFrameFirstThrow = function() {
	i = this.nextFrameIndex();
	return this.game.frames[i].throw1.score;
};

Frame.prototype.nextFrameSecondThrow = function() {
	i = this.nextFrameIndex();
	return this.game.frames[i].throw2.score;
};

Frame.prototype.calculateBonusScore = function() {
	if (this.throw1.score === 10) {
		this.bonusScore = this.nextFrameFirstThrow() + this.nextFrameSecondThrow();
	} else if (this.throwScore === 10) {
		this.bonusScore = this.nextFrameFirstThrow();
	}
};


//private  method for testing speed!)
Frame.prototype.setTotalScore = function(number) {
	this.totalScore = number;
};


