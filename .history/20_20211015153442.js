function flatArray( arr ) {
    // write code here
    let res = []
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr)){
            Array.isArray(arr)
            let a = flatArray(arr[i])
            for(let j = 0; j < a.length; j++){
                res.push(a[j])
            }
        }else{
            // console.log(arr[i])
            res.push(arr[i])
        }
    }
    return res
}

console.log(flatArray([ [0, 1], [2, 3], [4, 5]]))