import { readInput } from '../read-input';
import { Source } from '../source';

type Vent = { x1: number, y1: number, x2: number, y2: number };

export class VentsChart {
  vents: Vent[];
  chart: number[][];
  dangerZones: number;

  constructor(diagonal = false, source: Source = 'example') {
    this.setVents(diagonal, source);
    this.setEmptyVentChart();
    this.applyVents();
    this.countDangerZones();
  }

  private static isDiagonal({ x1, y1, x2, y2 }: Vent): boolean {
    return x1 - x2 !== 0 && y1 - y2 !== 0;
  }

  private static sortDescending(...values: number[]): number[] {
    return values.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
  }

  private setVents(diagonal: boolean, source: Source): void {
    const vents = readInput(['day-5', source]).map(line => {
      const [[x1, y1], [x2, y2]] = line.split(' -> ').map(point => point.split(','));
      return { x1: +x1, y1: +y1, x2: +x2, y2: +y2 };
    });
    this.vents = diagonal ? vents : vents.filter(vent => !VentsChart.isDiagonal(vent));
  }

  private setEmptyVentChart(): void {
    const [x, y] = this.vents.reduce(([x, y], { x1, y1, x2, y2 }) => {
      return [
        VentsChart.sortDescending(x, x1, x2)[0],
        VentsChart.sortDescending(y, y1, y2)[0],
      ];
    }, [0, 0]);

    this.chart = [...new Array(y + 1)].map(() => [...new Array(x + 1)].map(() => 0));
  }

  private applyVents(): void {
    this.vents.forEach((vent) => {
      const { x1, y1, x2, y2 } = vent;
      if (x1 - x2 === 0) {
        return this.applyVerticalVent(vent);
      }
      if (y1 - y2 === 0) {
        return this.applyHorizontalVent(vent);
      }
      return this.applyDiagonalVent(vent);
    });
  }

  private applyDiagonalVent({ x1, y1, x2, y2 }: Vent): void {
    let x = x1;
    let y = y1;
    do {
      this.chart[y][x]++;
      x += x1 < x2 ? 1 : -1;
      y += y1 < y2 ? 1 : -1;
    } while (x !== x2);
    this.chart[y][x]++;
  }

  private applyHorizontalVent({ x1, x2, y1: y }: Vent): void {
    const [high, low] = VentsChart.sortDescending(x1, x2);
    for (let i = low; i <= high; i++) {
      this.chart[y][i]++;
    }
  }

  private applyVerticalVent({ y1, y2, x1: x }: Vent): void {
    const [high, low] = VentsChart.sortDescending(y1, y2);
    for (let i = low; i <= high; i++) {
      this.chart[i][x]++;
    }
  }

  private countDangerZones() {
    this.dangerZones = this.chart.reduce((res, line) => res + line.reduce((res, dangerLevel) => dangerLevel >= 2 ? res + 1 : res, 0), 0);
  }
}
