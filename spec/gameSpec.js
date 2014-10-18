describe('Game', function() {

	it('contains frames', function() {
		game = new Game;
		game.frame1 = new Frame;
		expect(game.frame1).toEqual(jasmine.any(Frame));
	});

	// it('contains a collection of frames', function() {

	// })

});