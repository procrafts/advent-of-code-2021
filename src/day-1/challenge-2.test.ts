import prevChallenge from './challenge-1';
import challenge from './challenge-2';

describe('challenge 1-2', () => {
  it('should not group measurements of less than three', () => {
    expect(challenge.solver()).toStrictEqual([]);
    expect(challenge.solver(1, 2)).toStrictEqual([]);
  });

  it('should group measurements of three', () => {
    expect(challenge.solver(1, 2, 3)).toStrictEqual([1 + 2 + 3]);
  });

  it('should ignore leftover measurements', () => {
    expect(challenge.solver(1, 2, 3, 4)).toStrictEqual([1 + 2 + 3, 2 + 3 + 4]);
  });

  it('should group multiple groups', () => {
    expect(challenge.solver(1, 2, 3, 4, 5, 6)).toStrictEqual([1 + 2 + 3, 2 + 3 + 4, 3 + 4 + 5, 4 + 5 + 6]);
  });

  it('should group the example correctly', () => {
    expect(challenge.solver(199, 200, 208, 210, 200, 207, 240, 269, 260, 263)).toStrictEqual([607, 618, 618, 617, 647, 716, 769, 792]);
  });

  it('should work in combination with day-1-1 solution', () => {
    expect(prevChallenge.solver(...challenge.solver(199, 200, 208, 210, 200, 207, 240, 269, 260, 263))).toStrictEqual(5);
  });

  it('should measure the solution correctly', () => {
    expect(prevChallenge.solver(...challenge.solver(...challenge.input))).toStrictEqual(1362);
  });
});
