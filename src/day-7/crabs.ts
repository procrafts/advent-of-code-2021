import { readInput } from '../read-input';
import { Source } from '../source';

export type ConsumptionFormula = 'addition' | 'summation'

type ConsumptionFormulaFn = (targetPosition: number, currentPosition: string, crabs: number[], fuelConsumption: number) => number

export class Crabs {

  readonly initialPositions: number[];
  readonly sortedPositions: number[];
  readonly groupedPositions: Record<number, number[]>;

  get lowestConsumption(): [number, number] {
    const [low, high] = this.getRangeBoundaries();
    let bestPosition: number = low;
    let lowestConsumption: number = this.specificConsumption(low);
    let currentConsumption: number;
    for (let currentPosition = low + 1; currentPosition <= high; currentPosition++) {
      currentConsumption = this.specificConsumption(currentPosition);
      if (currentConsumption < lowestConsumption) {
        lowestConsumption = currentConsumption;
        bestPosition = currentPosition;
      }
    }
    return [bestPosition, lowestConsumption];
  }

  constructor(source: Source, private readonly formula: ConsumptionFormula = 'addition') {
    this.initialPositions = Crabs.initPositions(source);
    this.groupedPositions = this.groupPositions();
    this.sortedPositions = this.sortPositions();
  }

  private static addition: ConsumptionFormulaFn = (targetPosition, currentPosition, crabs, fuelConsumption) => Math.abs(targetPosition - +currentPosition) * crabs.length + fuelConsumption;

  private static summation: ConsumptionFormulaFn = (targetPosition, currentPosition, crabs, fuelConsumption) => {
    const n = Math.abs(targetPosition - +currentPosition);
    const sigma = (n * (n + 1)) / 2;
    return sigma * crabs.length + fuelConsumption;
  };

  private static initPositions(source: Source) {
    return readInput(['day-7', source])[0].split(',').map(entry => +entry);
  }

  specificConsumption(targetPosition: number) {
    const calc = this.formula === 'addition' ? Crabs.addition : Crabs.summation;

    return Object.entries(this.groupedPositions).reduce<number>((fuelConsumption, [currentPosition, crabs]) => {
      return calc(targetPosition, currentPosition, crabs, fuelConsumption);
    }, 0);
  }

  private getRangeBoundaries(): [number, number] {
    return [this.sortedPositions[0], this.sortedPositions[this.sortedPositions.length - 1]];
  }

  private sortPositions(): number[] {
    return [...this.initialPositions].sort((x, y) => {
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  }

  private groupPositions(): Record<number, number[]> {
    return this.initialPositions.reduce<Record<number, number[]>>((prev, curr) => {
      return { ...prev, [curr]: prev[curr] ? prev[curr].concat(curr) : [curr] };
    }, {});
  }
}
