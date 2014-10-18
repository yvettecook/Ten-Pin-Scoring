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

});