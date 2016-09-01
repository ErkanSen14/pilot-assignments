var console = require('./lib/consolelog.js');

module.exports = function chessboard(size) {
    var tempOutput1 = '';
    var tempOutput2 = '';
    var output = '';
    for (var j = 0; j < size / 2; j++) {
        tempOutput1 += '# ';
        tempOutput2 += ' #';
    }
    for (var i = 0; i < size; i++) {
        if (i % 2 === 0) {
            output += tempOutput1;
        } else {
            output += tempOutput2;
        }
        if (i !== (size - 1)) output += '\n';
    }
    console.log(output)
}
