import { drawMap } from './draw-map';
import { getCoordinatesFactory } from './get-coordinates';
import { groupCoordinates } from './group-coordinates';

export function fillMapFactory(ignoreDiagonal = true) {
  return function fillMap(...lines: string[]): number[][] {
    const coordnates = groupCoordinates(lines.map(getCoordinatesFactory(ignoreDiagonal)));
    const map = drawMap(...lines);
    coordnates.forEach(point => {
      map[point[1]][point[0]]++;
    });
    return map;
  };
}
