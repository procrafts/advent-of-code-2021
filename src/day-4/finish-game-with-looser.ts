import { calculateScore } from './calculate-score';
import { getCompleteBoards } from './complete-board';
import { Board, Game } from './create-game';
import { makeADraw } from './make-a-draw';

export function finishGameWithLooser(game: Game) {
  while (game.drawPile.length && !game.looser) {
    makeADraw(game);
    markCompletedBoards(game);
    checkForLooser(game);
  }
}

function markCompletedBoards(game: Game) {
  const completeBoards = getCompleteBoards(game);
  if (completeBoards.length) {
    completeBoards.forEach(board => {
      game.boards.splice(game.boards.indexOf(board), 1);
    });
    if (!game.completeBoards) {
      game.completeBoards = [];
    }
    game.completeBoards.push(completeBoards);
  }
}

function checkForLooser(game: Game) {
  if (!game.boards.length) {
    const looserBoards = game.completeBoards.pop();
    setLooser(looserBoards, game);
  }
}

function setLooser(boards: Board[], game: Game) {
  let looser: Game['looser'];
  const loosersWithScore = boards.map((board): Game['looser'] => ({ board, score: calculateScore(board, game) }));
  loosersWithScore.forEach(nextLooser => {
    if (!looser || nextLooser.score < looser.score) {
      looser = nextLooser;
    } else if (looser && nextLooser.score === looser.score) {
      throw new Error('No Looser found. There are multiple loosers with same score.');
    }
  });
  if (looser) {
    game.looser = looser;
  }
}
