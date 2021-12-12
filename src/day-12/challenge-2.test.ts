import { countPaths } from './count-paths';

describe('challenge 12-2', () => {
  describe('paths', () => {
    test('example', () => {
      expect(countPaths('example', true)).toStrictEqual(3509);
    });
    test('challenge', () => {
      expect(countPaths('input', true)).toStrictEqual(94849);
    });
  });
});
