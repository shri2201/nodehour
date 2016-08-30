/* jshint node: true */
'use strict';
var sendPizzaFactory = function() {
    return new Promise(function(success, failure) {
        console.log("Baking the pizza");
        setTimeout(function() {
            var baked = !!Math.floor(Math.random() * 2);
            if (baked == true) {
                console.log("Baked");
                success("Pizza is ready");
            } else {
                console.log("Burnt");
                failure("Pizza is smoke and ash");
            }
        }, 5000);

    });
};

var getPizzaNow = new sendPizzaFactory();

getPizzaNow.then(function(result) {
    console.log(result);
    console.log("Eating Now");
}, function(result) {
    console.log(result);
    console.log("Sleep Hungry")
});

console.log("Main flow ends here");
