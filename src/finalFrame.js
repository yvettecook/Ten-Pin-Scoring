FinalFrame = function(game) {
	this.throw1 = new Throw(this);
	this.throw2 = new SecondThrow(this);
	this.throw3 = new ThirdThrow(this);
	this.game = game;
	this.throwScore = null;
	this.bonusScore = null;
	this.totalScore = null;
};

FinalFrame.prototype.calculateThrowScore = function() {
	if (this.throw2.score === null) {
		this.throwScore = this.throw1.score;
	} else { 
		this.throwScore = this.throw1.score + this.throw2.score;
	};
	return this.throwScore;
};

FinalFrame.prototype.calculateBonusScore = function() {
	if (this.throw1.score === 10) {
		if (this.nextFrameFirstThrow() !== 10) {
		this.bonusScore = null;
		} else {
			this.bonusScore = null;
		};
	} else if (this.throwScore === 10) {
		this.bonusScore = this.throw3.score;
	};
	return this.bonusScore;
};

FinalFrame.prototype.calculateTotalScore = function() {
	this.calculateThrowScore();
	this.calculateBonusScore();
	this.totalScore = this.throwScore + this.bonusScore;
	return this.totalScore;
};