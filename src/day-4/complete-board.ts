import { Board, Game } from './create-game';

export function getCompleteBoards(game: Game) {
  return game.boards.filter(isBoardComplete);
}

function isBoardComplete(board: Board) {
  return board.some(isRowComplete) || linearTransformation(board).some(isRowComplete);
}

function isRowComplete(row: Board[0]) {
  return row.every(entry => entry.marked);
}

function linearTransformation(board: Board) {
  return board[0].map((_, i) => board.map(r => r[i]));
}
