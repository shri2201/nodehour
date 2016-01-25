/*
Read a file using a call back
*/
var fs = require('fs');
var filename = './my.txt';

function callback(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  console.log('Done reading file : ' + filename);
}

//
// fs.readFile(filename, 'utf-8', function(err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
//   console.log('Done reading file : ' + filename);
// });

fs.readFile(filename, 'utf-8', callback);
console.log('Done Program Async');
