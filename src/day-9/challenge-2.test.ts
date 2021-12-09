import { BasinCartographer } from './basin-cartographer';
import { SmokeBasin } from './smoke-basin';

describe('challenge 9-2', () => {
  describe('smoke basin', () => {
    test('chart basin', () => {
      const basin = new SmokeBasin();
      const cartographer = new BasinCartographer(basin.lowPoints[0], basin.heightMap);
      expect(cartographer.basin).toStrictEqual([
        [true, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
      ]);
    });
    test('example', () => {
      const smokeBasin = new SmokeBasin();
      expect(smokeBasin.productLargestThree).toStrictEqual(1134);
    });
    test('challenge', () => {
      const smokeBasin = new SmokeBasin('input');
      expect(smokeBasin.productLargestThree).toStrictEqual(912548);
    });
  });
});
