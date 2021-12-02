import { countMeasurements } from './count-measurements';
import { groupMeasurements } from './group-measurements';
import input from './input';

describe('challenge 1-2', () => {
  it('should not group measurements of less than three', () => {
    expect(groupMeasurements()).toStrictEqual([]);
    expect(groupMeasurements(1, 2)).toStrictEqual([]);
  });

  it('should group measurements of three', () => {
    expect(groupMeasurements(1, 2, 3)).toStrictEqual([1 + 2 + 3]);
  });

  it('should ignore leftover measurements', () => {
    expect(groupMeasurements(1, 2, 3, 4)).toStrictEqual([1 + 2 + 3, 2 + 3 + 4]);
  });

  it('should group multiple groups', () => {
    expect(groupMeasurements(1, 2, 3, 4, 5, 6)).toStrictEqual([1 + 2 + 3, 2 + 3 + 4, 3 + 4 + 5, 4 + 5 + 6]);
  });

  it('should group the example correctly', () => {
    expect(groupMeasurements(199, 200, 208, 210, 200, 207, 240, 269, 260, 263)).toStrictEqual([607, 618, 618, 617, 647, 716, 769, 792]);
  });

  it('should work in combination with day-1-1 solution', () => {
    expect(countMeasurements(...groupMeasurements(199, 200, 208, 210, 200, 207, 240, 269, 260, 263))).toStrictEqual(5);
  });

  it('should measure the solution correctly', () => {
    expect(countMeasurements(...groupMeasurements(...input))).toStrictEqual(1362);
  });
});
