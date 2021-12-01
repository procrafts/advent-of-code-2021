import { Challenge } from './challenge';

const day = process.argv[2];
const challenge = process.argv[3];

if (!/^[1-9]$|^1[0-9]$|^2[0-5]$/.test(day) || !/^[1-2]$/.test(challenge)) {
  console.log('Which challenge do you want to run? Call this command with "day challenge" as argument (npm start [0-25] [1-2]).');
  process.exit(0);
}

import(`./day-${day}/challenge-${challenge}`).then((res: { default: Challenge<unknown[], unknown> }) => {
  console.log(`running challenge ${challenge}`);
  console.log(`Solution: ${res.default.callWithInput()}`);
}, () => {
  console.log(`day ${day} challenge ${challenge} is not yet available`);
});

