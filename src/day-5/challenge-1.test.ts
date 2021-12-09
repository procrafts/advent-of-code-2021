import { VentsChart } from './vents-chart';

describe('challenge 5-1', () => {
  describe('vents chart', () => {
    test('single point', () => {
      expect(new VentsChart().vents[0]).toStrictEqual({ x1: 0, y1: 9, x2: 5, y2: 9 });
    });
    test('example', () => {
      expect(new VentsChart().dangerZones).toBe(5);
    });
    test('challenge', () => {
      expect(new VentsChart(false, 'input').dangerZones).toBe(6311);
    });
  });
});
