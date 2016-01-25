var fs = require("fs");
var streamin = fs.createReadStream('/dev/stdin');
streamin.pipe(process.stdout); 
