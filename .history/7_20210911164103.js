// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});


rl.on('line', function(line){ // javascript每行数据的回调接口

    var len = line.length
    var res = 0
    for(var i = 2; i <= len; i++){
        for(var j = 0; j < len - i; j++){
            var temp = parseInt(line.substring(j, j+i));
            if(temp % 22 == 0) res++
        }
    }
    console.log(res)

});