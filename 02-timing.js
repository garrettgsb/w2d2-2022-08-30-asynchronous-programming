// Ruby has sleep, Python has sleep, bash has sleep...
// Why doesn't Javascript have sleep?

function sleep(timeInMilliseconds) {
  const startTime = Date.now();
  const endTime = startTime + timeInMilliseconds;
  while (Date.now() < endTime) {
    continue;
  }
}

console.log('1')
sleep(300);
console.log('2')
sleep(3000);
console.log('3')
