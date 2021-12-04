import { Board } from './create-game';

function printEntry(line, entry) {
  return `${line}  ${entry.marked ? 'X' : 'O'}${entry.value.toString().padStart(2, ' ')}`;
}

function printLine(result, row) {
  return `${result}${row.reduce(printEntry, '  ')}\n`;
}

export function printBoard(board: Board) {
  return board.reduce(printLine, '');
}
