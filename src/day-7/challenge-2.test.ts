import { findLowestConsumption } from './find-lowest-consumption';
import { getGroupedCrabPositions } from './get-grouped-crab-positions';
import { moveCrabsToPosition } from './move-crabs-to-position';

describe('challenge 7-2', () => {

  describe('consumption', () => {

    it('get fuel consumption for position 5', () => {
      expect(moveCrabsToPosition(5, getGroupedCrabPositions('example'), 'summation')).toBe(168);
    });

    it('example', () => {
      expect(findLowestConsumption('summation', 'example')).toStrictEqual([5, 168]);
    });

    it('challenge', () => {
      expect(findLowestConsumption('summation', 'input')).toStrictEqual([479, 99540554]);
    });
  });
});
