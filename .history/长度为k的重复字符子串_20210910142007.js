// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

rl.on('line', function(line){
    var tokens = line.split(',');
    var strArr = tokens[0].substring(0, 4);
    var n = tokens[1];
    console.log(strArr)
});