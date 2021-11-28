function josephus(n, m) {
    var out = 0;
    for (var i = 2; i <= n; i++) {
        out = (out + m) % i;
    }
    return out;
}

var reg = /^[1-9][0-9]*$ || 0/

console.log(reg.test(12));