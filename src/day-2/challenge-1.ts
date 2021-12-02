import input from './input';
import { navigator } from './navigator';

export function multiplyPosition(...args: string[]): number {
  const [horizontal, depth] = navigator(...args);
  return horizontal * depth;
}

export default function(): string {
  return 'multiplied position is ' + multiplyPosition(...input).toString();
}
