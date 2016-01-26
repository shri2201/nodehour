var x = function foo(num) {
  var bar;
  var quux = num;

  console.log("Entered and leaving foo() " + quux);

  return zip = function() {
    // We can access the variables of the parent function
    bar = true;
    console.log("In zip: " + quux++)
  }
}


var newObj = x(100);
newObj();
newObj();

var newObj1 = x(1);
newObj1();
newObj1();
newObj1();
newObj();
