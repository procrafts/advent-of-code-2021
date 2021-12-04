import { Game } from './create-game';

export function makeADraw(game: Game) {
  validateDraw(game);
  draw(game);
  markMatches(game);
}

function draw(game) {
  const draw = game.drawPile.shift();
  if (game.drawnNumbers) {
    game.drawnNumbers.push(draw);
  } else {
    game.drawnNumbers = [draw];
  }
}

function markMatches(game: Game) {
  const draw = game.drawnNumbers[game.drawnNumbers.length - 1];
  game.boards.forEach(board => {
    board.forEach(boardRow => {
      boardRow.forEach(entry => {
        if (entry.value === draw) {
          entry.marked = true;
        }
      });
    });
  });
}

function validateDraw(game: Game) {
  if (game.drawnNumbers?.includes(game.drawPile[0])) {
    throw new Error('Number already drawn: ' + game.drawPile[0]);
  }
}
