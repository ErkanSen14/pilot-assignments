var console = require('./lib/consolelog.js');

module.exports = function chessboard() {
  var size = 8;
  var x = '# ';
  var y = ' #';
  var tempOutput1 = '';
  var tempOutput2 = '';
  var output = '';
  for (var j = 0; j < size / 2; j++) {
    tempOutput1 += x;
    tempOutput2 += y;
  }
  for (var i = 0; i < size; i++) {
    if (i % 2 === 0) {
      output += tempOutput1 + '\n';
    }
    else if (i === (size - 1)) {
      output += tempOutput2;
    }
    else {
      output += tempOutput2 + '\n';
    }
  }
  console.log(output)
}
