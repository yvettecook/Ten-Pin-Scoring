describe('Frames', function() {

	it('contains one throw', function() {
		frame1 = new Frame;
		frame1.throw1 = new Throw;
		expect(frame1.throw1).toEqual(jasmine.any(Throw));
	});

	it('can contain two throws', function() {
		frame1 = new Frame;
		frame1.throw1 = new Throw;
		frame1.throw2 = new Throw;
		expect(frame1.throw2).toEqual(jasmine.any(Throw));
	});

});