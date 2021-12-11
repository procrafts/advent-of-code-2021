import { Octopuses } from './octopuses';

export default function(): string {
  return 'synchronizing on step ' + new Octopuses('input').doSteps(true);
}
