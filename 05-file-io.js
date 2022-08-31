const fs = require('fs');

fs.readFile('./counter', { encoding: 'utf-8' }, (error, contents) => {
  if (error) { return console.error('Error!', error) }
  fs.writeFile('./counter', String(Number(contents) + 1), () => {
    fs.readFile('./counter', { encoding: 'utf-8' }, (error, contents) => {
      if (error) { return console.error('Error!', error) }
        console.log('Current count:', contents);
    });
  });
});
