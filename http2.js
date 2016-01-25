// A simple httpserver that outputs an html file

var http = require('http');
var fs = require('fs');


var requestListener = function(req, res) {

  res.writeHead(200);

  var filename = './pushclient.html';

  fs.readFile(filename, 'utf-8', function(err, data) {

    if (err) {
      return console.log(err);
    }

    console.log(data);
    console.log('Done reading file : ' + filename);
    res.write(data, 'utf8')
    res.end();
  });

}

var server = http.createServer(requestListener);
console.log("Server is starting up on port 3000");
server.listen(process.env.PORT || 3000);
