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
    console.log(usem(str, m))
})

function nom(str){
    var z = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var res = 1
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

function usem(str, m){
    var z = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var res = 1
    var arr = str.split("")
    var temp = []
    for(var i = 1; i < arr.length; i++){
        var start = z.indexOf(arr[i - 1]) 
        var end = z.indexOf(arr[i])
        var gap = Math.abs(end - start)
        if(gap > 13){
            gap = 26 - gap + 1
        }
        temp.push(gap)
    }
    var max = 0
    for(var i = 1; i < temp.length; i++){
        if(temp[i] > max) max = i
    }
    for(var i = 1; i < temp.length; i++){
        if(i == max){
            for(var j = 0; j < m; j++,i++){
                if(temp[i] == 0){
                    res += 1
                }else{
                    res += 2
                }
            }
        }else{
            res += temp[i] + 1
        }
    }
    return res
}