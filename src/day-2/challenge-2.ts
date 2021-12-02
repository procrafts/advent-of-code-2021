import input from './input';
import { aimNavigator } from './navigator';

export function multiplyAimPosition(...args: string[]) {
  const [horizontal, depth] = aimNavigator(...args);
  return horizontal * depth;
}

export default function(): string {
  return 'multiplied position is ' + multiplyAimPosition(...input).toString();
}
