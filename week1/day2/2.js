module.exports = function prime(x) {
  if (x === 0 || x === 1 || x < 0 ) {
    return false;
  }
  for (var j = 2; j < x; j++) {
    if (x % j === 0) {
      return false;
    }
  }
  return true;
}
