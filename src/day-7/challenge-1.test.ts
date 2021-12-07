import { Crabs } from './crabs';

describe('challenge 7-1', () => {

  describe('position', () => {

    const exampleCrabs = new Crabs('example');
    const challengeCrabs = new Crabs('input');

    it('get', () => {
      expect(exampleCrabs.initialPositions).toStrictEqual([16, 1, 2, 0, 4, 2, 7, 1, 2, 14]);
    });

    it('get sorted', () => {
      expect(exampleCrabs.sortedPositions).toStrictEqual([0, 1, 1, 2, 2, 2, 4, 7, 14, 16]);
    });

    it('get grouped', () => {
      expect(exampleCrabs.groupedPositions).toStrictEqual(
        { 0: [0], 1: [1, 1], 2: [2, 2, 2], 4: [4], 7: [7], 14: [14], 16: [16] }
      );
    });

    describe('consumption', () => {

      it('get fuel consumption for position 2', () => {
        expect(exampleCrabs.specificConsumption(2)).toBe(37);
      });

      it('example', () => {
        expect(exampleCrabs.lowestConsumption).toStrictEqual([2, 37]);
      });

      it('challenge', () => {
        expect(challengeCrabs.lowestConsumption).toStrictEqual([331, 349769]);
      });
    });
  });
});
