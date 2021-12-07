import { readInput } from '../read-input';
import { Source } from '../source';

export function getCrabPositions(source: Source) {
  return readInput(['day-7', source])[0].split(',').map(entry => +entry);
}
