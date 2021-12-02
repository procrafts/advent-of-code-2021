import { countMeasurements } from './count-measurements';
import { groupMeasurements } from './group-measurements';
import input from './input';

export default function(): string {
  return countMeasurements(...groupMeasurements(...input)).toString() + ' measurement increases';
}
