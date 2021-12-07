export type ConsumptionFormula = 'addition' | 'summation'
export type ConsumptionFormulaFn = (targetPosition: number, currentPosition: string, crabs: number[], fuelConsumption: number) => number

const addition: ConsumptionFormulaFn = (targetPosition, currentPosition, crabs, fuelConsumption) => Math.abs(targetPosition - +currentPosition) * crabs.length + fuelConsumption;

const summation: ConsumptionFormulaFn = (targetPosition, currentPosition, crabs, fuelConsumption) => {
  const n = Math.abs(targetPosition - +currentPosition);
  const sigma = (n * (n + 1)) / 2;
  return sigma * crabs.length + fuelConsumption;
};

export function moveCrabsToPosition(targetPosition: number, groupedCrabs: Record<number, number[]>, formula: ConsumptionFormula) {
  const calc = formula === 'addition' ? addition : summation;

  return Object.entries(groupedCrabs).reduce<number>((fuelConsumption, [currentPosition, crabs]) => {
    return calc(targetPosition, currentPosition, crabs, fuelConsumption);
  }, 0);
}
