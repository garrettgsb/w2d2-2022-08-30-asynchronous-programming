// Ruby has sleep, Python has sleep, bash has sleep...
// Why doesn't Javascript have sleep?

function sleep(timeInMs) {
  const endTime = Date.now() + timeInMs;
  while (Date.now() < endTime) {
    continue;
  }
}


console.log('Starting...');
sleep(2000);
console.log('2 seconds have passed...')
sleep(2000);
console.log('4 seconds have passed...')
sleep(1000);
console.log('5 seconds have passed...')
sleep(500);
console.log('5.5 seconds have passed...')
sleep(500);
console.log('6 seconds have passed...')
sleep(500);
console.log('6.5 seconds have passed...')
sleep(1500);
console.log('8 seconds have passed...')


// What if I want to know when 4.5 seconds have passed?
// What if I want to do other stuff during that time?
// We'll revisit this shortly, but for now, a quick aside: What is Javascript for?
