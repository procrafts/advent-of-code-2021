import { readInput } from '../read-input';
import { co2ScrubberRating } from './co2-scrubber-rating';
import { lifeSupportRating } from './life-support-rating';
import { oxygenGeneratorRating } from './oxygen-generator-rating';

describe('challenge 3-2', () => {
  describe('oxygen generator rating', () => {
    test('find most common', () => {
      expect(oxygenGeneratorRating(['110', '111', '011'])).toStrictEqual('111');
    });

    test('prefer 1 if equally common', () => {
      expect(oxygenGeneratorRating(['111', '000'])).toStrictEqual('111');
    });

    test('example', () => {
      expect(oxygenGeneratorRating(readInput(['day-3', 'example']))).toStrictEqual('10111');
    });
  });

  describe('co2 scrubber rating', () => {
    test('find least common', () => {
      expect(co2ScrubberRating(['010', '100', '001'])).toStrictEqual('100');
    });

    test('prefer 0 if equally common', () => {
      expect(co2ScrubberRating(['111', '000'])).toStrictEqual('000');
    });

    test('example', () => {
      expect(co2ScrubberRating(readInput(['day-3', 'example']))).toStrictEqual('01010');
    });
  });

  describe('life support rating', () => {
    it('example', () => {
      const input = readInput(['day-3', 'example']);
      expect(lifeSupportRating(input)).toBe(230);
    });

    it('challenge', () => {
      const input = readInput(['day-3', 'input']);
      expect(lifeSupportRating(input)).toBe(3385170);
    });
  });
});
