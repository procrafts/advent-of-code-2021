import { readInput } from '../read-input';
import { Source } from '../source';
import { Cartographer } from './cartographer';
import { Basin, HeightPoint } from './models';

export class Caves {

  heightmap: number[][];
  lowPoints: HeightPoint[] = [];
  lowPointsSum: number;
  basins: Basin[];
  productLargestThree: number;

  constructor(source: Source = 'example') {
    this.setHeightMap(source);
    this.setLowPoints();
    this.setLowPointsSum();
    this.setBasins();
    this.setProductLargestThree();
  }

  private static getBasinSize(basin: Basin) {
    return basin.reduce((sum, line) => {
      return sum + line.reduce((lineSum, entry) => entry ? lineSum + 1 : lineSum, 0);
    }, 0);
  }

  private setHeightMap(source: Source) {
    const lines = readInput(['day-9', source]);
    const lineLength = lines[0].split('').length;
    const heightMap = [...new Array(lines.length)].map(() => [...new Array(lineLength)]);

    lines.forEach((line, y) => {
      line.split('').forEach((height, x) => {
        heightMap[y][x] = +height;
      });
    });
    this.heightmap = heightMap;
  }

  private setLowPoints() {
    this.heightmap.forEach((line, y) => line.map((height, x) => {
      if (this.isLowPoint({ y, x, height })) {
        this.lowPoints.push({ y, x, height });
      }
    }));
  }

  private isLowPoint({ y, x, height }: HeightPoint) {
    const top = y === 0 || height < this.heightmap[y - 1][x];
    const bottom = y === this.heightmap.length - 1 || height < this.heightmap[y + 1][x];
    const left = x === 0 || height < this.heightmap[y][x - 1];
    const right = x === this.heightmap[y].length - 1 || height < this.heightmap[y][x + 1];
    return top && bottom && left && right;
  }

  private setLowPointsSum() {
    this.lowPointsSum = this.lowPoints.reduce((sum, { height }) => sum + height + 1, 0);
  }

  private setBasins() {
    this.basins = this.lowPoints.map(lowPoint => new Cartographer(lowPoint, this.heightmap).basin);
  }

  private setProductLargestThree() {
    const sizes = this.basins.map(basin => Caves.getBasinSize(basin)).sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
    this.productLargestThree = sizes[0] * sizes[1] * sizes [2];
  }
}
