// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var n2 = -1;
var ans = [];
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
   if (n < 0) { // 测试用例第一行读取n
       var ns = line.split(' ');
       n = ns[0];
       n2 = ns[1];
    //    console.log(n + " " +n2)
   } else {
       // 矩阵数据读取
          var tokens = line.split(' ');
        //   console.log(tokens);
          var temp = "";
       for (var i = 0; i < tokens.length; ++i) {
           // 题目逻辑求和，边读取边计算
        //    ans += parseInt(tokens[i]);
        console.log(n2)
        for(var j = 0; j < n2; ++j) {
            if(i != tokens.length - 1 && j != n - 1){
                console.log("wo")
                temp += tokens[i].toString;
                temp += " ";
            }else{
                console.log("o")
                temp += tokens[i];
            }
        }
       }
       // 记录当前读取的行数
       cur_line += 1;
       ans.push(temp);
   }

   console.log(ans);
    
   // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
   if (n === cur_line) {
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