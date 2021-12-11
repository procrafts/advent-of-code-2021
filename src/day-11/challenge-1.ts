import { Octopuses } from './octopuses';

export default function(): string {
  const octopuses = new Octopuses('input');
  octopuses.doSteps(100);
  return octopuses.flashes + ' total total flashes after 100 steps';
}
