import { Basin, HeightPoint } from './models';

export class BasinCartographer {
  basin: Basin;

  constructor(private readonly startingPoint: HeightPoint, private readonly heightMap: number[][]) {
    this.basin = [...new Array(heightMap.length)].map(() => [...new Array(heightMap[0].length)]);
    this.chartBasin({ ...startingPoint });
  }

  private chartBasin({ y, x, height }: HeightPoint) {
    if (height === 9) {
      return;
    }
    this.basin[y][x] = true;
    this.chartTop({ y, x, height });
    this.chartBottom({ y, x, height });
    this.chartLeft({ y, x, height });
    this.chartRight({ y, x, height });
  }

  private chartTop({ y, x, height }: HeightPoint) {
    if (y === 0 || this.basin[y - 1][x] === true) {
      return;
    }
    if (this.heightMap[y - 1][x] >= height) {
      this.chartBasin({ y: y - 1, x, height: this.heightMap[y - 1][x] });
      return;
    }
  }

  private chartBottom({ y, x, height }: HeightPoint) {
    if (y === this.heightMap.length - 1 || this.basin[y + 1][x] !== undefined) {
      return;
    }
    if (this.heightMap[y + 1][x] >= height) {
      this.chartBasin({ y: y + 1, x, height: this.heightMap[y + 1][x] });
      return;
    }
  }

  private chartLeft({ y, x, height }: HeightPoint) {
    if (x === 0 || this.basin[y][x - 1] !== undefined) {
      return;
    }
    if (this.heightMap[y][x - 1] >= height) {
      this.chartBasin({ y, x: x - 1, height: this.heightMap[y][x - 1] });
      return;
    }
  }

  private chartRight({ y, x, height }: HeightPoint) {
    if (x === this.heightMap[0].length - 1 || this.basin[y][x + 1] !== undefined) {
      return;
    }
    if (this.heightMap[y][x + 1] >= height) {
      this.chartBasin({ y, x: x + 1, height: this.heightMap[y][x + 1] });
      return;
    }
  }
}
