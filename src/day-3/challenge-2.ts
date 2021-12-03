import { readInput } from '../read-input';
import { lifeSupportRating } from './life-support-rating';

export default function(): string {
  const input = readInput(['day-3', 'input']);
  return 'life support rating is ' + lifeSupportRating(input);
}
