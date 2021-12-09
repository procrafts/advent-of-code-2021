import { Caves } from './caves';

export default function(): string {
  return `risk level sum is ${new Caves('input').lowPointsSum}`;
}
