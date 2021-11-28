// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1
var res = ''
var y, month, d, h, m, s
rl.on('line', function(line){ // javascript每行数据的回调接口
    if(n < 0){
        var data = line.split(" ")
        var temp1 = data[0].split("-")
        var temp2 = data[1].split(":")
        console.log("temp2" + temp2)
        y = temp1[0]
        month = temp1[1]
        d = parseInt(temp1[2])
        h = parseInt(temp2[0])
        m = parseInt(temp2[1])
        s = parseInt(temp2[2])
        // console.log(y + m + d + h + m + s)
        n++
    }else{
        var tokens = line.split(' ')
        for(var i = 0; i < tokens.length; i++){
            var tokens2 = tokens[i].split('')
            var len = tokens2.length
            var str = ""
            for(var i = 1; i < len - 1; i++){
                str += tokens2[i]
                console.log(str)
            }
            if(tokens2[0] == "+"){
                if(tokens2[len - 1] == "w"){
                    d = (d + parseInt(str) * 7) % 30
                }
                if(tokens2[len - 1] == "d"){
                    d = (d + parseInt(str)) % 30
                }
                var a
                if(tokens2[len - 1] == "h"){
                    a = h + parseInt(str)
                    if(a >= 60){
                        d += 1
                        h = h % 60
                    }
                    if(h < 10){ 
                        h = "0" + h
                    }
                }
                if(tokens2[len - 1] == "m"){
                    a = m + parseInt(str)
                    if(a >= 60){
                        h += 1
                        m = m % 60
                    }
                    if(h < 10){ 
                        h = "0" + h
                    }
                }
                if(tokens2[len - 1] == "s"){
                    a = s + parseInt(str)
                    if(a >= 60){
                        m += 1
                        s = s % 60
                    }
                    if(s < 10){ 
                        s = "0" + s
                        console.log("s " + s)
                    }
                }
            }else{
                var a
                if(tokens2[len - 1] == "w"){
                    a = d - parseInt(str) * 7
                    if(a < 0){
                        d = 30 - Math.abs(a) % 30
                    }
                }
                if(tokens2[len - 1] == "d"){
                    a = d - parseInt(str)
                    if(a < 0){
                        d = 30 - Math.abs(a) % 30
                    }
                }
                
                if(tokens2[len - 1] == "h"){
                    a = h - parseInt(str)
                    if(a < 0){
                        d -= 1
                        h = 60 - Math.abs(a) % 60
                    }
                    if(h < 10){ 
                        h = "0" + h
                    }
                }
                if(tokens2[len - 1] == "m"){
                    a = m - parseInt(str)
                    if(a < 0){
                        h -= 1
                        m = 60 - Math.abs(a) % 60
                    }
                    if(m < 10){ 
                        m = "0" + m
                    }
                }
                if(tokens2[len - 1] == "s"){
                    a = s - parseInt(str)
                    if(a < 0){
                        m -= 1
                        s = 60 - Math.abs(a) % 60
                    }
                    if(s < 10){ 
                        s = "0" + s
                        console.log("s " + s)
                    }
                }
            }
        }
        res += y += "-" 
        res += month += "-"
        res += d += " " 
        res += h += ":"
        res += m += ":"
        res += s
        console.log("res" + res)
        n++
    }

    if (n == 1) {
        // 输出结果
        // for (i = 0; i < ans.length; i++) {
        //     console.log(ans[i]);
        // }
        // 重新初始化相关变量
        n = -1;

    }
});
