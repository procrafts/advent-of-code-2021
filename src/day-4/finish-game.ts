import { calculateScore } from './calculate-score';
import { getCompleteBoards } from './complete-board';
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
      if (!winner || nextWinner.score > winner.score) {
        winner = nextWinner;
      } else if (winner && nextWinner.score === winner.score) {
        throw new Error('No Winner found. There are multiple winners with same score.');
      }
    });
    if (winner) {
      game.winner = winner;
    }

  }
}


