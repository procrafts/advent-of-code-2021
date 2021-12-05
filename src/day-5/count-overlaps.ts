import { fillMapFactory } from './fill-map';

export function countOverlapsFactory(ignoreDiagonal = true) {
  return function countOverlaps(...lines: string[]): number {
    const map = fillMapFactory(ignoreDiagonal)(...lines);
    const values = map.reduce((values, column) => values.concat(...column), []);

    return values.filter(value => value >= 2).length;
  };
}
