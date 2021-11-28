process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;

    while(nLine < input_array.length){
        var line = input_array[nLine++].trim();
        if(line === ''){
            continue;
        }
        var input_arrays = line.split(',');
        var a = +input_arrays[0];
        var b = +input_arrays[1];
        var res = "";
        for(a; a <= b; a++){
            if(isTheNumber(a)){
                res += a;
                res += ",";
            }
        }
        console.log(res.substring(0, res.length - 1))
    }
    
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
        if(getTheOne(number, small) != getTheOne(number, big)) return false;
        small++;
        big++;
    }
    return true;
}