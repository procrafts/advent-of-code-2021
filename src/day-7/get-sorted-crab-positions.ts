import { Source } from '../source';
import { getCrabPositions } from './get-crab-positions';

export function getSortedCrabPositions(source: Source) {
  return getCrabPositions(source).sort((x, y) => {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
}
