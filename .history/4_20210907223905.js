// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = [];
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
   if (n < 0) { // 测试用例第一行读取n
       n = parseInt(line.trim())
   } else {
       // 矩阵数据读取
       var tokens = line.split('');
    //    console.log(tokens)
       var temp = "";
       for (var i = tokens.length - 1; i >= 0; --i) {
           if(parseInt(tokens[i]) > 3) {
               tokens[i] = "3";
           }
        //    if(parseInt(tokens[i]) <= 3 && parseInt(tokens[i]) > 0){
        //         tokens[i] = 3;
        //     }
            if(parseInt(tokens[i]) == 0) {
                tokens.splice(i, 1);
            }
            temp = tokens[i] + temp;
            console.log("temp " + temp)
       }
       // 记录当前读取的行数
       cur_line += 1;
       ans.push(temp);
   }
    
   // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
   if (n === cur_line) {
       // 输出结果
       for (i = 0; i < ans.length; i++) {
            console.log(ans[i]);
        }
       // 重新初始化相关变量
       n = -1;
       ans = 0;
       cur_line = 0;
   }
});