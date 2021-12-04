import { readInput } from '../read-input';
import { createGame } from './create-game';
import { finishGameWithLooser } from './finish-game-with-looser';
import { printBoard } from './print-board';

export default function(): string {
  const game = createGame(true, ...readInput(['day-4', 'input'], { trim: false, filterEmpty: false }));
  finishGameWithLooser(game);
  const board = game.looser.board;
  return `looser is with score ${game.looser.score} \n${printBoard(board)}`;
}
