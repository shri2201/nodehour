var fs = require('fs');

// A prototype class to replace
// Set both readable and writable in constructor.
var WeStream = function() {
  this.readable = true;
  this.writable = true;
};

// Inherit from base stream class.
require('util').inherits(WeStream, require('stream'));

// Add a function in the prototype WeStream
WeStream.prototype.write = function(data) {
  data = data ? data.toString() : ""; // convert bytes to string
  this.emit('data', data.replace("I", "We"));
};

// Add a function in the prototype WeStream
WeStream.prototype.end = function() {
  this.emit('end');
};

var readableStream = fs.createReadStream("u2.txt");
readableStream.setEncoding('utf8');
readableStream.pipe(new WeStream()).pipe(process.stdout);
