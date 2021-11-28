function pow(x, n) {
    // write code here
    if(n === 0) return 1
    if(n < 0){
        return 1/pow(x, -n)
    }
    if(n % 2){
        return x * pow(x, n-1)
    }
    let xs = x.split(".")
    var xl = xs[1] ? xs[1] : 0
    let res = pow(x * x, n/2)
    console.log(res)
    let ps = res.split(".").toString()
    var pl = ps[1] ? ps[1] : 0
    var gap = parseInt(xl) - parseInt(pl)
    for(var i = 0; i < gap; i++){
        res += "0"
    }
    return res
}

console.log(pow("2.10000",3))