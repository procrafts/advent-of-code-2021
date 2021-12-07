import { readInput } from '../read-input';
import { Source } from '../source';

export class LanternFish {
  static swarm: number[] = [];

  static get size() {
    return LanternFish.swarm.reduce((r, n) => r + n, 0);
  }

  static createSwarm(input: string): number[] {
    return input.split(',').reduce((result, nextFish) => {
      result[+nextFish]++;
      return result;
    }, [...new Array(9)].map(() => 0));
  }

  static setInitialSwarm(source: Source = 'example') {
    LanternFish.swarm = LanternFish.createSwarm(readInput(['day-6', source])[0]);
  }

  static passDays(totalDays: number): void {
    const days = totalDays % 7;
    for (let d = 0; d < days; d++) {
      LanternFish.passDay();
    }

    const weeks = Math.floor(totalDays / 7);
    for (let w = 0; w < weeks; w++) {
      LanternFish.passWeek();
    }
  }

  private static passWeek() {
    const newSwarm = [...LanternFish.swarm];
    for (let i = 0; i <= 8; i++) {
      if (i > 6) {
        newSwarm[i] -= LanternFish.swarm[i];
        newSwarm[i - 7] += LanternFish.swarm[i];
      } else {
        newSwarm[8 - (6 - i)] += LanternFish.swarm[i];
      }
    }
    LanternFish.swarm = newSwarm;
  }

  private static passDay() {
    const newSwarm = [...new Array(9)].map(() => 0);
    for (let i = 0; i <= 8; i++) {
      if (i === 0) {
        newSwarm[8] += LanternFish.swarm[i];
        newSwarm[6] += LanternFish.swarm[i];
      } else {
        newSwarm[i - 1] += LanternFish.swarm[i];
      }
    }
    LanternFish.swarm = newSwarm;
  }
}
