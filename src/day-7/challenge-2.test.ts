import { Crabs } from './crabs';

describe('challenge 7-2', () => {

  describe('consumption', () => {

    const exampleCrabs = new Crabs('example', 'summation');
    const challengeCrabs = new Crabs('input', 'summation');

    it('get fuel consumption for position 5', () => {
      expect(exampleCrabs.specificConsumption(5)).toBe(168);
    });

    it('example', () => {
      expect(exampleCrabs.lowestConsumption).toStrictEqual([5, 168]);
    });

    it('challenge', () => {
      expect(challengeCrabs.lowestConsumption).toStrictEqual([479, 99540554]);
    });
  });
});
