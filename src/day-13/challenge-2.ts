import { Paper } from './paper';

export default function(): string {
  const paper = new Paper('input')
  paper.followInstructions();
  paper.countDots()
  return 'code is\n' + paper.print();
}
