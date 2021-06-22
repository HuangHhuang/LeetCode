function strAdd(s1, s2) {
    var a1 = s1.split('')
    var a2 = s2.split('')
    var res = []
    var carry = 0
    for(var i; i < a1.length || i < a2.length; i++) {
        var n1 = a1[i]? a1[i] : 0
        var n2 = a2[i]? a2[i] : 0
        var sum = n1 + n2 + carry
        res[i] = sum % 10
        carry = Math.floor(sum / 10)
    }
}

strAdd('111', '222')