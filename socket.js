var net = require('net');

var i = 0;

var server = net.createServer(function(socket) {
  socket.setEncoding('utf-8');
  socket.on('data', function(data) {
    console.log(data);
  });

  socket.write('Hello Server', function() {
    console.log('Connection No.: ', i++);
  });
});

server.on('connection', function(str) {
  console.log("Connection is Made\n");
});


server.listen(3001);
