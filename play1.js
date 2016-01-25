/*
Play with the closures
*/

var f = function foo() {
  var inx = 0;
  console.log("foo()");
	//debugger;
  return b = function bar() {
    return inx++;
  }
}

var x = new f();
console.log(typeof x);
console.log(x);
console.log(x());
console.log(x());
console.log(x());
