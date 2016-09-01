module.exports = function prime(x, counter) {
  if (x === 0 || x === 1 || x < 0) {
    return false;
  }
  if (x === 2) {
    return true;
  }
  if (counter === x) {
    return;
  }
  if (x % counter === 0) {
    return false;
  } else {
    var temp = prime(x, counter + 1);
    if (temp === undefined) {
    	return true;
    } else {
    	return temp;
    }
  }
}
