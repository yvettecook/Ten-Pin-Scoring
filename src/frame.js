Frame = function() {
	this.throw1 = new Throw;
};

Frame.prototype.throwScore = function() {
	if (this.throw2 === undefined)
		return this.throw1.score;
	else 
		return this.throw1.score + this.throw2.score;
};


