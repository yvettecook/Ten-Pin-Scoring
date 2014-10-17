describe ('Throws', function() {

	describe('can have a score of', function() {

		it('0', function() {
			throw1 = new Throw;
			expect(throw1.score(0)).toEqual(0);
		});

		it('10', function() {
			throw1 = new Throw;
			expect(throw1.score(10)).toEqual(10);
		});

	});

	it('can not have a score of 11', function() {
		throw1 = new Throw;
		expect(throw1.score(11)).toBe(undefined);
	});

});