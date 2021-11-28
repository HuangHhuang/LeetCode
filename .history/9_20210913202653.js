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
        console.log(tokens.length)
        for(var i = 0; i < tokens.length; i++){
            var tokens2 = tokens[i].split('')
            console.log(tokens2)
            var len = tokens2.length
            var str = ""
            for(var i = 1; i < len - 1; i++){
                str += tokens2[i]
            }
            if(tokens2[0] == "+"){
                if(tokens2[len - 1] == "w"){
                    d = (d + parseInt(str) * 7) % 30
                }
                if(tokens2[len - 1] == "d"){
                    d = (d + parseInt(str)) % 30
                }
                
                if(tokens2[len - 1] == "h"){
                    h = h + parseInt(str)
                    if(h >= 60){
                        d += 1
                        h = h % 60
                    }
                    
                }
                if(tokens2[len - 1] == "m"){
                    m = m + parseInt(str)
                    
                    if(m >= 60){
                        h += 1
                        m = m % 60
                    }
                }
                if(tokens2[len - 1] == "s"){
                    s = s + parseInt(str)
                    if(s >= 60){
                        m += 1
                        s = s % 60
                    }
                    
                }
            }else{
                if(tokens2[len - 1] == "w"){
                    d = d - parseInt(str) * 7
                    if(d < 0){
                        d = 30 - Math.abs(d) % 30
                    }
                }
                if(tokens2[len - 1] == "d"){
                    d = d - parseInt(str)
                    if(d < 0){
                        d = 30 - Math.abs(d) % 30
                    }
                }
                
                if(tokens2[len - 1] == "h"){
                    h = h - parseInt(str)
                    if(h < 0){
                        d -= 1
                        h = 60 - Math.abs(h) % 60
                    }
                    
                }
                if(tokens2[len - 1] == "m"){
                    m = m - parseInt(str)
                    if(m < 0){
                        h -= 1
                        m = 60 - Math.abs(m) % 60
                    }
                    
                }
                if(tokens2[len - 1] == "s"){
                    s = s - parseInt(str)
                    if(s < 0){
                        m -= 1
                        s = 60 - Math.abs(s) % 60
                    }
                }
            }
        }
        if(s < 10){ 
            s = "0" + s
        }
        if(m < 10){ 
            m = "0" + m
        }
        if(h < 10){ 
            h = "0" + h
        }
        if(d < 10){ 
            d = "0" + d
        }
        // console.log(m)
        res += y += "-" 
        res += month += "-"
        res += d += " " 
        res += h += ":"
        res += m += ":"
        res += s
        console.log(res)
        n++
    }

    if (n == 1) {
        n = -1;
    }
});
