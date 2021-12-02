run();

async function run() {
  for (let i = 1; i <= 25; i++) {
    await runChallenge(i, 1);
    await runChallenge(i, 2);
  }
}

function runChallenge(i: number, j: number) {
  return import(`./day-${i}/challenge-${j}`).then((res: { default: () => string }) => {
    console.log(`Challenge ${i}-${j}`);
    console.log(res.default());
    console.log('------');
  }, () => {
    console.log(`Challenge ${i}-${j}`);
    console.log('not yet available');
    console.log('------');
  });
}
