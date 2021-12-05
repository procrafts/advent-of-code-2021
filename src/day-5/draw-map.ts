import { convertToRangeDescription } from './convert-to-range-description';
import { inputRegex } from './input-regex';
import { LineSegment } from './line-segment';

export function drawMap(...lines: string[]): number[][] {
  const mapSize = getMapSize(lines.map(line => convertToRangeDescription(inputRegex.exec(line))));

  return [...new Array(mapSize[1] + 1)].map(() => [...new Array(mapSize[0] + 1)].map(() => 0));
}

function getMapSize(segments: LineSegment[]) {
  return segments.reduce((size, segment) => {
    const highestX = [size[0], segment.fromX, segment.toX].sort().reverse()[0];
    const highestY = [size[1], segment.fromY, segment.toY].sort().reverse()[0];
    return [highestX, highestY];
  }, [0, 0]);
}
