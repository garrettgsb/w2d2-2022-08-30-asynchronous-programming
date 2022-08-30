// The interface for setInterval is the same as setTimeout (including the return value)
{
  // setInterval(() => { console.log('tick') }, 1000);
}


// So what's the return value?
// Clear interval
{
  // const tickInterval = setInterval(() => { console.log('tick') }, 1000);
  // setTimeout(() => { clearInterval(tickInterval) }, 5000); // Race condition!
}



// Why not make the interval responsible for clearing itself?
{
  let secondsLeft = 5;
  const interval = setInterval(() => {
    if (secondsLeft === 0) {
      console.log('Done!');
      clearInterval(interval);
    } else {
      console.log(secondsLeft--);
    }
  }, 1000);
}

// While we're at it, why not put it in a function?
{
  function countdown(seconds) {
    let secondsLeft = seconds;
    const interval = setInterval(() => {
      console.log(secondsLeft--);
      if (secondsLeft === 0) {
        console.log('Done!');
        clearInterval(interval);
      }
    }, 1000);
  }

  countdown(10);
}
