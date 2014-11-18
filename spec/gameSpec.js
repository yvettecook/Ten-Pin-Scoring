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

		for (i = 0; i < 10; i++) {
			pgame.frames[i].throw1.assignScore(10);
		}

		pgame.frames[9].throw2.assignSecondScore(10);
		pgame.frames[9].throw3.assignThirdScore(10);

		calculateEachFrameScore(pgame);

		pgame.calculateGameScore();
		expect(pgame.gameScore).toBe(300);
	});

	it('gutter game should score 0', function() {
		ggame = new Game;
		for (i = 0; i < 9; i++) {
			ggame.frames[i].throw1.assignScore(0);
			ggame.frames[i].throw2.assignSecondScore(0);
			ggame.frames[i].calculateTotalScore();
		}
		ggame.frames[9].throw1.assignScore(0);
		ggame.frames[9].throw2.assignSecondScore(0);
		ggame.frames[9].calculateTotalScore();
		ggame.calculateGameScore();

		expect(ggame.gameScore).toBe(0);
	});

	it('random game', function() {
		rgame = new Game;
		rgame.frames[0].throw1.assignScore(2);
		rgame.frames[0].throw2.assignSecondScore(6);
		rgame.frames[1].throw1.assignScore(3);
		rgame.frames[1].throw2.assignSecondScore(7);
		rgame.frames[2].throw1.assignScore(9);
		rgame.frames[2].throw2.assignSecondScore(0);
		rgame.frames[3].throw1.assignScore(8);
		rgame.frames[3].throw2.assignSecondScore(2);
		rgame.frames[4].throw1.assignScore(1);
		rgame.frames[4].throw2.assignSecondScore(5);
		rgame.frames[5].throw1.assignScore(3);
		rgame.frames[5].throw2.assignSecondScore(4);
		rgame.frames[6].throw1.assignScore(6);
		rgame.frames[6].throw2.assignSecondScore(2);
		rgame.frames[7].throw1.assignScore(10);
		rgame.frames[8].throw1.assignScore(10);
		rgame.frames[9].throw1.assignScore(6);
		rgame.frames[9].throw2.assignSecondScore(4);
		rgame.frames[9].throw3.assignThirdScore(10);

		calculateEachFrameScore(rgame);

		rgame.calculateGameScore();
		expect(rgame.gameScore).toBe(134);
	});

	var calculateEachFrameScore = function(gameName) {
		for (h = 0; h < 10; h++) {
			gameName.frames[h].calculateTotalScore();
		}
	};
	

});
