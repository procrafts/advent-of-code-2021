import { binaryToDecimal } from './binary-to-decimal';
import { co2ScrubberRating } from './co2-scrubber-rating';
import { oxygenGeneratorRating } from './oxygen-generator-rating';

export function lifeSupportRating(diagnosticReport: string[]) {
  const oxygenGenerator = oxygenGeneratorRating(diagnosticReport);
  const co2Scrubber = co2ScrubberRating(diagnosticReport);
  return binaryToDecimal(oxygenGenerator) * binaryToDecimal(co2Scrubber);
}
