function get(obj, keyStr) {
    var arr = keyStr.split(".")
    var temp = obj
    for(var i = 0; i < arr.length; i++) {
        var b = arr[i].split("[")
        if(b.length != 1) {
            arr[i] = arr[i].split("[")
            var num = b[1].substring(0, b[1].length - 1)
            temp = temp[b[0]][num]
        }
        for(var item in temp) {
            if(item == arr[i]) {
                if(i == arr.length - 1) {
                    return temp[item]
                }
                temp = temp[item]
            }
        }
    }
    return null
}

const object = {
    key: { 
        to: { 
            ok: 'okfe'
        }
    }, 
    target: [ 
        1,
        2,
        { ok: 'okfe'}
    ]
}

console.log(get(object, 'target[2].ok'))