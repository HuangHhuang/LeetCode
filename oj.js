var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;
var ans = 0;
var cur_line = 0;
rl.on('line', function(line){
    if (n < 0) {
        n = parseInt(line.trim())
    } else {
        cur_line += 1;
    }
    
    if (n === cur_line) {
        console.log(ans);
        n = -1;
        ans = 0;
        cur_line = 0;
    }
});