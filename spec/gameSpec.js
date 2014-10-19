describe('Game', function() {

	beforeEach (function() {
		game = new Game;
	});

	it('contains 10 frames', function() {
		expect(game.frames.length).toBe(10)
	});

	it('can return the score of an individual frame', function() {
		game.frames[0].setTotalScore(8);
		expect(game.frames[0].totalScore).toBe(8);
	});

	it('can return the total score of each frame', function() {
		game.frames[0].setTotalScore(8);
		game.frames[1].setTotalScore(4);
		game.collateFrameScores();
		expect(game.frameScores).toEqual([8,4,0,0,0,0,0,0,0,0]);
	});

	it('can calculate the game score', function() {
		game.frames[0].setTotalScore(8);
		game.frames[1].setTotalScore(4);
		game.calculateGameScore();
		expect(game.gameScore).toBe(12);
	});


	it('perfect game should score 300', function() {
		pgame = new Game;
		pgame.frames[0].throw1.assignScore(10);
		pgame.frames[1].throw1.assignScore(10);
		pgame.frames[2].throw1.assignScore(10);
		pgame.frames[3].throw1.assignScore(10);
		pgame.frames[4].throw1.assignScore(10);
		pgame.frames[5].throw1.assignScore(10);
		pgame.frames[6].throw1.assignScore(10);
		pgame.frames[7].throw1.assignScore(10);
		pgame.frames[8].throw1.assignScore(10);
		pgame.frames[9].throw1.assignScore(10);
		pgame.frames[9].throw2.assignSecondScore(10);
		pgame.frames[9].throw3.assignThirdScore(10);
		pgame.frames[0].calculateTotalScore();
		pgame.frames[1].calculateTotalScore();
		pgame.frames[2].calculateTotalScore();
		pgame.frames[3].calculateTotalScore();
		pgame.frames[4].calculateTotalScore();
		pgame.frames[5].calculateTotalScore();
		pgame.frames[6].calculateTotalScore();
		pgame.frames[7].calculateTotalScore();
		pgame.frames[8].calculateTotalScore();
		pgame.frames[9].calculateTotalScore();
		pgame.calculateGameScore();
		expect(pgame.gameScore).toBe(300);
	});


});