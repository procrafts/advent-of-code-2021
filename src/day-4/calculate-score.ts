import { Board, Game } from './create-game';

export function calculateScore(board: Board, game: Game) {
  const entries: Board[0] = board.reduce((
    entries,
    row) => {
    return entries.concat(...row);
  }, []);

  const valuesOfUnmarkedEntries = entries.filter(entry => !entry.marked).map(entry => entry.value);

  const sumOfUnmarkedEntries = valuesOfUnmarkedEntries.reduce((prev, curr) => prev + curr, 0);
  const lastDrawnNumber = game.drawnNumbers[game.drawnNumbers.length - 1];

  return sumOfUnmarkedEntries * lastDrawnNumber;
}
