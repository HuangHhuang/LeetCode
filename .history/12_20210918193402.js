// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});


rl.on('line', function(line){ // javascript每行数据的回调接口
    var lines = line.split(" ");
    var str = lines[0]
    var m = lines[1]
    console.log(nom(str))
})

function nom(str){
    var z = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var res = 0
    var arr = str.split("")
    for(var i = 1; i < arr.length; i++){
        var start = z.indexOf(arr[i - 1]) 
        var end = z.indexOf(arr[i])
        var gap = Math.abs(end - start)
        if(gap > 13){
            gap = 26 - gap + 1
        }
        res += gap + 1
    }
    return res
}