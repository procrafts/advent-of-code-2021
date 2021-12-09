import { SmokeBasin } from './smoke-basin';

export default function(): string {
  return `risk level sum is ${new SmokeBasin('input').lowPointsSum}`;
}
