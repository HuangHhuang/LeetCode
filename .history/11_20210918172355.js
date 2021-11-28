function minM( n ,  k ) {
    // write code here
    for(var i = 1; 1; i++){
        var m = fmk(i, k) ? fmk(i, k) : 0
        console.log(i)
        if(m >= n){
            break
        }
    }
    
    function fmk(m, k){
        var tmp = ""
        for(var i = 1; i <= m; i++){
            var arr = []
            var num = i
            // console.log(i)
            for(var j = 0; 1; j++){
                if(num / k >= 1){
                    arr[j] = num % k
                    num = parseInt(num / k)
                }else{
                    arr[j] = num % k
                    break
                }
                // console.log(j)
            }
            
            for(j = arr.length - 1; j >= 0; j--){
                tmp += arr[j]
            }
            
        }
        // console.log(tmp)
        var reg = /1/g
        var sum = tmp.match(reg)
        console.log("sum.length "+ sum.length)
        return sum.length
    }
    // console.log(fmk(0, 5))

    return i
}

console.log(minM(10, 10))