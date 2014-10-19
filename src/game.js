Game = function() {
	this.frames = [
		frame1 = new Frame,
		frame2 = new Frame,
		frame3 = new Frame,
		frame4 = new Frame,
		frame5 = new Frame,
		frame6 = new Frame,
		frame7 = new Frame,
		frame8 = new Frame,
		frame9 = new Frame,
		frame10 = new Frame
		];
	this.frameScores = [];
	this.gameScore = null;
};

Game.prototype.calculateGameScore = function() {
	this.collateFrameScores();
	this.gameScore = this.frameScores.reduce(function(a,b) {
		return a + b;
	});
};

Game.prototype.collateFrameScores = function(first_argument) {
	for (i = 0; i < this.frames.length; i++) {
		j = this.frames[i].totalScore;
		if (j !== null ) { 
			this.frameScores.push(j) 
		} else { 
			this.frameScores.push(0);
		};
	};
};





