let res;
let data = {
    localDate: "2020-09-01",
    ip: "128.0.0.9",
    method: "POST",
    qunarglobal: "asdu2333wuroo",
    "nginx-ip": "100.90.98.109"
};

function format(token, data) {
    /* Write Code Here */
    let str = token;
    // console.log(str.match(/:(\w+)/g))
    str.match(/:(\w+)/g).forEach((n, i)=>{
        console.log(n)
        str = str.replace(`{{$n}}`, data[n.substring(1, n.length)])
    })
    return str;
}

var _token = ':ip - - [:localDate] ":method ":qunarglobal" [:nginx-ip] ":qunarglobal"';
res = format(_token, data);
console.log(res);