function orderPizza(callback) {
  console.log("Baking pizza")
    // Done baking
  setTimeout(function(){callback()},5000);
};

function eatFood() {
  orderPizza(function callMeWhenReady() {
  console.log("Your pizza is at the door.");
  });
};

eatFood();
