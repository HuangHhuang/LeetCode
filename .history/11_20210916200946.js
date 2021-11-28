function minM( n ,  k ) {
    // write code here
    function fmk(m, k){
        for(var i = 1; i <= m; i++){
            var arr = []
            var num = i
            console.log(1)
            for(var j = 0; 1; j++){
                if(num / k >= 1){
                    arr[j] = num % k
                    num = parseInt(num / k)
                }else{
                    arr[j] = num % k
                    break
                }
                console.log(j)
            }
            var tmp = " "
            for(j = arr.length - 1; j > 0; j--){
                tmp += arr[j]
            }
            console.log(tmp)
        }
    }
    console.log(fmk(5, 3))
}

// console.log(minM(5, 3))