describe ('Throw', function() {

	beforeEach(function() {
			throw1 = new Throw;
	});

	describe('score ', function() {

		it('can be 0', function() {
			throw1.score(0)
			expect(throw1.score).toEqual(0);
		});

		it('can be 10', function() {
			throw1.score(10)
			expect(throw1.score).toEqual(10);
		});

		it('can not be 11', function() {
			expect(throw1.score(11)).toBe(undefined);
		});
	
		it('can report its score', function() {
			throw1.score(8)
			expect(throw1.score).toBe(8);
		});

	});

});