Frame = function() {
	this.throw1 = new Throw(this);
	this.throw2 = new SecondThrow(this);
};

Frame.prototype.throwScore = function() {
	if (this.throw2 === null) return this.throw1.score;
	else return this.throw1.score + this.throw2.score;
};


//put frame and throw object models together for ease of comparision
//will seperate back out later



