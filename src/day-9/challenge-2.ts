import { Caves } from './caves';

export default function(): string {
  return `product of largest three basins ${new Caves('input').productLargestThree}`;
}
