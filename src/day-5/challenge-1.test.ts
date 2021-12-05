import { readInput } from '../read-input';
import { countOverlapsFactory } from './count-overlaps';
import { drawMap } from './draw-map';
import { fillMapFactory } from './fill-map';
import { getCoordinatesFactory } from './get-coordinates';
import { inputRegex } from './input-regex';

describe('challenge 5-1', () => {

  describe('verify input expectations', () => {

    test('example', () => {
      readInput(['day-5', 'example']).forEach((line) => {
        expect(line).toMatch(inputRegex);
      });
    });

    test('challenge', () => {
      readInput(['day-5', 'input']).forEach((line) => {
        expect(line).toMatch(inputRegex);
      });
    });
  });

  describe('convert input to coordinates', () => {

    test('single point', () => {
      expect(getCoordinatesFactory()('1,1 -> 1,1')).toStrictEqual([[1, 1]]);
    });

    test('two points horizontally next to each other', () => {
      expect(getCoordinatesFactory()('1,1 -> 1,2')).toStrictEqual([[1, 1], [1, 2]]);
    });

    test('two points with horizontal distance', () => {
      expect(getCoordinatesFactory()('1,1 -> 3,1')).toStrictEqual([[1, 1], [2, 1], [3, 1]]);
    });

    test('two points with vertical distance', () => {
      expect(getCoordinatesFactory()('1,1 -> 1,3')).toStrictEqual([[1, 1], [1, 2], [1, 3]]);
    });

    test('ignore complex movement', () => {
      expect(getCoordinatesFactory()('1,1 -> 2,3')).toStrictEqual([]);
    });
  });

  describe('draw map', () => {

    test('single point', () => {
      expect(drawMap('0,0 -> 0,0')).toStrictEqual([[0]]);
    });

    test('3x4', () => {
      expect(drawMap('2,3 -> 0,3')).toStrictEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });
  });

  describe('fill map', () => {

    test('increase coordinate by 1', () => {
      expect(fillMapFactory()('0,0 -> 0,0')).toStrictEqual([[1]]);
      expect(fillMapFactory()('0,0 -> 0,0', '0,0 -> 0,0')).toStrictEqual([[2]]);
    });

    test('increase multiple coordinates', () => {
      expect(fillMapFactory()('4,1 -> 0,1', '2,1 -> 2,3')).toStrictEqual([
        [0, 0, 0, 0, 0],
        [1, 1, 2, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
      ]);
    });

    test('example', () => {
      expect(fillMapFactory()(...readInput(['day-5', 'example']))).toStrictEqual([
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 2, 1, 1, 1, 2, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 1, 1, 1, 0, 0, 0, 0]
      ]);
    });
  });
  describe('find the number of points where at least two lines overlap', () => {

    test('with 2 overlaps', () => {
      expect(fillMapFactory()('4,1 -> 0,1', '2,1 -> 2,3', '0,5 -> 0,0')).toStrictEqual([
        [1, 0, 0, 0, 0],
        [2, 1, 2, 1, 1],
        [1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0]
      ]);

      expect(countOverlapsFactory()('4,1 -> 0,1', '2,1 -> 2,3', '0,5 -> 0,0')).toBe(2);
    });

    test('example', () => {
      expect(countOverlapsFactory()(...readInput(['day-5', 'example']))).toBe(5);
    });

    test('challenge', () => {
      expect(countOverlapsFactory()(...readInput(['day-5', 'input']))).toBe(6311);
    });
  });


});
