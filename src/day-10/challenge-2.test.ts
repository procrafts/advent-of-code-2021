import { SyntaxChecker } from './syntax-checker';

describe('challenge 10-2', () => {
  describe('syntax check', () => {
    it('example', () => {
      expect(new SyntaxChecker().autocompleteScore).toBe(288957);
    });
    it('challenge', () => {
      expect(new SyntaxChecker('input').autocompleteScore).toBe(2995077699);
    });
  });
});
