export function groupMeasurements(...args: number[]): number[] {
  const measurementGroups: number[] = [];
  args.reduce((prev, curr) => {
    prev.push(curr);
    if (prev.length === 3) {
      measurementGroups.push(sumUp(prev));
      prev.shift();
      return prev;
    }
    return prev;
  }, [] as number[]);
  return measurementGroups;
}

function sumUp(values: number[]): number {
  return values.reduce((prev, curr) => prev + curr, 0);
}
