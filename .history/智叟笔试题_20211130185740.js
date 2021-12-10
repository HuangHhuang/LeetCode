function unique (iterable, selector) {
    return iterable.filter(function(item, index, iterable) {
        return iterable.indexOf(selector(item), 0) === index;
    });
}

const users = [
    { name: 'aaa', age: 12 },
    { name: 'bbb', age: 13 },
    { name: 'aaa', age: 14 },
]

unique(users, u => u.name)

console.log(users)