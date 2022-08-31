const fs = require('fs');

fs.readFile('./female-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => { initializeDataset('fNames', JSON.parse(data)) });
fs.readFile('./male-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => { initializeDataset('mNames', JSON.parse(data)) });
fs.readFile('./1000-most-common-surnames.txt', { encoding: 'utf8' }, (err, data) => { initializeDataset('surnames', data.split(',\n')) });


const dataset = {
  fNames: undefined,
  mNames: undefined,
  surnames: undefined,
};

function initializeDataset(key, data) {
  dataset[key] = data;
  if (Object.values(dataset).includes(undefined)) { return }
  console.log(generateName());
}

function generateName() {
  const firstName = dataset.fNames[100];
  const surname = dataset.surnames[100];
  return `${firstName} ${surname}`;
}
