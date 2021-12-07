import { Source } from '../source';
import { getCrabPositions } from './get-crab-positions';

export function getGroupedCrabPositions(source: Source) {
  return getCrabPositions(source).reduce<Record<number, number[]>>((prev, curr) => {
    return { ...prev, [curr]: prev[curr] ? prev[curr].concat(curr) : [curr] };
  }, {});
}
