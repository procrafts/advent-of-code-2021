import { Display } from './display';

export default function(): string {
  return `digits 1, 4, 7, or 8 appear ${Display.countUniqueNumberOfSegments(Display.createDisplays('input'))} times`;
}
