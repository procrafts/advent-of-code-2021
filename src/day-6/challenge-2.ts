import { LanternFish } from './lantern-fish';

export default function(): string {
  LanternFish.setInitialSwarm('input');
  LanternFish.passDays(256);
  return `swarm size after 256 days is ${LanternFish.size}`;
}
