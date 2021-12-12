import { countPaths } from './count-paths';

describe('challenge 12-1', () => {
  describe('paths', () => {
    test('example', () => {
      expect(countPaths()).toBe(226);
    })
    test('challenge', () => {
      expect(countPaths('input')).toBe(3495);
    });

  });
});
