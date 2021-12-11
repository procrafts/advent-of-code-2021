import { Octopuses } from './octopuses';

describe('challenge 11-2', () => {
  describe('Octopuses', () => {
    test('example', () => {
      expect(new Octopuses().doSteps(true)).toBe(195);
    });
    test('challenge', () => {
      expect(new Octopuses('input').doSteps(true)).toBe(382);
    });
  });
});
