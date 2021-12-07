import { findLowestConsumption } from './find-lowest-consumption';
import { getCrabPositions } from './get-crab-positions';
import { getGroupedCrabPositions } from './get-grouped-crab-positions';
import { getSortedCrabPositions } from './get-sorted-crab-positions';
import { moveCrabsToPosition } from './move-crabs-to-position';

describe('challenge 7-1', () => {

  describe('crab position', () => {

    it('get', () => {
      expect(getCrabPositions('example')).toStrictEqual([16, 1, 2, 0, 4, 2, 7, 1, 2, 14]);
    });

    it('get sorted', () => {
      expect(getSortedCrabPositions('example')).toStrictEqual([0, 1, 1, 2, 2, 2, 4, 7, 14, 16]);
    });

    it('get grouped', () => {
      expect(getGroupedCrabPositions('example')).toStrictEqual({
        0: [0],
        1: [1, 1],
        2: [2, 2, 2],
        4: [4],
        7: [7],
        14: [14],
        16: [16]
      });
    });

    describe('consumption', () => {

      it('get fuel consumption for position 2', () => {
        expect(moveCrabsToPosition(2, getGroupedCrabPositions('example'), 'addition')).toBe(37);
      });

      it('example', () => {
        expect(findLowestConsumption('addition', 'example')).toStrictEqual([2, 37]);
      });

      it('challenge', () => {
        expect(findLowestConsumption('addition', 'input')).toStrictEqual([331, 349769]);
      });
    });
  });
});
