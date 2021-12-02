import { countMeasurements } from './count-measurements';
import input from './input';

export default function(): string {
  return countMeasurements(...input).toString() + ' measurement increases';
}
