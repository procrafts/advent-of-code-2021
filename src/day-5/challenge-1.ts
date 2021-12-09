import { VentsChart } from './vents-chart';

export default function(): string {
  return `Hydrothermal vent overlaps: ${new VentsChart(false, 'input').dangerZones}`;
}
