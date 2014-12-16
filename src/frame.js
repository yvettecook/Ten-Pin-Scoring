Frame = function(game) {
	this.throw1 				= new Throw(this);
	this.throw2 				= new SecondThrow(this);
	this.game 					= game;
	this.throwScore 		= null;
	this.bonusScore 		= null;
	this.totalScore 		= null;
};

Frame.prototype.calculateThrowScore = function() {
	if (this.throw2.score === null) {
		this.throwScore = this.throw1.score;
	} else {
		this.throwScore = this.throw1.score + this.throw2.score;
	}
	return this.throwScore;
};


Frame.prototype.calculateBonusScore = function() {
	if ( this.isStrike() ) {
		this.strikeBonusCalc();
	} else if (this.isSpare() ){
		this.spareBonus();	}
	return this.bonusScore;
};


Frame.prototype.strikeBonusCalc = function() {
	if ( this.isNextFrameStrike() && this.whatFrame() !== 8 ) {
		this.doubleStrikeBonus();
	} else {
		this.strikeStandardBonus();
	}
};

Frame.prototype.calculateTotalScore = function() {
	this.calculateThrowScore();
	this.calculateBonusScore();
	this.totalScore = this.throwScore + this.bonusScore;
};


Frame.prototype.whatGame = function() {
	return this.game;
};

Frame.prototype.whatFrame = function() {
	var thisIndex = this.game.frames.indexOf(this);
	return thisIndex;
};

Frame.prototype.nextFrameIndex = function() {
	var nextIndex = this.whatFrame() + 1;
	return nextIndex;
};

Frame.prototype.nextNextFrameIndex = function() {
	var nextNextIndex = this.whatFrame() + 2;
	return nextNextIndex;
};

Frame.prototype.nextFrameFirstThrow = function() {
	i = this.nextFrameIndex();
	return this.game.frames[i].throw1.score;
};

Frame.prototype.nextFrameSecondThrow = function() {
	i = this.nextFrameIndex();
	return this.game.frames[i].throw2.score;
};

Frame.prototype.nextNextFrameFirstThrow = function() {
	j = this.nextNextFrameIndex();
	return this.game.frames[j].throw1.score;
};

Frame.prototype.isStrike = function() {
	return this.throw1.score === 10;
};

Frame.prototype.isSpare = function() {
	return this.throwScore === 10;
};

Frame.prototype.isStrikeOnEightFrame = function() {
	return this.isStrike() && this.nextFrameIndex() === 9;
};

Frame.prototype.isNextFrameStrike = function() {
	return this.nextFrameFirstThrow() === 10;
};

Frame.prototype.isStrikeNotOnEigthFrame = function() {
	return this.isStrike() && this.nextFrameIndex() !==9
};

Frame.prototype.strikeStandardBonus = function() {
	this.bonusScore = this.nextFrameFirstThrow() + this.nextFrameSecondThrow();
};

Frame.prototype.doubleStrikeBonus = function() {
	this.bonusScore = this.nextFrameFirstThrow() + this.nextNextFrameFirstThrow();
};

Frame.prototype.spareBonus = function() {
	this.bonusScore = this.nextFrameFirstThrow();
};
