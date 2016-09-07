
var EE = require("events").EventEmitter;

var ee1 = new EE();

ee1.on('radiation', function(i) {
    console.log("Radiation " + i);
});

ee1.on('radiation', function(i) {
    console.log("Radiation " + (i+1));
});

ee1.on('light', function() {
    console.log("Light..");
});

setInterval(function(){ ee1.emit('', 1,)}, 5000);
setInterval(function(){ ee1.emit('light')}, 1000);
