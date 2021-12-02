import { multiplyAimPosition } from './challenge-2';
import input from './input';
import { aimNavigator } from './navigator';

describe('challenge 2-2', () => {
  describe('aim navigator', () => {
    it('should start with position of 0', () => {
      expect(aimNavigator()).toStrictEqual([0, 0, 0]);
    });

    it('should increase horizontal when forward 5', () => {
      expect(aimNavigator('forward 5')).toStrictEqual([5, 0, 0]);
    });

    it('should increase aim when down 5', () => {
      expect(aimNavigator('down 5')).toStrictEqual([0, 0, 5]);
    });

    it('should increase horizontal and depth when forward 8 and aim is 5', () => {
      expect(aimNavigator('down 5')).toStrictEqual([0, 0, 5]);
      expect(aimNavigator('down 5', 'forward 8')).toStrictEqual([8, 8 * 5, 5]);
    });

    it('should solve example', () => {
      expect(aimNavigator('forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2')).toStrictEqual([15, 60, 10]);
    });
  });

  it('should solve example', () => {
    expect(multiplyAimPosition('forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2')).toBe(900);
  });

  it('should solve the challenge', () => {
    expect(multiplyAimPosition(...input)).toBe(1251263225);
  });

});
