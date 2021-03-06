var fs = require('fs');

var readableStream = fs.createReadStream("u2.txt");

readableStream.setEncoding('utf8');

readableStream.pipe(process.stdout);

readableStream.on('data', function(chunk) {
  console.log(chunk);
}).on('end', function() {
  console.log('** Nothing further to read');
});

// You can also write the on.end in a separate funtion
// readableStream.on('end', function() {
// 	console.log('Nothing further to read');
// })
