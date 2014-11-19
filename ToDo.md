##Refactoring
Automatic attribute calculations
- [ ]	Game's calculate game score method should prompt frames to calculate their total scores;
- [ ] OR Frame's total score's should be calculated automatically.

Inheritance
- [ ] Final Frame should inherit from Frame model.
- [ ] Second and Third Throw models should inherit from Throw model.

If/else reduction
- [x] Frame.prototype.calculateBonusScore (frame.js ln53) is not readable, can any of the logic be pulled out?
  - [ ] Logic pulled out, but still if/else is far too big.
- [x] FinalFrame's calculateBonusScore and calculateThrowScore should be able to have some functionality pulled out into seperate methods.
