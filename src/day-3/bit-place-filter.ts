export function bitPlaceFilter(value: '0' | '1', bitPlace: number, diagnosticReport: string[]): string[] {
  return diagnosticReport.filter(entry => {
    return entry[bitPlace] === value;
  });
}
