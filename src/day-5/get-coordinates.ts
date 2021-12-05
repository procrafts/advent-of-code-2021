import { convertToRangeDescription } from './convert-to-range-description';
import { inputRegex } from './input-regex';
import { LineSegment } from './line-segment';


export function getCoordinatesFactory(ignoreDiagonal = true) {
  return function getCoordinates(s: string): [number, number][] {
    const range = convertToRangeDescription(inputRegex.exec(s));

    if (isHorizontal(range) && isVertical(range)) {
      if (ignoreDiagonal) {
        return [];
      }
      return getDiagonalMovement(range);
    }

    if (!isHorizontal(range) && !isVertical(range)) {
      return [[range.fromX, range.fromY]];
    }

    if (isHorizontal(range)) {
      return getHorizontalMovement(range);
    }

    if (isVertical(range)) {
      return getVerticalMovement(range);
    }
  };
}

export function printMovementDirection(s: string): string {
  const range = convertToRangeDescription(inputRegex.exec(s));

  if (isHorizontal(range) && isVertical(range)) {
    return `${s}: DIAGONAL`;
  }

  if (!isHorizontal(range) && !isVertical(range)) {
    return `${s}: NO DIRECTION`;
  }

  if (isHorizontal(range)) {
    return `${s}: HORIZONTAL`;
  }

  if (isVertical(range)) {
    return `${s}: VERTICAL`;
  }
}

function isVertical(range: LineSegment) {
  const movement = range.fromY - range.toY;
  return movement !== 0;
}

function isHorizontal(range: LineSegment) {
  const movement = range.fromX - range.toX;
  return movement !== 0;
}

function getHorizontalMovement({ fromX, toX, fromY: y }: LineSegment): [number, number][] {
  let movement = [];

  if (fromX < toX) {
    for (let x = fromX; x <= toX; x++) {
      movement.push([x, y]);
    }
  } else {
    for (let x = fromX; x >= toX; x--) {
      movement.push([x, y]);
    }
  }

  return movement;
}

function getVerticalMovement({ fromY, toY, fromX: x }: LineSegment): [number, number][] {
  let movement = [];

  if (fromY < toY) {
    for (let y = fromY; y <= toY; y++) {
      movement.push([x, y]);
    }
  } else {
    for (let y = fromY; y >= toY; y--) {
      movement.push([x, y]);
    }
  }

  return movement;
}

function getDiagonalMovement({ fromX, fromY, toX, toY }: LineSegment): [number, number][] {
  let x = fromX;
  let y = fromY;
  let movements: [number, number][] = [];
  do {
    movements.push([x, y]);
    x += makeMove(fromX, toX);
    y += makeMove(fromY, toY);
  } while (x !== toX && y !== toY);
  movements.push([x, y]);
  if (x === toX && y === toY) {
    return movements;
  }
  return [];
}


function makeMove(start: number, end: number) {
  if (start < end) {
    return 1;
  }
  if (start > end) {
    return -1;
  }
}

