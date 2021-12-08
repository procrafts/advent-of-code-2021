import { Display } from './display';

export default function(): string {
  return `sum of all displays is ${Display.sumAllDisplays(Display.createDisplays('input'))}`;
}
