var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
   if (n < 0) { // 测试用例第一行读取n
       n = parseInt(line.trim())
   } else {
       // 矩阵数据读取
       var ans = "";
       var tokens = line.split(' ');
       for (var i = 0; i < tokens.length; ++i) {
           for(var j = 0; j < n; j++){
               if(i != (tokens.length - 1) && j != (n - 1)){
                   ans += "${tokens[i]} ";
               }else{
                   ans += "${tokens[i]}";
               }
           }
       }
       // 记录当前读取的行数
       cur_line += 1;
       console.log(ans);
   }

});