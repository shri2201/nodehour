// Doing time measurement and tracing in a Node app

console.time('myapp');

var d = new Date();
var today = d.getDate();

console.log(">> Beginning trace");
console.trace();
console.log(">> End of trace. No worries and continue.");

// Getting date and time in Node is easy
console.log(today);
console.log(d.getMonth());
console.log(d.getFullYear());

console.timeEnd('myapp');
