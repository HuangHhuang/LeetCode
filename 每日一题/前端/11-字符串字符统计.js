function count(str) {
    var obj = {}
    var arr = str.split('')
    for(var i = 0; i < arr.length; i++) {
        var a = arr[i]
        if(a === ' '){
            continue
        }
        if(!obj[a]){
            obj[a] = 1
        }else{
            obj[a] += 1
        }
    }
    return obj
}

console.log(count('hello world'))


//牛客最优解法
function count2(str) {
    var obj = {};
    str.replace(/\S/g,function(s){
        !obj[s]?obj[s]=1:obj[s]++;
    })
    return obj;
}