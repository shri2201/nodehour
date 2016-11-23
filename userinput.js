var prompt = require('prompt');

prompt.start();

prompt.get(['age', 'city'], function(err, result) {
  console.log("Hi, Folks!!!");
  console.log('Your age, city is ' + result.age + ", " + result.city);
});


//Prompt allows advanced pattern matching to validate inputs
var schema = {
  properties: {
    name: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: 'Name must be only letters, spaces, or dashes',
      required: true
    },
    password: {
      hidden: true
    }
  }
};

prompt.get(schema, function(err, result) {
  console.log('Name is: ' + result.name);
  console.log('password is: ' + result.password);
});

console.log("Done");
