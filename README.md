##Ten Pin Scoring
###Maker's Academy: Week 5 Challenge

In javascript, count and sum the scores of a bowling game of one player

###Spec

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins.

Frames:

- In every frame the player can throw 1 or 2 times. The number depends on whether a strike was thrown on the first throw.
- The score of a frame is the number of knocked down pins, plus bonuses for strikes and spares.
- After every frame the pins are reset

Strikes:

- The player has a strike if he knocks down all 10 pins with the first roll in a frame.
- The frame ends immediately
- The bonus for that frame is the number of pins knocked down by the next 2 rolls - the next frame (expect if the player rolls a strike agian.

Spares:

- The player has a spare if they knock down all 10 pins within the 2 rolls of a frame.
- The bonus for that frame is the number of pins knocked down by the next roll.

10th frame:

- If the player rolls a strike or spare in the 10th frame he can roll the additional balls for the bonus. But he can never have more than 3 rolls in the 10th frame.
- The additional rolls only count for the bonus, not for the regular frame count.
- Example 1: 10, 10, 10 in the 10th frame gives 30 points (10 points for the regular strike, and 20 points for the bonus
- Example 2: 1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus)

Sepcial games:

- A gutter game is when the player never hits a pin (20 zero scores)
- A perfect game is when the player rolls 12 strikes - scoring 300 points.

###Tools

- GitHub for version control
- Javascript
- Jasmine for testing
- Google Chrome for running/viewing Jasmine tests

###Personal Goals:

- TDD, fully test everything.
- Refactoring for clean code.
	- In particular, applying single responsibility principles.
- Mindful programming: No randomly hacking at problems, but conciously considoring why soemthing is failing, and what the expect consequence of an action will be.
