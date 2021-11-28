// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

rl.on('line', function(line){ // javascript每行数据的回调接口
    var input_arrays = line.split(',');
    var a = parseInt(input_arrays[0]);
    var b = parseInt(input_arrays[1]);
    var res = "";
    for(a; a <= b; a++){
        console.log(isTheNumber(a))
        if(isTheNumber(a)){
            res += a;
            res += ",";
        }
    }
    console.log(res.substring(0, res.length - 1))
});

function getNumberCount(n){
    var count = 1;
    while(n / 10 >= 1) {
        n = n / 10;
        count += 1;
    }
    return count;
}

function getTheOne(number, m) {
    return Math.pow((number % 10), m) / Math.pow(10, (m-1))
}
    
function isTheNumber(number) {
    var count = getNumberCount(number);
    var small = 1;
    var big = count;
    while(small <= big) {
        console.log(getTheOne(number, small))
        if(getTheOne(number, small) != getTheOne(number, big)) return false;
        small++;
        big++;
    }
    return true;
}