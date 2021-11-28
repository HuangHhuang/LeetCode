var arr = [1, 2, 3]
var map = arr.map(item => {
    if(item === 2){
        break
    }
    return item * 2
})

console.log(map);