function pow(x, n) {
    // write code here
    if(n === 0) return 1
    if(n < 0){
        return 1/pow(x, -n)
    }
    if(n % 2){
        return x * pow(x, n-1)
    }
    let res = pow(x * x, n/2)
    console.log(res.indexof("."))
    for(var i = 0; i < gap; i++){
        res += "0"
    }
    return res
}

console.log(pow("2.10000",3))