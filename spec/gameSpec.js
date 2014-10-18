describe('Game', function() {

	beforeEach (function() {
		game = new Game;
	});

	it('contains 10 frames', function() {
		expect(game.frames.length).toBe(10)
	});

	it('can return the total score of frame', function() {
		game.frames[0]
	});


});