const boat = {
  status: 'floating',
  waterInsideInL: 0,
  buoyancyThresholdInL: 1000, // The boat will sink if the amount of water inside exceeds this number.
};

let lastMessage = '';

function updateTerminal(message) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(message);
}

function checkBoatStatus() {
  if (boat.waterInsideInL > boat.buoyancyThresholdInL) {
    boat.status = 'sinking ';
    console.log('\nThe boat sank!')
    process.exit();
  }
  // console.table(boat);
  updateTerminal(`🛥: ${boat.waterInsideInL}L inside the hull ${lastMessage}`);
}

function takeOnWater() {
  // console.log('⬆ 50L of water rushes into the boat');
  boat.waterInsideInL += 50;
  lastMessage = '+50';
}

function bailOutWater() {
  // console.log('⬇️ 10L of water is bailed out of the boat');
  if (boat.waterInsideInL > 0) {
    boat.waterInsideInL -= 10;
    lastMessage = '-10';
  };
}

setInterval(checkBoatStatus, 10);
setInterval(takeOnWater, 800);
setInterval(bailOutWater, 300);

// Special events

setTimeout(() => {
  console.log("\n🌊🌊🌊 WHOOOSH! a huge wave crashes on the boat's deck, filling it with an extra 200L of water!\n");
  lastMessage = '🌊';
  boat.waterInsideInL += 200;
}, 5000); // At 5 seconds
