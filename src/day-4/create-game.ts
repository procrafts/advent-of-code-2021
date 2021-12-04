
export type Board = {value: number, marked: boolean }[][];

export interface Game {
  drawPile: number[];
  boards: Board[];
  drawnNumbers?: number[]
  winner?: { board: Board, score: number }
}

export function createGame(checkForComplete: boolean, ...args: string[]): Game {
  const game: Partial<Game> = {}

  const addboardRow = boardBuilder(game);

  args.forEach(line => {
    if(isdrawPile(line)) {
      adddrawPile(game, line)
      return;
    }
    if(isboardRow(line)) {
      addboardRow(line)
      return;
    }
    if(isEmptyLine(line)) {
      return;
    }
    throw new Error('Unknown line format: ' + line)
  })

  if(validateGameInput(game, checkForComplete)) {
    return game;
  }
  throw new Error('Could not generate game input');
}

function isdrawPile(line: string) {
  return /^([0-9]+,?)+$/.test(line);
}

function adddrawPile(result: Partial<Game>, line: string): void {
  if(!result.drawPile) {
    result.drawPile = line.split(',').map(i => Number.parseInt(i))
  } else {
    throw new Error('multiple lines matching format for drawn numbers');
  }
}

function isboardRow(line: string) {
  return /^(\s*[0-9]+\s*)+$/.test(line);
}

function validateBoardFormat(board: { value: number; marked: boolean }[][], boardRow: { marked: boolean; value: number }[]) {
  if (board.length && board[0].length !== boardRow.length) {
    throw new Error('Board format is invalid. Length of lines are not equal');
  }
}

function boardBuilder(result: Partial<Game>) {
  let board: Board = []

  return function addboardRow(line: string): void {
    const boardRow = line.split(' ').filter(i => i !== '').map(i => {
      return {value: Number.parseInt(i), marked: false};
    });

    validateBoardFormat(board, boardRow);

    board.push(boardRow);

    if(board.length === board[0].length) {
      if(result.boards) {
        result.boards.push(board)
      } else {
        result.boards = [board];
      }
      board = [];
    }
  }
}


function isEmptyLine(line: string) {
  return /^$/.test(line);
}

function validateGameInput(result: Partial<Game>, checkForComplete: boolean): result is Game {
  if(!checkForComplete) {
    return true;
  }
  if(!result.drawPile) {
    return false;
  }
  if(!result.boards) {
    return false;
  }
  return true;
}


