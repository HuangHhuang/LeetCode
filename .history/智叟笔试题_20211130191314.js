function unique (iterable, selector) {
    var arr = [];
    for(var item in iterable) {
        let key = selector(item);
        let index = arr.indexOf(key);
        if(index === -1) {
            arr.push(key);
        } else {
            iterable.splice(index, 1);
            arr.splice(index, 1);
            arr.push(key);
        }
    }
}

const users = [
    { name: 'aaa', age: 12 },
    { name: 'bbb', age: 13 },
    { name: 'aaa', age: 14 },
]

var arr = unique(users, u => u.name)

console.log(arr)