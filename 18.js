// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var obj1;
rl.on('line', function(line){ // javascript每行数据的回调接口
   if (n < 0) { // 测试用例第一行读取n
       obj1 = JSON.parse(line.trim());
       n++;
   } else {
       // 矩阵数据读取
       var obj2 = JSON.parse(line.trim());
       var res = Object.assign(obj1, obj2);
       console.log(JSON.parse(res));
       n = -1
   }
});

function getTimes( array ,  k ) {
    // write code here
    var len = array.length;
    if(k > len || k < 1){
        return
    }
    var _arr = arr.slice()
    var rank = 1
    var num = 0
    var count = 0
    _arr.sort(function(a, b) {
        return b - a
    })
    for(var i = 0; i < len; i++) {
        var j = i + 1
        if(rank > k){
            break
        } else if (rank == k) {
            num = _arr[i]
            count++
        }
        if((j < len) && (_arr[i] != _arr[j])) {
            rank++
        }
    }
    return count
}