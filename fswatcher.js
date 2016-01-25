var fs = require("fs");


fs.watch("watched.txt", function(event, filename){
	console.log(event);
});

console.log("Watching the changes");
