export function bitCounter(diagnosticReport: string[], bitPlace: number): [number, number] {
  return diagnosticReport.map(entry => {
    return entry[bitPlace];
  })
    .reduce((counter, entry) => {
      if (entry === '0') {
        counter[0]++;
        return counter;
      }
      if (entry === '1') {
        counter[1]++;
        return counter;
      }
      throw new Error('invalid bit');
    }, [0, 0]);
}
