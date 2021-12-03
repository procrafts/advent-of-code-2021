import { binaryToDecimal } from './binary-to-decimal';
import { calculateEpsilonRate } from './calculate-epsilon-rate';
import { calculateGammaRate } from './calculate-gamma-rate';

export function powerConsumption(diagnosticReport: string[]) {
  const gammaRate = calculateGammaRate(diagnosticReport);
  const epsilonRate = calculateEpsilonRate(diagnosticReport);
  return binaryToDecimal(gammaRate) * binaryToDecimal(epsilonRate);
}
