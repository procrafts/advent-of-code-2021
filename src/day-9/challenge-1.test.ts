import { Caves } from './caves';

describe('challenge 9-1', () => {
  describe('smoke basing', () => {
    test('create heightmap', () => {
      expect(new Caves().heightmap).toStrictEqual([
        [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
        [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
        [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
        [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
        [9, 8, 9, 9, 9, 6, 5, 6, 7, 8]
      ]);
    });

    test('create lowPointsMap', () => {
      expect(new Caves().lowPoints).toStrictEqual([
        { 'height': 1, 'x': 1, 'y': 0 },
        { 'height': 0, 'x': 9, 'y': 0 },
        { 'height': 5, 'x': 2, 'y': 2 },
        { 'height': 5, 'x': 6, 'y': 4 }
      ]);
    });

    test('example', () => {
      expect(new Caves().lowPointsSum).toBe(15);
    });

    test('challenge', () => {
      expect(new Caves('input').lowPointsSum).toBe(468);
    });
  });
});
