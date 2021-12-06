import { LanternFish } from './lantern-fish';

export default function(): string {
  LanternFish.setInitialSwarm('input');
  LanternFish.passDays(80);
  return `swarm size after 80 days is ${LanternFish.size}`;
}
