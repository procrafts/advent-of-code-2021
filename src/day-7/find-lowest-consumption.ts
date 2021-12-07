import { Source } from '../source';
import { getGroupedCrabPositions } from './get-grouped-crab-positions';
import { getSortedCrabPositions } from './get-sorted-crab-positions';
import { ConsumptionFormula, moveCrabsToPosition } from './move-crabs-to-position';

export function findLowestConsumption(formula: ConsumptionFormula, source: Source) {
  const crabs = getGroupedCrabPositions(source);
  const [low, high] = getRangeBoundaries(getSortedCrabPositions(source));
  let bestPosition: number = low;
  let lowestConsumption: number = moveCrabsToPosition(low, crabs, formula);
  let currentConsumption: number;
  for (let currentPosition = low + 1; currentPosition <= high; currentPosition++) {
    currentConsumption = moveCrabsToPosition(currentPosition, crabs, formula);
    if (currentConsumption < lowestConsumption) {
      lowestConsumption = currentConsumption;
      bestPosition = currentPosition;
    }
  }
  return [bestPosition, lowestConsumption];
}

function getRangeBoundaries(sortedArray: number[]): [number, number] {
  return [sortedArray[0], sortedArray[sortedArray.length - 1]];
}
