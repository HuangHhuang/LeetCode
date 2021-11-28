function minM( n ,  k ) {
    // write code here
    for(var i = 1; 1; i++){
        var m = fmk(i, k)
        console.log(m)
        if(m >= n){
            return m
        }
    }
    function fmk(m, k){
        var tmp = ""
        for(var i = 1; i <= m; i++){
            var arr = []
            var num = i
            console.log(num + k)
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
        // console.log(sum.length)
        return sum
    }
    console.log(fmk(2, 3))
}

console.log(minM(5, 3))