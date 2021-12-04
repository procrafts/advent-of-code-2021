import { writeOutput } from './write-output';

let output = '';
run().then(() => {
  writeOutput(output);
});

async function run() {
  for (let i = 1; i <= 25; i++) {
    await runChallenge(i, 1);
    await runChallenge(i, 2);
  }
}

function runChallenge(i: number, j: number) {
  return import(`./day-${i}/challenge-${j}`).then((res: { default: () => string }) => {
    const header = `Challenge ${i}-${j}`;
    const content = res.default();
    const footer = '------\n';

    output += `${header}\n${content}\n${footer}\n\n`;
    console.log(output);
  }, () => {
  });
}
