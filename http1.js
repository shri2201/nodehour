var http = require('http');

var requestListener = function(req, res) {
  res.writeHead(200);
  res.end('Hello, World!\n');
}

var server = http.createServer(requestListener);

console.log("Server is starting up on port 3000");
server.listen(3000);
