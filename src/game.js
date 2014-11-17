Game = function() {
	// this.frames = [];
	// [1,2,3,4,5,6,7,8,9].forEach(function(){
	// 	this.frames.push(new Frame(this));
	// });
	// this.frames.push(new FinalFrame(this));

	this.frames = [
		new Frame(this),
		frame2 	= new Frame(this),
		frame3 	= new Frame(this),
		frame4 	= new Frame(this),
		frame5 	= new Frame(this),
		frame6 	= new Frame(this),
		frame7 	= new Frame(this),
		frame8 	= new Frame(this),
		frame9 	= new Frame(this),
		frame10 = new FinalFrame(this)
		];
	this.frameScores 	= [];
	this.gameScore 		= null;
};

Game.prototype.calculateGameScore = function() {
	this.collateFrameScores();
	this.gameScore = this.frameScores.reduce(function(a,b) {
		return a + b;
	});
	return this.gameScore;
};

Game.prototype.collateFrameScores = function(first_argument) {
	var j
	for (i = 0; i < this.frames.length; i++) {
		j = this.frames[i].totalScore;
		if (j !== null ) {
			this.frameScores.push(j)
		} else {
			this.frameScores.push(0);
		};
	};
};
