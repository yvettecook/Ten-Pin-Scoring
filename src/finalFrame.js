FinalFrame = function(game) {
	this.throw1 = new Throw(this);
	this.throw2 = new SecondThrow(this);
	this.throw3 = new ThirdThrow(this);
	this.game = game;
	this.throwScore = null;
	this.bonusScore = null;
	this.totalScore = null;
	this.type = 'FinalFrame'
};

FinalFrame.prototype.calculateThrowScore = function() {
	if (this.throw1.score === 10) {
		this.throwScore = this.throw1.score;
	} else { 
		this.throwScore = this.throw1.score + this.throw2.score;
	};
	return this.throwScore;
};

FinalFrame.prototype.calculateBonusScore = function() {
	if (this.throw1.score === 10) {
		this.bonusScore = this.throw2.score + this.throw3.score ;
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