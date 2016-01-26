setInterval(function() {
  console.log('in Amsterdam.');
  while (true) {
    // Event loop stalls here
  }
}, 5000);

setInterval(function() {
  console.log('in London.');
}, 1000);

console.log('I am');
