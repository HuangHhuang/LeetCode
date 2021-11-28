// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = [];
var obj1;
rl.on('line', function(line){ // javascript每行数据的回调接口
   if (n < 0) { // 测试用例第一行读取n
       obj1 = JSON.parse(line.trim());
       console.log(obj1)
       n++;
   } else {
       // 矩阵数据读取
       var obj2 = JSON.parse(line.trim());
       console.log(typeof obj2)
       console.log(obj1)
       var res = Object.assign(obj1, obj2);
       console.log(res);
       n = -1
   }
});