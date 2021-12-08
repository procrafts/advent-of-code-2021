import { Display } from './display';

describe('challenge 8-1', () => {
  describe('display', () => {
    test('read example', () => {
      const displays = Display.createDisplays();
      expect(displays.length).toBe(10);
      expect(displays[0].everyDigit.length).toBe(10);
      expect(displays[0].fourDigits.length).toBe(4);
    });
    test('read example', () => {
      const displays = Display.createDisplays();
      expect(displays.length).toBe(10);
      expect(displays[0].everyDigit.length).toBe(10);
      expect(displays[0].fourDigits.length).toBe(4);
    });
    test('highlight unique number of segments', () => {
      const displays = Display.createDisplays();
      expect(displays[0].uniqueNumberOfSegments()).toStrictEqual(['fdgacbe', 'gcbe']);
    });
    test('example', () => {
      const displays = Display.createDisplays();
      expect(Display.countUniqueNumberOfSegments(displays)).toBe(26);
    });
    test('challenge', () => {
      const displays = Display.createDisplays('input');
      expect(Display.countUniqueNumberOfSegments(displays)).toBe(342);
    });
  });
});
