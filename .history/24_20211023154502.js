var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});


rl.on('line', function(n){
    var list = []
    var l = 1
    while (n > l * l + 1) {
        var num = l * l + 1
        n = n - num
        list.add(num)
        l++
    }
    print(list.length + " " + n)
})
