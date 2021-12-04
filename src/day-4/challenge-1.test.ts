import { readInput } from '../read-input';
import { createGame } from './create-game';
import { finishGame } from './finish-game';
import { makeADraw } from './make-a-draw';

describe.only('challenge 4-1', () => {

  describe('create game', () => {

    test('detect drawn numbers', () => {
      expect(createGame(false, '13,14')).toStrictEqual({ drawPile: [13, 14] });
    });

    test('filter empty lines', () => {
      expect(createGame(false, '')).toStrictEqual({});
    });

    test('detect board of size two', () => {
      expect(createGame(false, '13 14', '20 19')).toStrictEqual({
        boards: [[
          [{ value: 13, marked: false }, { value: 14, marked: false },],
          [{ value: 20, marked: false }, { value: 19, marked: false },]
        ]]
      });
    });

    test('detect two boards of size two', () => {
      expect(createGame(false, '13 14', '20 19', '13 14', '20 19')).toStrictEqual({
        boards: [[
          [{ value: 13, marked: false }, { value: 14, marked: false },],
          [{ value: 20, marked: false }, { value: 19, marked: false },]
        ], [
          [{ value: 13, marked: false }, { value: 14, marked: false },],
          [{ value: 20, marked: false }, { value: 19, marked: false },]
        ]]
      });
    });

    test('detect board of size three', () => {
      expect(createGame(false, '13 14 15', '20 19 15', '19 55 33')).toStrictEqual({
        boards: [[
          [{ value: 13, marked: false }, { value: 14, marked: false },{ value: 15, marked: false }],
          [{ value: 20, marked: false }, { value: 19, marked: false },{ value: 15, marked: false }],
          [{ value: 19, marked: false }, { value: 55, marked: false },{ value: 33, marked: false }]
        ]]
      });
    });
  });

  describe('resolve draw', () => {

    test('detect drawn numbers', () => {
      const game = createGame(true, '15,20,90,30', '15 20', '10 15')
      makeADraw(game);
      expect(game.drawPile).toStrictEqual([20, 90, 30]);
      expect(game.boards[0]).toStrictEqual([
        [{ value: 15, marked: true }, { value: 20, marked: false }],
        [{ value: 10, marked: false }, { value: 15, marked: true }],
      ]);
    });
  });

  describe('find winner',() => {
    test('on second draw with matching row', () => {
      const game = createGame(true, '15,20,90,30', '15 20', '10 15')
      finishGame(game);
      expect(game.drawPile).toStrictEqual([90,30]);
      expect(game.drawnNumbers).toStrictEqual([15,20]);
      expect(game.winner.board).toStrictEqual([
        [{ value: 15, marked: true }, { value: 20, marked: true }],
        [{ value: 10, marked: false }, { value: 15, marked: true }],
      ]);
      expect(game.winner.score).toBe(10*20);
    });

    test('with higher score', () => {
      const game = createGame(true, '15,20,90,30', '15 90', '20 1', '15 20', '10 15')
      finishGame(game);
      expect(game.drawPile).toStrictEqual([90,30]);
      expect(game.drawnNumbers).toStrictEqual([15,20]);
      expect(game.winner.board).toStrictEqual([
        [{ value: 15, marked: true }, { value: 90, marked: false }],
        [{ value: 20, marked: true }, { value: 1, marked: false }],
      ]);
      expect(game.winner.score).toBe((90+1)*20);
    });

    test('example', () => {
      const game = createGame(true, ...readInput(['day-4', 'example'], {trim: false, filterEmpty: false}))
      finishGame(game);
      expect(game.drawPile).toStrictEqual([10,16,13,6,15,25,12,22,18,20,8,19,3,26,1]);
      expect(game.drawnNumbers).toStrictEqual([7,4,9,5,11,17,23,2,0,14,21,24]);
      expect(game.winner.board).toStrictEqual([
        [{ "marked": true, "value": 14 }, { "marked": true, "value": 21 }, { "marked": true, "value": 17 }, { "marked": true, "value": 24 }, { "marked": true, "value": 4 }],
        [{ "marked": false, "value": 10 }, { "marked": false, "value": 16 }, { "marked": false, "value": 15 }, { "marked": true, "value": 9 }, { "marked": false, "value": 19 }],
        [{ "marked": false, "value": 18 }, { "marked": false, "value": 8 }, { "marked": true, "value": 23 }, { "marked": false, "value": 26 }, { "marked": false, "value": 20 }],
        [{ "marked": false, "value": 22 }, { "marked": true, "value": 11 }, { "marked": false, "value": 13 }, { "marked": false, "value": 6 }, { "marked": true, "value": 5 }],
        [{ "marked": true, "value": 2 }, { "marked": true, "value": 0 }, { "marked": false, "value": 12 }, { "marked": false, "value": 3 }, { "marked": true, "value": 7 }]]);
      expect(game.winner.score).toBe(4512);
    });

    test('challenge', () => {
      const game = createGame(true, ...readInput(['day-4', 'input'], {trim: false, filterEmpty: false}))
      finishGame(game);
      expect(game.drawPile).toStrictEqual([70,19,17,5,50,52,45,51,18,27,49,71,28,86,74,77,11,20,84,72,23,31,16,78,91,65,87,79,73,94,24,68,63,9,88,82,30,42,60,13,67,85,44,59,7,53,22,1,26,41,61,55,43,39,3,35,25,34,57,10,14,32,97,95,36,98]);
      expect(game.drawnNumbers).toStrictEqual([76,69,38,62,33,48,81,2,64,21,80,90,29,99,37,15,93,46,75,0,89,56,58,40,92,47,8,6,54,96,12,66,83,4]);
      expect(game.winner.board).toStrictEqual([
        [{ "marked": true, "value": 69 }, { "marked": true, "value": 29 }, { "marked": false, "value": 49 }, { "marked": false, "value": 9 }, { "marked": true, "value": 76 }],
        [{ "marked": true, "value": 4 }, { "marked": true, "value": 83 }, { "marked": true, "value": 64 }, { "marked": true, "value": 33 }, { "marked": true, "value": 2 }],
        [{ "marked": false, "value": 67 }, { "marked": true, "value": 81 }, { "marked": false, "value": 88 }, { "marked": false, "value": 70 }, { "marked": false, "value": 39 }],
        [{ "marked": false, "value": 85 }, { "marked": false, "value": 73 }, { "marked": false, "value": 97 }, { "marked": true, "value": 15 }, { "marked": true, "value": 8 }],
        [{ "marked": false, "value": 7 }, { "marked": false, "value": 13 }, { "marked": false, "value": 26 }, { "marked": true, "value": 12 }, { "marked": false, "value": 1 }]
      ]);
      expect(game.winner.score).toBe(2496);
    });
  });
});
