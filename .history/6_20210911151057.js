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
        var lines = line.split(' ');

        var output = 0;
        var numStack = [];
        var strStack = [];
        for(var i = 0; i < lines.length; i++){
            if(typeof lines[i] == "number"){
                numStack.push(lines[i]);
            }
            if(lines[i] == "+" || lines[i] == "-"){
                strStack.push(lines[i]);
            }
            if(lines[i] == "*"){
                numStack.push(parseInt(numStack.pop) * parseInt(lines[i + 1]));
                i++;
            }
            if(lines[i] == "/"){
                numStack.push(parseInt(numStack.pop) * parseInt(lines[i + 1]));
                i++;
            }
        }
        for(var i = 0; i < strStack.length; i++){
            if(strStack[i] == "+"){
                output = parseInt(numStack.pop) + parseInt(numStack.pop);
            }
        }
        console.log(output)
    }
});