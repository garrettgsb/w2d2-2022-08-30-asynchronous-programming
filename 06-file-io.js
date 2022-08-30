const fs = require('fs');

// Run this five times... Notice any difference?
fs.readFile('./female-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => console.log(data.length));
fs.readFile('./male-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => console.log(data.length));
fs.readFile('./1000-most-common-surnames.txt', { encoding: 'utf8' }, (err, data) => console.log(data.length));
