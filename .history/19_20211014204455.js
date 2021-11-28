function includes( s1 ,  s2 ) {
    // write code here
    var arr1 = s1.split("")
    var arr2 = s2.split("")
    for( var i = 0, j = 0; i < arr2.length; i++){
        for(; j < arr1.length; j++){
            if(arr1[j] == arr2[i]){ 
                if(i == arr2.length) return true
                break
            }
        }
    }
    return false
}

console.log(includes("arash","aah"))