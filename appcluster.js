var express = require("express");
var app = express();

app.get('/', function(req, res) {
  var i = 50000000;
  while (i--);
  console.log('Current gid: ' + process.pid);
  res.end("Hello world ! " + process.pid);

});

app.listen(3000, function() {
  console.log('Current gid: ' + process.pid);
  console.log("Running at PORT 3000");

});
