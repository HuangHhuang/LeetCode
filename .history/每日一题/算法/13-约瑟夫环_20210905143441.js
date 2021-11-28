function josephus(n, m) {
    var out = 0;
    for (var i = 0; i < n; i++) {
        out = (out + m) % i;
    }
    return out;
}

console.log(josephus(13, 3));