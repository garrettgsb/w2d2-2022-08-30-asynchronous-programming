// We want to say "do X in Y milliseconds."
// So it's not like the whole program has to wait for 2 seconds, then do a thing, then wait, then do a thing...
// It's like you say "Hey, do your thing, but when 2 seconds have passed, run this, k?"
function doXInYMs(x /* a function */, y /* some number of milliseconds */) {
  setTimeout(x, y);
}

doXInYMs(() => console.log('2 seconds have passed...'), 2000);
doXInYMs(() => console.log('4 seconds have passed...'), 4000);
doXInYMs(() => console.log('5 seconds have passed...'), 5000);
doXInYMs(() => console.log('5.5 seconds have passed...'), 5500);


// Here's a weird gotcha: `console.log` before and after... Why?
