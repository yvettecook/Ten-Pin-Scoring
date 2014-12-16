Frame.prototype.setTotalScore = function(number) {
	this.totalScore = number;
};

describe('Frame', function() {

	beforeEach(function() {
		game = new Game;
		frame1 = new Frame;
	});


	it('contain one throw on construction', function() {
		expect(frame1.throw1).toEqual(jasmine.any(Throw));
	});

	it('can contain two throws', function() {
		expect(frame1.throw2).toEqual(jasmine.any(SecondThrow));
	});

	it('has a throw score and a bonus score', function() {
		expect(frame1.throwScore).toBe(null);
		expect(frame1.bonusScore).toBe(null);
	});

	describe('throw score calculations', function() {

		it('throw score can be calculated from both scoring throws', function() {
			frame1.throw1.assignScore(1);
			frame1.throw2.assignScore(2);
			frame1.calculateThrowScore();
			expect(frame1.throwScore).toBe(3);
		});

		it('throw score can be calculated when throw1 is 10', function() {
			frame1.throw1.assignScore(10);
			frame1.calculateThrowScore();
			expect(frame1.throwScore).toBe(10);
		});

	});

	describe('bonus score calculation', function() {

		beforeEach(function() {
			game.frames[0].throw1.assignScore(8);
			game.frames[0].throw2.assignScore(2);
			game.frames[1].throw1.assignScore(1);
			game.frames[1].throw2.assignScore(4);
		});

		it('can return the game it is a part of', function() {
			expect(game.frames[0].whatGame()).toBe(game);
		});

		it('can return its own place in the frames array', function() {
			expect(game.frames[0].whatFrame()).toBe(0);
		});

		it('can return the next frame from the game', function() {
			expect(game.frames[0].nextFrameIndex()).toBe(1)
		});

		it('can retrieve the next frames first throw score', function() {
			expect(game.frames[0].nextFrameFirstThrow()).toBe(1);
		});

		it('can retrieve the next frames second throw score', function() {
			expect(game.frames[0].nextFrameSecondThrow()).toBe(4);
		});

		it("can retrieve the next frame's next frame's first throw score", function() {
			game.frames[2].throw1.assignScore(4);
			expect(game.frames[0].nextNextFrameFirstThrow()).toBe(4);
		});

		describe('for a strike', function() {

			it('is the next frame first and second throw if another strike is not throw', function() {
				game.frames[0].throw1.assignScore(10);
				game.frames[0].calculateBonusScore();
				expect(game.frames[0].bonusScore).toBe(5);
			});

			it('is the next 2 throws if another strike is thrown', function() {
				game1 = new Game
				game1.frames[0].throw1.assignScore(10);
				game1.frames[1].throw1.assignScore(10);
				game1.frames[2].throw1.assignScore(3);
				game1.frames[0].calculateBonusScore();
				expect(game1.frames[0].bonusScore).toBe(13);
			});

		});

		describe('for a spare', function() {

			it('is the next frame first throw', function() {
				game.frames[0].calculateThrowScore();
				game.frames[0].calculateBonusScore();
				expect(game.frames[0].throwScore).toBe(10);
				expect(game.frames[0].bonusScore).toBe(1);
			});

		});

	});

	describe('calculating total score', function() {

		it('is throw score + bonus score', function() {
			game.frames[0].throw1.assignScore(8);
			game.frames[0].throw2.assignScore(2);
			game.frames[1].throw1.assignScore(1);
			game.frames[0].calculateTotalScore();
			expect(game.frames[0].totalScore).toBe(11);
		});

	});

	describe('final frame special rules', function() {

		it('is a seperate object', function() {
			expect(game.frames[9]).toEqual(jasmine.any(FinalFrame));
		});

		it('if 10 pins are knocked down in 2 throws then a third roll is available', function() {
			game.frames[9].throw1.assignScore(5);
			game.frames[9].throw2.assignScore(5);
			expect(game.frames[9].throw3).toEqual(jasmine.any(ThirdThrow));
		});

		it('if a spare is scored, the bonus is calculated from the third roll', function() {
			game.frames[9].throw1.assignScore(5);
			game.frames[9].throw2.assignScore(5);
			game.frames[9].throw3.assignThirdScore(8);
			game.frames[9].calculateTotalScore();
			expect(game.frames[9].bonusScore).toBe(8);
		});

		it('if a spare is scored, the total score is calculated', function() {
			game.frames[9].throw1.assignScore(5);
			game.frames[9].throw2.assignScore(5);
			game.frames[9].throw3.assignThirdScore(8);
			game.frames[9].calculateTotalScore();
			expect(game.frames[9].totalScore).toBe(18);
		});

		it('if a strike is scored, the bonus is calculated from the second and third rolls', function() {
			game.frames[9].throw1.assignScore(10);
			game.frames[9].throw2.assignScore(5);
			game.frames[9].throw3.assignThirdScore(5);
			game.frames[9].calculateTotalScore();
			expect(game.frames[9].throwScore).toBe(10);
			expect(game.frames[9].bonusScore).toBe(10);
			expect(game.frames[9].totalScore).toBe(20);
		});

		it('if a strike is scored, the bonus is calculated from the second and third rolls', function() {
			game.frames[9].throw1.assignScore(10);
			game.frames[9].throw2.assignScore(10);
			game.frames[9].throw3.assignThirdScore(10);
			game.frames[9].calculateTotalScore();
			expect(game.frames[9].totalScore).toBe(30);
		});

	});



});
