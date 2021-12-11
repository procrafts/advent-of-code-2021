import { readInput } from '../read-input';
import { Source } from '../source';

type Octopus = { energy: number, flashing: boolean };

export class Octopuses {
  all: Octopus[][];
  flashes = 0;

  constructor(source: Source = 'example') {
    this.all = readInput(['day-11', source]).map((line) => line.split('').map((energy) => ({
      energy: +energy,
      flashing: false,
    })));
  }

  doSteps(sync: true): number
  doSteps(repeat: number): void
  doSteps(repeatOrUntilSync: number | true = 1): number | void {
    if (repeatOrUntilSync === true) {
      return this.doUntilSynchronizing();
    }
    for (let i = 0; i < repeatOrUntilSync; i++) {
      this.doStep();
    }
  }

  private doUntilSynchronizing() {
    let synchronFlashes = 0;
    let step = 0;
    while (synchronFlashes < this.all.length * this.all[0].length) {
      synchronFlashes = 0;
      this.doStep();
      this.all.forEach(line => line.forEach(octopus => {
        if (octopus.energy === 0) {
          synchronFlashes++;
        }
      }));
      step++;
    }
    return step;
  }

  private doStep() {
    this.all.forEach((line) => line.forEach((octopus) => {
      octopus.energy++;
    }));
    while (this.all.some(line => line.some(octopus => octopus.energy > 9 && !octopus.flashing))) {
      this.flashAll();
    }
    this.all.forEach(line => line.forEach(octopus => {
      if (octopus.energy > 9) {
        this.flashes++;
        octopus.energy = 0;
        octopus.flashing = false;
      }
    }));
  }

  private flashAll() {
    this.all.forEach((line, y) => line.forEach((octopus, x) => {
      if (octopus.energy > 9 && !octopus.flashing) {
        this.flash(octopus, y, x);
      }
    }));
  }

  private flash(octopus: Octopus, y: number, x: number) {
    octopus.flashing = true;
    if (y > 0) {
      // N
      this.all[y - 1][x].energy++;
    }
    if (x > 0) {
      // W
      this.all[y][x - 1].energy++;
    }
    if (y < this.all.length - 1) {
      // S
      this.all[y + 1][x].energy++;
    }
    if (x < this.all[0].length - 1) {
      // E
      this.all[y][x + 1].energy++;
    }
    if (y > 0 && x > 0) {
      // NW
      this.all[y - 1][x - 1].energy++;
    }
    if (y > 0 && x < this.all[0].length - 1) {
      // NE
      this.all[y - 1][x + 1].energy++;
    }
    if (y < this.all.length - 1 && x > 0) {
      // SW
      this.all[y + 1][x - 1].energy++;
    }
    if (y < this.all.length - 1 && x < this.all[0].length - 1) {
      // SE
      this.all[y + 1][x + 1].energy++;
    }
  }
}
