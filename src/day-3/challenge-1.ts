import { readInput } from '../read-input';
import { powerConsumption } from './power-consumption';

export default function(): string {
  const input = readInput(['day-3', 'input']);
  return 'power consumption is ' + powerConsumption(input);
}
