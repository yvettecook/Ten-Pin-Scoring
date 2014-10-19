describe('Frame', function() {

	beforeEach(function() {
		game = new Game;
		frame1 = new Frame;
	});

	it('contain one throw on construction', function() {
		expect(frame1.throw1).toEqual(jasmine.any(Throw));
	});

	it('can contain two throws', function() {
		expect(frame1.throw2).toEqual(jasmine.any(SecondThrow));
	});

	it('throw score can be calculated from both scoring throws', function() {
		frame1.throw1.assignScore(1);
		frame1.throw2.assignSecondScore(2);
		frame1.calculateTotalScore();
		expect(frame1.totalScore).toBe(3);
	});

	it('throw score can be calculated when throw1 is 10', function() {
		frame1.throw1.assignScore(10);
		frame1.calculateTotalScore();
		expect(frame1.totalScore).toBe(10);
	});

	it('has a throw score and a bonus score', function() {
		expect(frame1.throwScore).toBe(null);
		expect(frame1.bonusScore).toBe(null);
	});

	it('can return the game it is a part of', function() {
		expect(game.frames[0].whatGame()).toBe(game);
	});

	it('can return its own place in the frames array', function() {
		expect(game.frames[0].whatFrame()).toBe(0);
	});

	it('can return the next frame from the game', function() {
		expect(game.frames[0].nextFrameIndex()).toBe(1)
	});

	it('can retrieve the next frames first throw score', function() {
		game.frames[0].throw1.assignScore(8);
		game.frames[0].throw2.assignSecondScore(2);
		game.frames[1].throw1.assignScore(1);
		game.frames[1].throw2.assignSecondScore(2);
		expect(game.frames[0].getNextFrameFirstThrow()).toBe(1);
	});

	it('can retrieve the next frames second throw score', function() {
		game.frames[0].throw1.assignScore(8);
		game.frames[0].throw2.assignSecondScore(2);
		game.frames[1].throw1.assignScore(1);
		game.frames[1].throw2.assignSecondScore(4);
		expect(game.frames[0].getNextFrameSecondThrow()).toBe(4);
	});
});