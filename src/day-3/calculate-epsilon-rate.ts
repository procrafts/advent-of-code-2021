import { calculateGammaRate } from './calculate-gamma-rate';

export function calculateEpsilonRate(diagnosticReport: string[]) {
  const gamma = calculateGammaRate(diagnosticReport);
  let epsilon = '';
  for (let bit = 0; bit < gamma.length; bit++) {
    epsilon += gamma[bit] === '0' ? '1' : '0';
  }
  return epsilon;
}
