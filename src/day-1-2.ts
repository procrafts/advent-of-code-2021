import { CallWithInput, Challenge, Solver } from './challenge';
import day1 from './day-1-1';
import input from './day-1-1-input';

export const solver: Solver<number[], number[]> = (...args: number[]) => {
  const measurementGroups = [];
  args.reduce((prev, curr, i, a) => {
    prev.push(curr);
    if (prev.length === 3) {
      measurementGroups.push(sumUp(prev));
      prev.shift();
      return prev;
    }
    return prev;
  }, []);
  return measurementGroups;
};

function sumUp(values: number[]): number {
  return values.reduce((prev, curr) => prev + curr, 0);
}

export const callWithInput: CallWithInput = () => day1.solver(...solver(...input)).toString() + ' measurement increases';

export default {
  solver,
  callWithInput,
  input
} as Challenge<number[], number[]>;
