var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;
var line;
var res = [];
var cur_line = 0;
rl.on('line', function(line){
   if (n < 0) { 
       n = parseInt(line.trim());
   } else {
        var str = line.trim();
        var year = str.substring(0, 3);
        var flag = true;
        var result = ""; 
        
        try{
            var year = parseInt(str.substring(0, 4));
            var month = parseInt(str.substring(4, 6));
            var day = parseInt(str.substring(6, 8));
            var hour = parseInt(str.substring(8, 10));
            var min = parseInt(str.substring(10, 12));
            var sec = parseInt(str.substring(12, 14));
        }catch(e){
            res.push("Wrong1");
            cur_line += 1;
            return;
        }

        console.log(year)

        if(!(year <= 2021 && year >= 2000)){
            console.log("年出错了")
            flag = false;
        }
        result += year;
        result += ".";

        

        if(!(month <= 12 && month >= 1)) {
            console.log("月出错了")
            flag = false;
        };
        if(month <= 9 && month >= 1) {
            result += "0";
            result += month;
            result += ".";
        }else if(month <= 10 && month >= 12) {
            result += month;
            result += ".";
        }
        

        if(!(day <= 20 && day >= 1)) {
            console.log("天出错了")
            flag = false;
        };
        
        if(day <= 9 && day >= 1) {

            result += "0";
            result += day;
            result += " ";
        }else if(day <= 20 && day >= 10) {

            result += day;
            result += " ";
        }
        

        if(!(hour <= 23 && hour >= 0)) {
            console.log("小时出错了")
            flag = false;
        };
        if(hour <= 9 && hour >= 0) {
            result += "0";
            result += hour;
            result += ":";
        }else if(hour <= 23 && hour >= 10) {
            result += hour;
            result += ":";
        }

        if(!(min <= 23 && min >= 0)) {
            console.log("分钟出错了")
            flag = false;
        };
        if(min <= 9 && min >= 0) {
            result += "0";
            result += min;
            result += ":";
        }else if(min <= 59 && min >= 10) {
            result += min;
            result += ":";
        }

        if(!(sec <= 59 && sec >= 0)) {
            console.log("秒出错了")
            flag = false;
        };
        if(sec <= 9 && sec >= 0) {
            result += "0";
            result += sec;
        }else if(sec <= 59 && sec >= 10) {
            result += sec;
        }

        if(flag){
            res.push(result);
        }else{
            res.push("Wrong2");
        }

        cur_line += 1;
   }

   if (n == cur_line) {
       // 输出结果
       for (var i = 0; i < res.length; i++) {
           console.log(res[i]);
       }
       // 重新初始化相关变量
       n = -1;
       res = [];
       cur_line = 0;
   }
})