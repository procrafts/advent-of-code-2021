import { Octopuses } from './octopuses';

describe('challenge 11-1', () => {
  describe('Octopuses', () => {
    test('example', () => {
      const octopuses = new Octopuses();
      octopuses.doSteps(100);
      expect(octopuses.flashes).toBe(1656);
    });
    test('challenge', () => {
      const octopuses = new Octopuses('input');
      octopuses.doSteps(100);
      expect(octopuses.flashes).toBe(1585);
    });
  });
});
