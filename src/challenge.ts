export type Solver<INPUT extends any[], OUTPUT> = (...args: INPUT) => OUTPUT;
export type CallWithInput = () => string

export interface Challenge<INPUT extends any[], OUTPUT> {
  solver: Solver<INPUT, OUTPUT>;
  input: INPUT;
  callWithInput: CallWithInput;
}
