import { writeFileSync } from 'fs';
import { join } from 'path';

export function writeOutput(content: string) {

  try {
    writeFileSync(join(__dirname, '..', 'OUTPUT.txt'), content);
  } catch (err) {
    console.error(err);
  }
}
