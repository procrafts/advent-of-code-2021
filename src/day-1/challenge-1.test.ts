import { countMeasurements } from './count-measurements';
import input from './input';

describe('challenge 1-1', () => {
  it('should have no measurement increases if nothing measured', () => {
    expect(countMeasurements()).toBe(0);
  });

  it('should have no measurement increases if measured one time', () => {
    expect(countMeasurements(10)).toBe(0);
  });

  it('should have one measurement increases if measured a deeper depth', () => {
    expect(countMeasurements(10, 20)).toBe(1);
  });

  it('should register decreases correctly', () => {
    expect(countMeasurements(30, 20, 10)).toBe(0);
  });

  it('should register increases that are below an all time high', () => {
    expect(countMeasurements(20, 10, 15)).toBe(1);
  });

  it('should measure the example correctly', () => {
    expect(countMeasurements(199, 200, 208, 210, 200, 207, 240, 269, 260, 263)).toBe(7);
  });

  it('should measure the solution correctly', () => {
    expect(countMeasurements(...input)).toBe(1387);
  });
});
