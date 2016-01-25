var connect = require('connect');
var app = connect();

app.use('/admin', admin);
app.use(hello);
app.listen(3000);

function hello(req, res) {
  res.end('hello, world from Anurag.........');
}

function admin(req, res) {
  res.end("Admin interface...");
}
