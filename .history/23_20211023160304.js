// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;
var ans = [];
var ox;
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
   if (n == -1) { // 测试用例第一行读取n
       ox = line.split("")
       n--;
   } else if (n == -2) {
        n = line.trim();
   } else {
       var tokens = line.split('');
       var res = "YES";
       for (var i = 0; i < tokens.length; ++i) {
           if(ox[i] == "X" && tokens[i] == 1) {
               res = "NO";
           }
       }
       ans.push(res);
       // 记录当前读取的行数
       cur_line += 1;
   }
    
   // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
   if (n == cur_line) {
       // 输出结果
       for (i = 0; i < ans.length; i++) {
           console.log(ans[i]);
       }
       // 重新初始化相关变量
       n = -1;
       ans = [];
       cur_line = 0;
   }
});