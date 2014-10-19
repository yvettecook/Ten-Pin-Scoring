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


});