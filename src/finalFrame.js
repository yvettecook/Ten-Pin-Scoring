FinalFrame = function(game) {
	this.throw1 				= new Throw(this);
	this.throw2 				= new SecondThrow(this);
	this.throw3 				= new ThirdThrow(this);
	this.game 					= game;
	this.throwScore 		= null;
	this.bonusScore 		= null;
	this.totalScore 		= null;
	this.type = 'FinalFrame'
};

FinalFrame.prototype._calculateThrowScore = function() {
	if (this.isStrike()) {
		this.throwScore = this.throw1.score;
	} else { 
		this.throwScore = this.throw1.score + this.throw2.score;
	};
	return this.throwScore;
};

FinalFrame.prototype._calculateBonusScore = function() {
	if (this.isStrike()) {
		this.bonusScore = this.throw2.score + this.throw3.score ;
	} else if (this.isSpare()) {
		this.bonusScore = this.throw3.score;
	};
	return this.bonusScore;
};

FinalFrame.prototype.isStrike = function() {
	return this.throw1.score === 10;
};

FinalFrame.prototype.isSpare = function() {
	return this.throwScore === 10;
};


FinalFrame.prototype.calculateTotalScore = function() {
	this._calculateThrowScore();
	this._calculateBonusScore();
	this.totalScore = this.throwScore + this.bonusScore;
	return this.totalScore;
};