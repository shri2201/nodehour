var simplesmtp = require("simplesmtp"),
fs = require("fs");

var smtp = simplesmtp.createServer();
smtp.listen(25);
