import { readInput } from '../read-input';
import { countOverlapsFactory } from './count-overlaps';
import { fillMapFactory } from './fill-map';

describe('challenge 5-2', () => {
  describe('find the number of points where at least two lines overlap', () => {
    it('example', () => {
      expect(fillMapFactory(false)(...readInput(['day-5', 'example']))).toStrictEqual([
        [1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 2, 0, 0],
        [0, 0, 2, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 2, 0, 2, 0, 0],
        [0, 1, 1, 2, 3, 1, 3, 2, 1, 1],
        [0, 0, 0, 1, 0, 2, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [2, 2, 2, 1, 1, 1, 0, 0, 0, 0]
      ]);

      expect(countOverlapsFactory(false)(...readInput(['day-5', 'example']))).toBe(12);
    });

    it('challenge', () => {
      expect(countOverlapsFactory(false)(...readInput(['day-5', 'input']))).toBe(19929);
    });
  });
});
