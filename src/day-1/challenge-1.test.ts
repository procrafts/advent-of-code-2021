import challenge from './challenge-1';

describe('challenge 1-1', () => {
  it('should have no measurement increases if nothing measured', () => {
    expect(challenge.solver()).toBe(0);
  });

  it('should have no measurement increases if measured one time', () => {
    expect(challenge.solver(10)).toBe(0);
  });

  it('should have one measurement increases if measured a deeper depth', () => {
    expect(challenge.solver(10, 20)).toBe(1);
  });

  it('should register decreases correctly', () => {
    expect(challenge.solver(30, 20, 10)).toBe(0);
  });

  it('should register increases that are below an all time high', () => {
    expect(challenge.solver(20, 10, 15)).toBe(1);
  });

  it('should measure the example correctly', () => {
    expect(challenge.solver(199, 200, 208, 210, 200, 207, 240, 269, 260, 263)).toBe(7);
  });

  it('should measure the solution correctly', () => {
    expect(challenge.solver(...challenge.input)).toBe(1387);
  });
});
