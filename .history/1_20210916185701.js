var arr = [1, 2, 3]
var map = arr.map(item => {
    return item * 2
})

var reg = /^[1-9][0-9]*$ || 0/

// console.log(reg.test(1));

console.log([] == [])
console.log(undefined == 0)
console.log(undefined == false)
console.log(false == "")
console.log([1, 2, 3] == [1, 2, 3])
console.log(NaN === NaN)

// console.log(typeof arr);