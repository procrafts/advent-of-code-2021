import { readInput } from '../read-input';
import { Source } from '../source';

type Segments = string[]
type WireSegmentMap = { a: Segments, b: Segments, c: Segments, d: Segments, e: Segments, f: Segments, g: Segments }

export class Display {
  constructor(public readonly everyDigit: string[], public readonly fourDigits: string[]) {
  }

  static createDisplays(source: Source = 'example') {
    return readInput(['day-8', source], { trim: true, filterEmpty: true })
      .map(line => line
        .split('|')
        .map((group) => group.split(' ').filter(i => !!i))
      ).map(([everyDigit, fourDigits]) => new Display(everyDigit, fourDigits));
  }

  static countUniqueNumberOfSegments(displays: Display[]) {
    return displays.map(display => display.uniqueNumberOfSegments().length).reduce((a, b) => a + b, 0);
  }

  static sumAllDisplays(displays: Display[]) {
    return displays.map(display => display.determineFourDigitSum()).reduce((a, b) => a + b, 0);
  }

  wireSegmentMapping(): WireSegmentMap {
    const wire: WireSegmentMap = {
      a: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      b: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      c: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      d: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      e: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      f: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      g: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    };

    return Object.entries(wire).map(([letter, possibilities]) => {
      const count = this.everyDigit.filter(segment => segment.includes(letter)).length;
      switch (count) {
        case 4:
          // e true
          return [letter, this.reducePossibilities(['e'], possibilities)] as const;
        case 6:
          // b true
          return [letter, this.reducePossibilities(['b'], possibilities)] as const;
        case 7:
          // d true
          // g true
          return [letter, this.reducePossibilities(['d', 'g'], possibilities)] as const;
        case 8:
          // a true
          // c true
          return [letter, this.reducePossibilities(['a', 'c'], possibilities)] as const;
        case 9:
          // f true
          return [letter, this.reducePossibilities(['f'], possibilities)] as const;
      }
    }).reduce((result, [letter, segments]) => ({ ...result, [letter]: segments }), {} as WireSegmentMap);
  }

  uniqueNumberOfSegments() {
    return this.fourDigits.filter(digit => {
      switch (digit.length) {
        case 2:
        case 3:
        case 4:
        case 7:
          return true;
        default:
          return false;
      }
    });
  }

  useOneToDetermineSegmentC(wireSegmentMap: WireSegmentMap) {
    const one = this.everyDigit.find(entry => entry.length === 2);
    const wireForSegmentF = Object.entries(wireSegmentMap).find(([, s]) => s.includes('f'))[0];
    const wireForSegmentC = one.split('').find(char => char !== wireForSegmentF);
    return Object.entries(wireSegmentMap).map(([c, s]) => {
      if (c === wireForSegmentC) {
        return [c, ['c']] as const;
      }
      return [c, s.filter(l => l !== 'c')] as const;
    }).reduce((res, [c, s]) => ({ ...res, [c]: s }), {} as WireSegmentMap);
  }

  useFourToDetermineSegmentD(wireSegmentMap: WireSegmentMap) {
    const four = this.everyDigit.find(entry => entry.length === 4);
    const wiresForSegmentsBCF = Object.entries(wireSegmentMap).filter(([, s]) => s.includes('b') || s.includes('c') || s.includes('f')).reduce((prev, curr) => prev + curr[0], '');
    const wireForSegmentD = four.split('').find(char => !wiresForSegmentsBCF.includes(char));
    return Object.entries(wireSegmentMap).map(([c, s]) => {
      if (c === wireForSegmentD) {
        return [c, ['d']] as const;
      }
      return [c, s.filter(l => l !== 'd')] as const;
    }).reduce((res, [c, s]) => ({ ...res, [c]: s }), {} as WireSegmentMap);
  }

  checkWireSegmentMapDetermination(wireSegmentMap: WireSegmentMap) {
    if (Object.values(wireSegmentMap).some(entry => entry.length !== 1)) {
      throw new Error('Mapping not solved ' + JSON.stringify(wireSegmentMap));
    }
  }

  mapToNumber(): Record<number, string> {
    const wireSegmentMap = this.useFourToDetermineSegmentD(this.useOneToDetermineSegmentC(this.wireSegmentMapping()));
    this.checkWireSegmentMapDetermination(wireSegmentMap);
    const a = Object.entries(wireSegmentMap).find(([, value]) => value[0] === 'a')[0];
    const b = Object.entries(wireSegmentMap).find(([, value]) => value[0] === 'b')[0];
    const c = Object.entries(wireSegmentMap).find(([, value]) => value[0] === 'c')[0];
    const d = Object.entries(wireSegmentMap).find(([, value]) => value[0] === 'd')[0];
    const e = Object.entries(wireSegmentMap).find(([, value]) => value[0] === 'e')[0];
    const f = Object.entries(wireSegmentMap).find(([, value]) => value[0] === 'f')[0];
    const g = Object.entries(wireSegmentMap).find(([, value]) => value[0] === 'g')[0];

    const numbers = {
      0: a + b + c + e + f + g,
      1: c + f,
      2: a + c + d + e + g,
      3: a + c + d + f + g,
      4: b + c + d + f,
      5: a + b + d + f + g,
      6: a + b + d + e + f + g,
      7: a + c + f,
      8: a + b + c + d + e + f + g,
      9: a + b + c + d + f + g,
    };
    const sortedNumbers = Object.entries(numbers).reduce((res, [k, v]) => ({
      ...res,
      [k]: Array.from(v).sort().join('')
    }), {});
    this.checkNumbersAgainstInputs(sortedNumbers);
    return sortedNumbers;
  }

  determineFourDigitDisplay() {
    const numbers = this.mapToNumber();
    const sortedFourDigits = this.fourDigits.map(digit => Array.from(digit).sort().join(''));
    return sortedFourDigits.map(digit => {
      const match = Object.entries(numbers).find(([, val]) => val === digit);
      return match[0];
    });
  }

  determineFourDigitSum() {
    return +this.determineFourDigitDisplay().reduce((a, b) => a + b, '');
  }

  private reducePossibilities(letters: string[], segments: Segments): Segments {
    const filteredSegments = [];
    segments.forEach((char) => {
      if (letters.includes(char)) {
        filteredSegments.push(char);
      }
    });
    return filteredSegments;
  }

  private checkNumbersAgainstInputs(numbers: Record<number, string>) {
    let mistakes = [];
    Object.values(numbers).forEach(value => {
      if (!this.everyDigit.map(i => Array.from(i).sort().join('')).find(digit => digit === value)) {
        mistakes.push(value);
      }
    });
    if (mistakes.length) {
      throw new Error('Could not find digit input ' + JSON.stringify(mistakes));
    }
  }
}
