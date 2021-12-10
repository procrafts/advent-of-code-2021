import { SyntaxChecker } from './syntax-checker';

describe('challenge 10-1', () => {
  describe('syntax check', () => {
    test('example', () => {
      expect(new SyntaxChecker().syntaxCheckScore).toBe(26397);
    });
    test('challenge', () => {
      expect(new SyntaxChecker('input').syntaxCheckScore).toBe(399153);
    });
  });
});
