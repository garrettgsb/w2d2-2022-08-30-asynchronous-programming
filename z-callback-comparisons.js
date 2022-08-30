/*
  It's always "What's the trigger, what's the action?"
  Triggers:
    - 1000 milliseconds have passed
    - An element has been clicked
    - An HTTP request to "GET /about" has arrived
    - A file was read
    - A database query was performed
*/

function doAThing();
setTimeout(doAThing, 1000);
document.addEventListener('click', doAThing);
app.get('/about', doAThing);
fs.readFile('./some-file.txt', { encoding: 'utf8' }, doAThing);
pg.query('SELECT * FROM users', doAThing);
