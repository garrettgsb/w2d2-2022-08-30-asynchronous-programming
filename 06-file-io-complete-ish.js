const fs = require('fs');

// Run this five times... Notice any difference?

fs.readFile('./female-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => doTheThing('fNames', JSON.parse(data)));
fs.readFile('./male-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => doTheThing('mNames', JSON.parse(data)));
fs.readFile('./1000-most-common-surnames.txt', { encoding: 'utf8' }, (err, data) => doTheThing('surnames', data.split(',\n')));

const names = {
  mNames: undefined,
  fNames: undefined,
  surnames: undefined,
};
function doTheThing(key, arr) {
  names[key] = arr;
  if (Object.values(names).includes(undefined)) return;
  generateName();
  generateName();
  generateName();
}

function generateName() {
  const firstNameListKey = `${Math.random() > 0.5 ? 'm' : 'f'}Names`;
  const firstNameIdx = Math.floor(Math.random() * names[firstNameListKey].length);
  const surnameIdx = Math.floor(Math.random() * names.surnames.length);
  console.log(`${names[firstNameListKey][firstNameIdx]} ${names.surnames[surnameIdx]}`);
}
