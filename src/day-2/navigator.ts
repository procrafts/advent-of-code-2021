type AIM = number;
type DEPTH = number;
type HORIZONTAL = number;

export function navigator(...args: string[]): [HORIZONTAL, DEPTH] {
  return args.map(calculatePositionChange).reduce((prev, curr) => {
    checkDepth(prev, curr);
    return [prev[0] + curr[0], prev[1] + curr[1]];
  }, [0, 0]);
}

export function aimNavigator(...args: string[]): [HORIZONTAL, DEPTH, AIM] {
  let depth = 0;
  const [horizontal, aim] = args.map(calculatePositionChange).reduce((prev, curr) => {
    checkDepth(prev, curr);
    const forward = curr[0];
    const totalAim = prev[1];
    if (forward > 0 && totalAim > 0) {
      depth = depth + forward * totalAim;
    }
    return [prev[0] + curr[0], prev[1] + curr[1]];
  }, [0, 0]);
  return [horizontal, depth, aim];
}

function calculatePositionChange(move: string): [number, number] {
  checkMove(move);
  const [direction, value] = move.split(' ');
  switch (direction) {
    case 'forward':
      return [+value, 0];
    case 'down':
      return [0, +value];
    case 'up':
      return [0, -value];
    default:
      return [0, 0];
  }
}

function checkMove(move: string) {
  if (move.split(' ').length !== 2) {
    throw new Error('Too many words: ' + move);
  }
  if (!['forward', 'down', 'up'].includes(move.split(' ')[0])) {
    throw new Error('Invalid direction: ' + move);
  }
  if (!/^[0-9]+$/.test(move.split(' ')[1])) {
    throw new Error('Invalid value: ' + move);
  }
}

function checkDepth(prev: [number, number], curr: [number, number]) {
  const newDepth = prev[1] + curr[1];
  if (newDepth < 0) {
    throw new Error('Invalid depth: ' + newDepth);
  }
}
