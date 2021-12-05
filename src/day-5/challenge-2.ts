import { readInput } from '../read-input';
import { countOverlapsFactory } from './count-overlaps';

export default function(): string {
  return `Hydrothermal vent overlaps: ${countOverlapsFactory(false)(...readInput(['day-5', 'input']))}`;
}
