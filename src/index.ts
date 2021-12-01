import { Challenge } from './challenge';

const challenge = process.argv[2];

if (!/^[1-9]-[1-2]$|^1[0-9]-[1-2]$|^2[0-5]-[1-2]$/.test(challenge)) {
  console.log('Which challenge do you want to run? Call this command with "day dash challenge" as argument ([0-25]-[1-2]).');
  process.exit(0);
}

import('./day-' + challenge).then((res: { default: Challenge<unknown[], unknown> }) => {
  console.log(`running challenge ${challenge}`);
  console.log(`Solution: ${res.default.callWithInput()}`);
}, () => {
  console.log(`challenge ${challenge} not yet available`);
});

