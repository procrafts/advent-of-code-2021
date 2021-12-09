import { SmokeBasin } from './smoke-basin';

export default function(): string {
  return `product of largest three basins ${new SmokeBasin('input').productLargestThree}`;
}
