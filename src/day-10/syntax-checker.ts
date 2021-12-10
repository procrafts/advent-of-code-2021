import { readInput } from '../read-input';
import { Source } from '../source';

export class SyntaxChecker {
  chunks: string[];
  syntaxCheckScore: number;
  incompleteOpenings: string[][] = [];
  autocompleteScore: number;

  constructor(source: Source = 'example') {
    this.chunks = readInput(['day-10', source]);
    this.setSyntaxCheckScore();
    this.setAutocompleteScore();
  }

  private static toClosing(opening: string) {
    switch (opening) {
      case '(':
        return ')';
      case '[':
        return ']';
      case '{':
        return '}';
      case '<':
        return '>';
    }
  }

  private static isOpenCloseMatch(open: string, close: string) {
    return (open === '(' && close === ')') ||
      (open === '[' && close === ']') ||
      (open === '{' && close === '}') ||
      (open === '<' && close === '>');
  }

  private static getLineAutocompleteScore(line: string[]) {
    return line.reduce((res, next) => {
      switch (next) {
        case ')':
          return res * 5 + 1;
        case ']':
          return res * 5 + 2;
        case '}':
          return res * 5 + 3;
        case '>':
          return res * 5 + 4;
        default:
          return res;
      }
    }, 0);
  }

  private checkLine(chunk: string) {
    let elements = chunk.split('');
    let iterator: number = 0;
    while (iterator < elements.length) {
      if (/[)\]}>]/.test(elements[iterator])) {
        if (!SyntaxChecker.isOpenCloseMatch(elements[iterator - 1], elements[iterator])) {
          return elements[iterator];
        }
        elements.splice(iterator - 1, 2);
        iterator = 0;
      } else {
        iterator++;
      }
    }
    this.completeOpenings(elements);
    return null;
  }

  private completeOpenings(openings: string[]) {
    this.incompleteOpenings.push(openings.reverse().map(SyntaxChecker.toClosing));
  }

  private setSyntaxCheckScore() {
    this.syntaxCheckScore = this.chunks.map(chunk => this.checkLine(chunk)).reduce((res, next) => {
      switch (next) {
        case ')':
          return res + 3;
        case ']':
          return res + 57;
        case '}':
          return res + 1197;
        case '>':
          return res + 25137;
        default:
          return res;
      }
    }, 0);
  }

  private setAutocompleteScore() {
    const scores = this.incompleteOpenings
      .map(line => SyntaxChecker.getLineAutocompleteScore(line))
      .sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
    this.autocompleteScore = scores[Math.floor(scores.length / 2)];
  }
}
