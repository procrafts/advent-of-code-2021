import { SmokeBasin } from './smoke-basin';

describe('challenge 9-1', () => {
  describe('smoke basing', () => {
    test('create heightMap', () => {
      expect(new SmokeBasin().heightMap).toStrictEqual([
        [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
        [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
        [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
        [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
        [9, 8, 9, 9, 9, 6, 5, 6, 7, 8]
      ]);
    });

    test('create lowPointsMap', () => {
      expect(new SmokeBasin().lowPointsMap).toStrictEqual([
        [false, true, false, false, false, false, false, false, false, true],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, true, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, true, false, false, false]
      ]);
    });

    test('example', () => {
      expect(new SmokeBasin().lowPointsSum).toBe(15);
    });

    test('challenge', () => {
      expect(new SmokeBasin('input').lowPointsSum).toBe(468);
    });
  });
});
