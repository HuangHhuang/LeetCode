// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});


rl.on('line', function(line){ // javascript每行数据的回调接口
    var lines = line.split("");
    var res = 0
    for(var i = 0; i < lines.length; i++){
        if(parseInt(line) % parseInt(lines[i])) res++
    }
    console.log(res)
})