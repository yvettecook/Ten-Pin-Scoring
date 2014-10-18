describe('Frame', function() {

	beforeEach(function() {
		frame1 = new Frame;
	});

	it('contain one throw on construction', function() {
		expect(frame1.throw1).toEqual(jasmine.any(Throw));
	});

	it('can contain two throws', function() {
		frame1.throw2 = new Throw;
		expect(frame1.throw2).toEqual(jasmine.any(Throw));
	});

	it('has a throw score calculate from the first throw', function() {
		frame1.throw1.score(1);
		expect(frame1.throwScore()).toBe(1);
	});

	it('throw score can be calculated from the two throws', function() {
		frame1.throw2 = new Throw;
		frame1.throw1.score(1);
		frame1.throw2.score(2);
		expect(frame1.throwScore()).toBe(3);
	});

});