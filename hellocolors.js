//Install colors  npm install colors

var colors = require('colors');

var helloworld = 'hello, World';

console.log(helloworld);
console.log(helloworld.green);
console.log(helloworld.red);

// set theme 
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

// outputs rainbow text 
console.log(colors.silly("this is a warning"));