import { readInput } from '../read-input';
import { Source } from '../source';
import { BasinCartographer } from './basin-cartographer';
import { Basin, HeightPoint } from './models';

export class SmokeBasin {

  heightMap: number[][];
  lowPointsMap: boolean[][];
  lowPoints: HeightPoint[] = [];
  lowPointsSum: number;
  basins: Basin[];
  productLargestThree: number;

  constructor(source: Source = 'example') {
    this.setHeightMap(source);
    this.setLowPoints();
    this.setLowPointsSum();
    this.setBasins();
    this.setProductLargetsThree();
  }

  private static getBasinSize(basin: Basin) {
    return basin.reduce((sum, line) => {
      return sum + line.reduce((lineSum, entry) => entry ? lineSum + 1 : lineSum, 0);
    }, 0);
  }

  private setHeightMap(source: Source) {
    const lines = readInput(['day-9', source], { trim: true, filterEmpty: true });
    const lineLength = lines[0].split('').length;
    const map = [...new Array(lines.length)].map(() => [...new Array(lineLength)]);

    lines.forEach((line, i) => {
      line.split('').forEach((entry, j) => {
        map[i][j] = +entry;
      });
    });
    this.heightMap = map;
  }

  private setLowPoints() {
    this.lowPointsMap = this.heightMap.map((line, y) => {
      return line.map((height, x) => {
        const isLowPoint = this.isLowPoint({ y, x, height });
        if (isLowPoint) {
          this.lowPoints.push({ y, x, height });
        }
        return isLowPoint;
      });
    });
  }

  private isLowPoint({ y, x, height }: HeightPoint) {
    const top = y === 0 || height < this.heightMap[y - 1][x];
    const bottom = y === this.heightMap.length - 1 || height < this.heightMap[y + 1][x];
    const left = x === 0 || height < this.heightMap[y][x - 1];
    const right = x === this.heightMap[y].length - 1 || height < this.heightMap[y][x + 1];
    return top && bottom && left && right;
  }

  private setLowPointsSum() {
    let sum = 0;
    this.lowPointsMap.forEach((line, y) => {
      line.forEach((isLowPoint, x) => {
        if (isLowPoint) {
          sum += this.heightMap[y][x] + 1;
        }
      });
    });
    this.lowPointsSum = sum;
  }

  private setBasins() {
    const basins = this.lowPoints.map(lowPoint => new BasinCartographer(lowPoint, this.heightMap).basin);
    const uniqueBasins = [];
    basins.forEach(basin => {
      if (!uniqueBasins.some(unicate => this.isSameBasin(basin, unicate))) {
        uniqueBasins.push(basin);
      }
    });
    this.basins = uniqueBasins;
  }

  private isSameBasin(a: Basin, b: Basin) {
    return a.some((line, y) => line.some((entry, x) => entry === true && b[y][x] === true));
  }

  private setProductLargetsThree() {
    const sizes = this.basins.map(basin => SmokeBasin.getBasinSize(basin)).sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
    if (sizes[2] === sizes[3]) {
      throw new Error('no unique third place');
    }
    this.productLargestThree = sizes[0] * sizes[1] * sizes [2];
  }
}
