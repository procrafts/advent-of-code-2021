import { SyntaxChecker } from './syntax-checker';

export default function(): string {
  return 'syntax check score is ' + new SyntaxChecker('input').syntaxCheckScore;
}
