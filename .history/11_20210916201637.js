function minM( n ,  k ) {
    // write code here
    function fmk(m, k){
        for(var i = 1; i <= m; i++){
            var arr = []
            var num = i
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
            var tmp = ""
            for(j = arr.length - 1; j >= 0; j--){
                tmp += arr[j]
            }
            var reg = /1/g
            var sum = tmp.match(reg)
            console.log(sum.length)
        }
    }
    console.log(fmk(5, 3))
}

console.log(minM(5, 3))