module.exports = function prime(x, counter) {
  if (x === 0 || x === 1 || x < 0 || x === 2) {
    return false;
  }
  if (counter === x) {
    return;
  }
  if (x % counter === 0) {
    return false;
  } else {
    prime(x, counter + 1);
  }
  return true;
}
