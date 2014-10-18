describe('Frame', function() {

	beforeEach(function() {
		frame1 = new Frame;
	});

	it('contain one throw on construction', function() {
		expect(frame1.throw1).toEqual(jasmine.any(Throw));
	});

	it('can contain two throws', function() {
		expect(frame1.throw2).toEqual(jasmine.any(SecondThrow));
	});

	it('throw score can be calculated from both throws', function() {
		frame1.throw1.assignScore(1);
		frame1.throw2.assignSecondScore(2);
		expect(frame1.throwScore()).toBe(3);
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
			frame1.throw2.assignSecondScore(10);
			expect(frame1.throw2.score).toBe(10)
		}); 

		it('if throw1 is 1, throw2 can be 9', function() {
			frame1.throw1.assignScore(1);
			frame1.throw2.assignSecondScore(9)
			expect(frame1.throw2.score).toBe(9);
		}); 

		it('if throw1 is 1, throw2 cannot be 10', function() {
			frame1.throw1.assignScore(1);
			expect(frame1.throw2.assignSecondScore(10)).toBe(null);
		}); 

		it('if throw1 is 5, then throw2 cannot by 6', function() {
			frame1.throw1.assignScore(5);
			expect(frame1.throw2.assignSecondScore(6)).toBe(null);
		});
		
		xit('if throw1 is 10, then throw2 is null', function() {});

	});


});