import { VentsChart } from './vents-chart';

describe('challenge 5-2', () => {
  describe('vents chart', () => {
    test('example', () => {
      expect(new VentsChart(true).dangerZones).toBe(12);
    });
    test('challenge', () => {
      expect(new VentsChart(true, 'input').dangerZones).toBe(19929);
    });
  });
});
