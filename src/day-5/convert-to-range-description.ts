import { LineSegment } from './line-segment';

export function convertToRangeDescription(capteringGroups: string[]): LineSegment {
  return {
    fromX: +capteringGroups[1],
    fromY: +capteringGroups[2],
    toX: +capteringGroups[3],
    toY: +capteringGroups[4],
  };
}
