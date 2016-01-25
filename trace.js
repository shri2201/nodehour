// Doing time measurement in a node app

console.time('myapp');

var d = new Date();
var today = d.getDate();

console.log(">> Beginning trace");
console.trace();
console.log(">> End of trace. No worries and continue.");

console.log(today);
console.log(d.getMonth());
console.log(d.getFullYear());

console.timeEnd('myapp');
