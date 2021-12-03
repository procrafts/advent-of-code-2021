import { findLeastCommonInBitPlace } from './find-least-common-in-bit-place';

export function co2ScrubberRating(diagnosticReport: string[]) {
  let bitPlace = 0;
  let candidates = diagnosticReport;
  while (bitPlace < diagnosticReport[0].length && candidates.length > 1) {
    const leastCommon = findLeastCommonInBitPlace(candidates, bitPlace);
    candidates = candidates.filter(candidate => {
      if (leastCommon === '1') {
        return candidate[bitPlace] === '1';
      }
      return candidate[bitPlace] === '0';
    });
    bitPlace++;
  }
  return candidates[0];
}
