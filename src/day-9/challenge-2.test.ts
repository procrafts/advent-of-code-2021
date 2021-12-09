import { Cartographer } from './cartographer';
import { Caves } from './caves';

describe('challenge 9-2', () => {
  describe('smoke basin', () => {
    test('chart basin', () => {
      const basin = new Caves();
      const cartographer = new Cartographer(basin.lowPoints[0], basin.heightmap);
      expect(cartographer.basin).toStrictEqual([
        [true, true, false, false, false, false, false, false, false, false],
        [true, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false]
      ]);
    });
    test('example', () => {
      const smokeBasin = new Caves();
      expect(smokeBasin.productLargestThree).toStrictEqual(1134);
    });
    test('challenge', () => {
      const smokeBasin = new Caves('input');
      expect(smokeBasin.productLargestThree).toStrictEqual(1280496);
    });
  });
});
