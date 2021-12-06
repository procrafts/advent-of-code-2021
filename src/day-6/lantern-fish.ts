import { readInput } from '../read-input';

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

  static setInitialSwarm(source: 'example' | 'input' = 'example') {
    LanternFish.swarm = LanternFish.createSwarm(readInput(['day-6', source])[0]);
  }

  static passDays(days: number) {
    for (let d = 0; d < days; d++) {
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
}
