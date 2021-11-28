function clone(obj) {
    var res
    switch(Object.prototype.toString.call(obj)){
        case '[object Number]':
            res = (typeof obj === "object" ? new Number(obj) : obj)
            break
        case '[object String]':
            res = (typeof obj === "object" ? new String(obj) : obj)
            break
        case '[object Boolean]':
            res = (typeof obj === "Boolean" ? new Boolean(obj) : obj)
            break
        case '[object Array]':
            var temp = new Array();
            for(var i = 0, a; a = obj[i]; i++){
                temp[i] = clone(a)
            }
            res = temp 
            delete temp
            break
        case '[object Object]':
            var temp = {}
            var keys = Object.keys(obj)
            for(var i = 0, a; a = keys[i]; i++){
                temp[a] = clone(obj[a])
            }
            res = temp
            delete temp
            break
        default:
            res = obj
            break
    }
    return res
}

console.log(clone(null))