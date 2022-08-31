// The Setup: countTimesRan * 100
{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  for (let i = 0; i < 100; i++) {
    countTimesRan();
  }
}

// Introducing randomness
{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  function maybeRun(callback) {
    if (Math.random() < 0.9) {
      return callback();
    };
  }

  const iterationsThatRan = [];

  for (let i = 0; i < 100; i++) {
    maybeRun(countTimesRan);
    maybeRun(() => iterationsThatRan.push(i));
  }

  console.log(iterationsThatRan);
}
