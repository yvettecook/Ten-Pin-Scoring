describe ('Throw', function() {

	beforeEach(function() {
			throw1 = new Throw;
	});

	describe('score ', function() {

		it('can be 0', function() {
			expect(throw1.score(0)).toEqual(0);
		});

		it('can be 10', function() {
			expect(throw1.score(10)).toEqual(10);
		});

		it('can not be 11', function() {
			expect(throw1.score(11)).toBe(undefined);
		});
	

	});

});