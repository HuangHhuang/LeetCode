function includes( s1 ,  s2 ) {
    // write code here
    var arr1 = s1.split("")
    var arr2 = s2.split("")
    for( var i = 0, j = 0; i < arr2.length; i++){
        for(; j < arr1.length; j++){
            if(arr1[j] == arr2[i]){ 
                if(i == arr2.length - 1) return true
                break
            }
        }
    }
    var arr3 = s2.split("").reverse()
    console.log(arr3)
    for( var i = 0, j = 0; i < arr3.length; i++){
        for( ; j < arr1.length; j++){
            if(arr1[j] == arr3[i]){ 
                if(i == arr3.length - 1) return true
                break
            }
        }
    }
    return false
}

console.log(includes("arash","arash"))