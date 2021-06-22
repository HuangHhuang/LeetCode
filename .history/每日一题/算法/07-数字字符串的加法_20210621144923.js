function strAdd(s1, s2) {
    var a1 = s1.split('')
    var a2 = s2.split('')
    var res = []
    var carry = 0
    for(var i = a1.length, j = a2.length; i > 0 || i > 0; i--) {
        var n1 = a1[i]? a1[i] : 0
        var n2 = a2[j]? a2[j] : 0
        var sum = n1 + n2 + carry
        res[i] = sum % 10
        carry = Math.floor(sum / 10)
    }
    if(carry > 0) {
        res.push(carry)
    }
    var o = ''
    for(var i = res.length; i > 0; i--) {
        o = res[i] + o
    }
    return parseInt(o)
}

console.log(strAdd('111', '222'))