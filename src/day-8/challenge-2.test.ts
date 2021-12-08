import { Display } from './display';

describe('challenge 8-2', () => {
  describe('display', () => {
    test('map wires to segments', () => {
      expect(Display.createDisplays()[0].wireSegmentMapping()).toStrictEqual({
        a: ['e'],
        b: ['a', 'c'],
        c: ['d', 'g'],
        d: ['a', 'c'],
        e: ['f'],
        f: ['d', 'g'],
        g: ['b']
      });
    });
    test('determine c', () => {
      const display = Display.createDisplays()[0];
      expect(display.useOneToDetermineSegmentC(display.wireSegmentMapping())).toStrictEqual({
        a: ['e'],
        b: ['c'],
        c: ['d', 'g'],
        d: ['a'],
        e: ['f'],
        f: ['d', 'g'],
        g: ['b']
      });
    });
    test('determine d', () => {
      const display = Display.createDisplays()[0];
      expect(display.useFourToDetermineSegmentD(display.useOneToDetermineSegmentC(display.wireSegmentMapping()))).toStrictEqual({
        a: ['e'],
        b: ['c'],
        c: ['d'],
        d: ['a'],
        e: ['f'],
        f: ['g'],
        g: ['b']
      });
    });
    test('map to numbers', () => {
      const display = Display.createDisplays()[0];
      expect(display.mapToNumber()).toStrictEqual({
        '0': 'abdefg',
        '1': 'be',
        '2': 'abcdf',
        '3': 'bcdef',
        '4': 'bceg',
        '5': 'cdefg',
        '6': 'acdefg',
        '7': 'bde',
        '8': 'abcdefg',
        '9': 'bcdefg'
      });
    });
    test('find four digits', () => {
      const display = Display.createDisplays()[0];
      expect(display.determineFourDigitDisplay()).toStrictEqual(['8', '3', '9', '4']);
    });
    test('find four digits', () => {
      const display = Display.createDisplays()[0];
      expect(display.determineFourDigitSum()).toBe(8394);
    });
    test('example', () => {
      const displays = Display.createDisplays();
      expect(Display.sumAllDisplays(displays)).toBe(61229);
    });
    test('challenge', () => {
      const displays = Display.createDisplays('input');
      expect(Display.sumAllDisplays(displays)).toBe(1068933);
    });
  });
});
