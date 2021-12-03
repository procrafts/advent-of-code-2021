import { readFileSync } from 'fs';
import { join } from 'path';

export function readInput(path: string[]): string[] {
  const allFileContents = readFileSync(join(__dirname, ...path), 'utf-8');
  return allFileContents.split(/\r?\n/).map(line => {
    return line.trim();
  }).filter(line => {
    return line.length;
  });
}
