import { readInput } from '../read-input';
import { createGame } from './create-game';
import { finishGame } from './finish-game';
import { printBoard } from './print-board';

export default function(): string {
  const game = createGame(true, ...readInput(['day-4', 'input'], { trim: false, filterEmpty: false }));
  finishGame(game);
  const board = game.winner.board;
  return `winner is with score ${game.winner.score} \n${printBoard(board)}`;
}
