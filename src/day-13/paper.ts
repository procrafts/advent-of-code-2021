import { readInput } from '../read-input';
import { Source } from '../source';

type Input = { instructions: Instruction[], dots: Dot[] }
type Instruction = { axis: string, pos: number }
type Dot = { x: number, y: number }

export class Paper {
  instructions: Instruction[];
  dots: Dot[];
  sheet: string[][]
  totalDots: number;

  constructor(source: Source = 'example') {
    this.readInput(source);
    this.createSheet();
  }


  foldUp(y: number) {
    const partOne = this.sheet.slice(0, y);
    const partTwo = this.sheet.slice(y + 1).reverse()
    this.sheet = partOne.map((l, y) => l.map((i, x) => i === '#' ? i : partTwo[y][x]));
  }

  foldLeft(x: number) {
    const partOne = this.sheet.map(line => line.slice(0, x));
    const partTwo = this.sheet.map(line => line.slice(x + 1).reverse());
    this.sheet = partOne.map((l, y) => l.map((i, x) => i === '#' ? i : partTwo[y][x]));
  }

  print() {
    return this.sheet.reduce((res, line) => res + line.reduce((r, x) => r + x, '') + '\n', '')
  }

  readInput(source: Source) {
    const { instructions, dots } = readInput(['day-13', source]).reduce((result, line): Input => {
      if (/^\d+,\d+$/.test(line)) {
        const [x, y] = line.split(',');
        result.dots.push({ x: +x, y: +y });
      } else {
        const [axis, pos] = line.match(/\w=\d+$/)[0].split('=');
        result.instructions.push({ axis, pos: +pos });
      }
      return result;
    }, { instructions: [], dots: [] });
    this.instructions = instructions;
    this.dots = dots;
  }

  createSheet() {
    const x = this.instructions.find(i => i.axis === 'x').pos * 2 + 1;
    const y = this.instructions.find(i => i.axis === 'y').pos * 2 + 1;
    const sheetSize = { x, y }
    this.sheet = this.dots.reduce((result, dot) => {
      result[dot.y][dot.x] = '#';
      return result;
    }, [...new Array(sheetSize.y)].map(() => [...new Array(sheetSize.x)].map(() => '.')));
  }

  followInstructions(i?: number) {
    let instructions: Instruction[];
    if (i === undefined) {
      instructions = this.instructions;
    } else {
      instructions = [this.instructions[i]];
    }
    instructions.forEach(({ axis, pos }) => {
      if (axis === 'y') {
        this.foldUp(pos);
      } else {
        this.foldLeft(pos);
      }
    })
  }

  countDots() {
    this.totalDots = this.sheet.reduce((res, line) => res + line.reduce((r, x) => r + (x === '#' ? 1 : 0), 0), 0)
  }
}
