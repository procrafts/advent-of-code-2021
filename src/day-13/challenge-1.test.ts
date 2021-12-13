import { Paper } from './paper';

describe('challenge 13-1', () => {
  describe('paper', () => {
    test('example', () => {
      const paper = new Paper()
      paper.followInstructions(0);
      paper.countDots()
      expect(paper.totalDots).toBe(17);
    });
    test('challenge', () => {
      const paper = new Paper('input')
      paper.followInstructions(0);
      paper.countDots()
      expect(paper.totalDots).toBe(655)
    })
  });
});
