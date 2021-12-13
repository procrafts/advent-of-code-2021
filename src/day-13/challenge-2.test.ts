import { Paper } from './paper';

describe('challenge 13-2', () => {
  describe('paper', () => {
    test('example', () => {
      const paper = new Paper()
      paper.followInstructions();
      paper.countDots()
      expect(paper.print()).toBe('#####\n' +
        '#...#\n' +
        '#...#\n' +
        '#...#\n' +
        '#####\n' +
        '.....\n' +
        '.....\n');
    });
    test('challenge', () => {
      const paper = new Paper('input')
      paper.followInstructions();
      paper.countDots()
      expect(paper.print()).toBe('..##.###..####..##..#..#..##..#..#.###..\n' +
        '...#.#..#....#.#..#.#..#.#..#.#..#.#..#.\n' +
        '...#.#..#...#..#....#..#.#..#.#..#.#..#.\n' +
        '...#.###...#...#....#..#.####.#..#.###..\n' +
        '#..#.#....#....#..#.#..#.#..#.#..#.#.#..\n' +
        '.##..#....####..##...##..#..#..##..#..#.\n')
    })
  });
});
