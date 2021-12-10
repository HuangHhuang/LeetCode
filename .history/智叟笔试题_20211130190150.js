function unique (iterable, selector) {
    var obj = {};
    return iterable.filter(function(item, index, iterable){
        console.log(typeof item + item)
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}

const users = [
    { name: 'aaa', age: 12 },
    { name: 'bbb', age: 13 },
    { name: 'aaa', age: 14 },
]

unique(users, u => u.name)

console.log(users)