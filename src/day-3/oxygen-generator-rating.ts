import { findMostCommonInBitPlace } from './find-most-common-in-bit-place';

export function oxygenGeneratorRating(diagnosticReport: string[]) {
  let bitPlace = 0;
  let candidates = diagnosticReport;
  while (bitPlace < diagnosticReport[0].length && candidates.length > 1) {
    const mostCommon = findMostCommonInBitPlace(candidates, bitPlace);
    candidates = candidates.filter(candidate => {
      if (mostCommon === '0') {
        return candidate[bitPlace] === '0';
      }
      return candidate[bitPlace] === '1';
    });
    bitPlace++;
  }
  return candidates[0];
}
