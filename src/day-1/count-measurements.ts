export function countMeasurements(...args: number[]): number {
  let increases = 0;

  args.reduce((prev, curr) => {
    if (prev !== null && prev < curr) {
      increases++;
    }
    return curr;
  }, null);

  return increases;
}
