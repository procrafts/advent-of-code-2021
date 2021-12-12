import { readInput } from '../read-input';
import { Source } from '../source';


export function countPaths(source: Source = 'example', smallTwice = false) {
  const caves: { [pos: string]: string[] } = readInput(['day-12', source])
    .map(line => line.split('-'))
    .reduce((caves, [a, b]) => {
      caves[a] = [...(caves[a] ?? []), b];
      caves[b] = [...(caves[b] ?? []), a];
      return caves
    }, {});

  const paths = [];

  function findPath(path: string[], curr: string) {
    const newPath = [...path, curr]
    if (curr === 'start' && path.length > 0) {
      return;
    }
    if (curr === 'end') {
      paths.push(newPath);
      return;
    }
    const smallVisitedTwice = Object.values(newPath.reduce((res, i) => {
      if (/^[a-z]+$/.test(i)) {
        return { ...res, [i]: (res[i] ?? 0) + 1 }
      }
      return res
    }, {})).some(v => v > 1)
    for (const exit of caves[curr]) {
      if ((smallTwice && !smallVisitedTwice) || /^[A-Z]+$/.test(exit) || !path.includes(exit)) {
        findPath(newPath, exit);
      }
    }
  }

  findPath([], 'start');

  return paths.length;
}
