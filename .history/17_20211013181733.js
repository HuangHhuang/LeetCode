function remove(arr, item) {
    var res = arr.map((i) => {
        if(i == item) return ;
        return i
    })
    return res
}

console.log(remove([1, 2, 2, 3, 4, 2, 2], 2))