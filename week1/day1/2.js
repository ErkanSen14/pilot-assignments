var console = require('./lib/consolelog.js');

module.exports = function fizzBuzz() {
  for (var num = 1; num < 101; num++) {
    if (num % 3 === 0) {
    	if (num % 5 === 0) {
    		console.log("FizzBuzz")
    	} else {
    	    console.log("Fizz");
    	}
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
}
