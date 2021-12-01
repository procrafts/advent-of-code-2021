import { CallWithInput, Challenge, Solver } from '../challenge';
import input from './input';

export const solver: Solver<number[], number> = (...args: number[]) => {
  let increases = 0;

  args.reduce((prev, curr) => {
    if (prev !== null && prev < curr) {
      increases++;
    }
    return curr;
  }, null);

  return increases;
};

export const callWithInput: CallWithInput = () => solver(...input).toString() + ' measurement increases';

export default {
  solver,
  callWithInput,
  input
} as Challenge<number[], number>;
