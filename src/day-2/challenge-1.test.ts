import { multiplyPosition } from './challenge-1';
import input from './input';
import { navigator } from './navigator';

describe('challenge 2-1', () => {
  describe('navigator', () => {
    it('should start with position of 0', () => {
      expect(navigator()).toStrictEqual([0, 0]);
    });

    it('should go forward by 5', () => {
      expect(navigator('forward 5')).toStrictEqual([5, 0]);
    });

    it('should go forward two times', () => {
      expect(navigator('forward 5', 'forward 3')).toStrictEqual([8, 0]);
    });

    it('should go down by 3', () => {
      expect(navigator('down 3')).toStrictEqual([0, 3]);
    });

    it('should go down two times', () => {
      expect(navigator('down 5', 'down 3')).toStrictEqual([0, 8]);
    });

    it('should go up by 3 after being in depth of 5', () => {
      expect(navigator('down 5', 'up 3')).toStrictEqual([0, 2]);
    });

    it('should warn for invalid move: to many word groups', () => {
      expect(() => navigator('down  5')).toThrow();
    });

    it('should warn for invalid move: to few word groups', () => {
      expect(() => navigator('down5')).toThrow();
    });

    it('should warn for invalid move: unknown direction', () => {
      expect(() => navigator('downs 5')).toThrow();
    });

    it('should warn for invalid move: unknown value', () => {
      expect(() => navigator('down -5')).toThrow();
    });

    it('should warn for invalid move: invalid depth', () => {
      expect(() => navigator('up 5')).toThrow();
    });
  });

  it('should multiply position', () => {
    expect(multiplyPosition('down 5', 'forward 3')).toBe(15);
  });

  it('should solve example', () => {
    expect(multiplyPosition('forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2')).toBe(150);
  });

  it('should solve the challenge', () => {
    expect(multiplyPosition(...input)).toBe(1580000);
  });

});
