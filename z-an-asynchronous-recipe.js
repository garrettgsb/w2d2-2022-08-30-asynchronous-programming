const breakfast = {
  coffee: null,
  eggs: null,
  toast: null,
  avocado: null,
  panIsHot: false,
};


// Recipe
makeCoffee();
heatPan(cookEggs);
makeToast();
mashAvocado();
putAvocadoOnToast();
putEggsOnToast();
console.log('Breakfast: ', breakfast);





// Function implementations
function makeCoffee() {
  workOn('coffee', 7, () => { breakfast.coffee = 'done'; }); // It takes me 7 seconds to make coffee in this simulation
}

function heatPan(callback) {
  workOn('heating pan', 5, () => {
    breakfast.panIsHot = true;
    callback();
  });
}

function cookEggs() {
  if (!breakfast.panIsHot) throw new Error("Can't make eggs on a cold pan!");
  workOn('eggs', 8, () => { breakfast.eggs = 'cooked'; });
}

function makeToast() {
  workOn('toast', 8, () => { breakfast.toast = 'toasted'; });
}

function mashAvocado() {
  workOn('mashing avocado', 1, () => { breakfast.avocado = 'mashed'; });
}

function putAvocadoOnToast() {
  if (breakfast.toast !== 'toasted') { throw new Error("Can't put avocado on untoasted toast!") }
  if (breakfast.avocado !== 'mashed') { throw new Error("Can't put avocado on untoasted toast!") }
  workOn('putting avocado on toast', 1, () => { breakfast.avocado = 'on toast'; });
}

function putEggsOnToast() {
  if (breakfast.toast !== 'toasted') { throw new Error("Can't put avocado on untoasted toast!") }
  if (breakfast.eggs !== 'cooked') { throw new Error("Can't put eggs on toast before avocado!") }
  if (breakfast.avocado !== 'on toast') { throw new Error("Can't put egg on toast before avocado!") }
  workOn('putting eggs on toast', 1, () => { breakfast.eggs = 'on toast'; });
}

function workOn(taskName, amountOfTimeInSeconds, callback) {
  console.log(taskName, '- starting');
  const amountOfTimeInMilliseconds = amountOfTimeInSeconds * 1000
  const startTime = Date.now();
  setTimeout(() => {
    callback();
    console.log(taskName, '- completed after', (Date.now() - startTime) / 1000, 'seconds');
  }, amountOfTimeInMilliseconds);

}
