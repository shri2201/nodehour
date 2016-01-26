// Let's play with the closures

var f = function foo() {
  var inx = 0;
  console.log("Doing foo()");
	// This will cause debugger to break here
  // debugger;
  return b = function bar() {
    console.log("Doing bar()");
    return inx++;
  };
};

// Function f is executed and its return value is a function
// of type bar
var x = new f();

console.log(typeof x);
console.log(x);

console.log(x());
console.log(x());
console.log(x());
