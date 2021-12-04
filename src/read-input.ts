import { readFileSync } from 'fs';
import { join } from 'path';

export function readInput(path: string[], config: {trim: boolean, filterEmpty: boolean} = {trim: true, filterEmpty: true}): string[] {
  const allFileContents = readFileSync(join(__dirname, ...path), 'utf-8');
  return allFileContents.split(/\r?\n/).map(line => {
    if(config.trim) {
      return line.trim();
    }
    return line;
  }).filter(line => {
    if(config.filterEmpty) {
      return line.length;
    }
    return true;
  });
}
