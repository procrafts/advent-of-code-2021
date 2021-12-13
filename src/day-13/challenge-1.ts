import { Paper } from './paper';

export default function(): string {
  const paper = new Paper()
  paper.followInstructions(0);
  paper.countDots()
  return paper.totalDots + ' total dots';
}
