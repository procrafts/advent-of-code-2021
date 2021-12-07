import { Crabs } from './crabs';

export default function(): string {
  const [bestPosition, lowestConsumption] = new Crabs('input', 'summation').lowestConsumption;
  return `lowest consumption of ${lowestConsumption} at position ${bestPosition}`;
}
