var arr = [1, 2, 3]
var map = arr.map(item => {
    return item * 2
})

var reg = /^[1-9][0-9]*$ || 0/

console.log(reg.test(0));

// console.log(typeof arr);