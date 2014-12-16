describe ('Throw', function() {

	beforeEach(function() {
			frame1 = new Frame;
			throw1 = new Throw
	});

	describe('score ', function() {

		it('can be 0', function() {
			throw1.assignScore(0)
			expect(throw1.score).toEqual(0);
		});

		it('can be 10', function() {
			throw1.assignScore(10)
			expect(throw1.score).toEqual(10);
		});

		it('can not be 11', function() {
			expect(throw1.assignScore(11)).toBe(null);
		});

		it('can report its score', function() {
			throw1.assignScore(8)
			expect(throw1.score).toBe(8);
		});

	describe('rules', function() {


		it('throw1 can report what frame it is in', function() {
			expect(frame1.throw1.whatFrame()).toBe(frame1)
		});

		it('throw2 can report what frame it is in', function() {
			expect(frame1.throw2.whatFrame()).toBe(frame1)
		});


		it('throw2 can return throw1 score', function() {
			frame1.throw1.assignScore(1);
			expect(frame1.throw2.throw1Score()).toBe(1);
		});

		it('if throw1 is 0, throw2 can be 10', function() {
			frame1.throw1.assignScore(0);
			frame1.throw2.assignScore(10);
			expect(frame1.throw2.score).toBe(10)
		});

		it('if throw1 is 1, throw2 can be 9', function() {
			frame1.throw1.assignScore(1);
			frame1.throw2.assignScore(9)
			expect(frame1.throw2.score).toBe(9);
		});

		it('if throw1 is 1, throw2 cannot be 10', function() {
			frame1.throw1.assignScore(1);
			expect(frame1.throw2.assignScore(10)).toBe(null);
		});

		it('if throw1 is 5, then throw2 cannot be 6', function() {
			frame1.throw1.assignScore(5);
			expect(frame1.throw2.assignScore(6)).toBe(null);
		});

		it('if throw1 is 10, then throw2 is null', function() {
			frame1.throw1.assignScore(10);
			expect(frame1.throw2.score).toBe(null);
		});

	});

});

});
