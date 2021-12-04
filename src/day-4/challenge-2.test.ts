import { readInput } from '../read-input';
import { createGame } from './create-game';
import { finishGameWithLooser } from './finish-game-with-looser';

describe('challenge 4-2', () => {

  describe('finish game with looser', () => {

    test('example', () => {
      const game = createGame(true, ...readInput(['day-4', 'example'], { trim: false, filterEmpty: false }));
      finishGameWithLooser(game);
      expect(game.boards).toStrictEqual([]);
      expect(game.drawnNumbers[game.drawnNumbers.length - 1]).toBe(13);
      expect(game.looser?.board).toStrictEqual([
        [{ 'marked': false, 'value': 3 }, { 'marked': false, 'value': 15 }, {
          'marked': true,
          'value': 0
        }, { 'marked': true, 'value': 2 }, { 'marked': false, 'value': 22 }],
        [{ 'marked': true, 'value': 9 }, { 'marked': false, 'value': 18 }, {
          'marked': true,
          'value': 13
        }, { 'marked': true, 'value': 17 }, { 'marked': true, 'value': 5 }],
        [{ 'marked': false, 'value': 19 }, { 'marked': false, 'value': 8 }, {
          'marked': true,
          'value': 7
        }, { 'marked': false, 'value': 25 }, { 'marked': true, 'value': 23 }],
        [{ 'marked': false, 'value': 20 }, { 'marked': true, 'value': 11 }, {
          'marked': true,
          'value': 10
        }, { 'marked': true, 'value': 24 }, { 'marked': true, 'value': 4 }],
        [{ 'marked': true, 'value': 14 }, { 'marked': true, 'value': 21 }, {
          'marked': true,
          'value': 16
        }, { 'marked': false, 'value': 12 }, { 'marked': false, 'value': 6 }]
      ]);
      expect(game.looser?.score).toBe(1924);
    });

    test('challenge', () => {
      const game = createGame(true, ...readInput(['day-4', 'input'], { trim: false, filterEmpty: false }));
      finishGameWithLooser(game);
      expect(game.boards).toStrictEqual([]);
      expect(game.looser?.board).toStrictEqual([
        [{ 'marked': true, 'value': 69 }, { 'marked': true, 'value': 51 }, {
          'marked': false,
          'value': 39
        }, { 'marked': false, 'value': 95 }, { 'marked': false, 'value': 98 }],
        [{ 'marked': true, 'value': 90 }, { 'marked': true, 'value': 61 }, {
          'marked': true,
          'value': 91
        }, { 'marked': true, 'value': 6 }, { 'marked': true, 'value': 21 }],
        [{ 'marked': false, 'value': 25 }, { 'marked': false, 'value': 57 }, {
          'marked': true,
          'value': 81
        }, { 'marked': false, 'value': 10 }, { 'marked': true, 'value': 49 }],
        [{ 'marked': true, 'value': 67 }, { 'marked': false, 'value': 55 }, {
          'marked': false,
          'value': 43
        }, { 'marked': true, 'value': 96 }, { 'marked': true, 'value': 17 }],
        [{ 'marked': true, 'value': 78 }, { 'marked': true, 'value': 11 }, {
          'marked': false,
          'value': 3
        }, { 'marked': true, 'value': 64 }, { 'marked': true, 'value': 77 }]
      ]);
      expect(game.looser?.score).toBe(25925);
    });
  });
});
