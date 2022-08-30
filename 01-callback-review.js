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

// if Math.random()...
{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  for (let i = 0; i < 100; i++) {
    if (Math.random() < 0.1) {
      countTimesRan();
    }
  }
}


// shouldRun: It would be much nicer in a function
{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  function shouldRun() { return Math.random() < 0.1 }

  for (let i = 0; i < 100; i++) {
    if (shouldRun()) {
      countTimesRan();
    }
  }
}


// maybeRun: There's the callback
{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  function maybeRun(fn) {
    if (Math.random < 0.1) {
      fn();
    }
  }

  for (let i = 0; i < 100; i++) {
    maybeRun(countTimesRan);
  }
}
