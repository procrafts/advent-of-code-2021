import { readInput } from '../read-input';
import { binaryToDecimal } from './binary-to-decimal';
import { calculateEpsilonRate } from './calculate-epsilon-rate';
import { calculateGammaRate } from './calculate-gamma-rate';
import { powerConsumption } from './power-consumption';

describe('challenge 3-1', () => {
  describe('gamma', () => {
    test('throw for no entries', () => {
      expect(() => calculateGammaRate([])).toThrow();
    });

    test('1 for ["1"]', () => {
      expect(calculateGammaRate(['1'])).toBe('1');
    });

    test('0 for ["0"]', () => {
      expect(calculateGammaRate(['0'])).toBe('0');
    });

    test('11 for ["11"]', () => {
      expect(calculateGammaRate(['11'])).toBe('11');
    });

    test('00 for ["00"]', () => {
      expect(calculateGammaRate(['00'])).toBe('00');
    });

    test('01 for ["01"]', () => {
      expect(calculateGammaRate(['01'])).toBe('01');
    });

    test('1 for ["0", "1", "1"]', () => {
      expect(calculateGammaRate(['0', '1', '1'])).toBe('1');
    });

    test('0 for ["1", "0", "0"]', () => {
      expect(calculateGammaRate(['1', '0', '0'])).toBe('0');
    });

    test('01 for ["10", "01", "01"]', () => {
      expect(calculateGammaRate(['10', '01', '01'])).toBe('01');
    });

    test('example', () => {
      const input = readInput(['day-3', 'example']);
      expect(calculateGammaRate(input)).toBe('10110');
    });
  });

  describe('epsilon', () => {
    test('throw for no entries', () => {
      expect(() => calculateEpsilonRate([])).toThrow();
    });

    test('0 for ["1"]', () => {
      expect(calculateEpsilonRate(['1'])).toBe('0');
    });

    test('1 for ["0"]', () => {
      expect(calculateEpsilonRate(['0'])).toBe('1');
    });

    test('00 for ["11"]', () => {
      expect(calculateEpsilonRate(['11'])).toBe('00');
    });

    test('11 for ["00"]', () => {
      expect(calculateEpsilonRate(['00'])).toBe('11');
    });

    test('10 for ["01"]', () => {
      expect(calculateEpsilonRate(['01'])).toBe('10');
    });

    test('0 for ["0", "1", "1"]', () => {
      expect(calculateEpsilonRate(['0', '1', '1'])).toBe('0');
    });

    test('1 for ["1", "0", "0"]', () => {
      expect(calculateEpsilonRate(['1', '0', '0'])).toBe('1');
    });

    test('10 for ["10", "01", "01"]', () => {
      expect(calculateEpsilonRate(['10', '01', '01'])).toBe('10');
    });

    test('example', async () => {
      const input = await readInput(['day-3', 'example']);
      expect(calculateEpsilonRate(input)).toBe('01001');
    });
  });

  describe('binary converter', () => {
    it('convert binary to decimal', () => {
      expect(binaryToDecimal('1111111111')).toBe(1023);
      expect(binaryToDecimal('1000000000')).toBe(512);
      expect(binaryToDecimal('0')).toBe(0);
      expect(binaryToDecimal('1')).toBe(1);
    });
  });

  describe('power consumption', () => {
    it('example', () => {
      const input = readInput(['day-3', 'example']);
      expect(powerConsumption(input)).toBe(198);
    });

    it('challenge', () => {
      const input = readInput(['day-3', 'input']);
      expect(powerConsumption(input)).toBe(3882564);
    });
  });
});
