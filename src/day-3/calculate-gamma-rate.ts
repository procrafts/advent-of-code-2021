import { findMostCommonInBitPlace } from './find-most-common-in-bit-place';


export function calculateGammaRate(diagnosticReport: string[]) {
  if (!diagnosticReport?.length) {
    throw new Error('missing report');
  }
  diagnosticReport.forEach(entry => {
    if (entry.length !== diagnosticReport[0].length) {
      throw new Error('invalid entry length ' + entry.length);
    }
  });
  const entryLength = diagnosticReport[0].length;

  let gammaRate = '';
  for (let bitPlace = 0; bitPlace < entryLength; bitPlace++) {
    const bitCounter = findMostCommonInBitPlace(diagnosticReport, bitPlace);
    if (bitCounter === null) {
      throw new Error('same number of 0s and 1s in bit place ' + bitPlace);
    }
    gammaRate += bitCounter;


  }
  return gammaRate;
}
