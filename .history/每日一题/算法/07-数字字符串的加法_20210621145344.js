function strAdd(s1, s2) {
    var a1 = s1.split('')
    var a2 = s2.split('')
    var res = []
    var carry = 0
    for(var i = a1.length-1, j = a2.length-1; i >= 0 || j >= 0; i--, j--) {
        var n1 = parseInt(a1[i]? a1[i] : 0)
        var n2 = parseInt(a2[j]? a2[j] : 0)
        var sum = n1 + n2 + carry
        console.log(sum)
        res[i] = sum % 10
        carry = Math.floor(sum / 10)
        // console.log(res[i])
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