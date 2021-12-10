import { SyntaxChecker } from './syntax-checker';

export default function(): string {
  return 'autocomplete score is ' + new SyntaxChecker('input').autocompleteScore;
}
