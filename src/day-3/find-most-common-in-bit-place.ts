import { bitCounter } from './bit-counter';

export function findMostCommonInBitPlace(diagnosticReport: string[], bitPlace: number) {
  const bitCount = bitCounter(diagnosticReport, bitPlace);

  if (bitCount[0] > bitCount[1]) {
    return '0';
  }
  if (bitCount[1] > bitCount[0]) {
    return '1';
  }
  if (bitCount[0] === bitCount[1]) {
    return null;
  }
}
