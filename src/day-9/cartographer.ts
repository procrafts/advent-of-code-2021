import { Basin, HeightPoint } from './models';

export class Cartographer {
  basin: Basin;

  constructor({ y, x, height }: HeightPoint, private readonly heightMap: number[][]) {
    this.basin = heightMap.map(line => line.map(() => false));
    this.chartBasin(y, x, height);
  }

  private chartBasin(y: number, x: number, height: number) {
    if (height !== 9) {
      this.basin[y][x] = true;
      this.chartTop(y, x, height);
      this.chartBottom(y, x, height);
      this.chartLeft(y, x, height);
      this.chartRight(y, x, height);
    }
  }

  private chartTop(y: number, x: number, height: number) {
    if (y !== 0 && !this.basin[y - 1][x] && this.heightMap[y - 1][x] >= height) {
      this.chartBasin(y - 1, x, this.heightMap[y - 1][x]);
    }
  }

  private chartBottom(y: number, x: number, height: number) {
    if (y !== this.heightMap.length - 1 && !this.basin[y + 1][x] && this.heightMap[y + 1][x] >= height) {
      this.chartBasin(y + 1, x, this.heightMap[y + 1][x]);
    }
  }

  private chartLeft(y: number, x: number, height: number) {
    if (x !== 0 && !this.basin[y][x - 1] && this.heightMap[y][x - 1] >= height) {
      this.chartBasin(y, x - 1, this.heightMap[y][x - 1]);
    }
  }

  private chartRight(y: number, x: number, height: number) {
    if (x !== this.heightMap[0].length - 1 && !this.basin[y][x + 1] && this.heightMap[y][x + 1] >= height) {
      this.chartBasin(y, x + 1, this.heightMap[y][x + 1]);
    }
  }
}
