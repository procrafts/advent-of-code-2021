import { Board, Game } from './create-game';
import { makeADraw } from './make-a-draw';

export function finishGame(game: Game) {
  while (game.drawPile.length && !game.winner) {
    makeADraw(game);
    checkForWinner(game);
  }
}

function checkForWinner(game: Game) {
  const completeBoards: Board[] = getCompleteBoards(game);
  if (completeBoards) {
    let winner: Game['winner'];
    const winners = completeBoards.map((board): Game['winner'] => ({ board, score: calculateScore(board, game) }));
    winners.forEach(nextWinner => {
      if(!winner || nextWinner.score > winner.score) {
        winner = nextWinner;
      }else if(winner && nextWinner.score === winner.score) {
        throw new Error('No Winner found. There are multiple winners with same score.')
      }
    })
    if(winner) {
      game.winner = winner;
    }

  }
}

function getCompleteBoards(game: Game) {
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

function calculateScore(board: Board, game: Game) {
  const entries: Board[0] = board.reduce((
    entries,
    row) => {
    return entries.concat(...row);
  }, []);

  const valuesOfUnmarkedEntries = entries.filter(entry => !entry.marked).map(entry => entry.value)

  const sumOfUnmarkedEntries = valuesOfUnmarkedEntries.reduce((prev, curr) => prev + curr, 0)
  const lastDrawnNumber = game.drawnNumbers[game.drawnNumbers.length - 1]

  return sumOfUnmarkedEntries * lastDrawnNumber;
}
