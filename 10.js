function maxLexicographical( num ) {
    // write code here
    var temp = num.split("")
    var res = ""
    for(let i = 0; i < temp.length; i++){
        if(temp[i] == 0){
            temp[i] = 1
        }
    }
    for(let i = 0; i < temp.length; i++){
        res += temp[i]
    }
    return res
}

console.log(maxLexicographical("1001"))