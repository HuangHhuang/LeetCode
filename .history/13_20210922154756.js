function topK(str, k) {
    // write code here
    const map = new Map()
    
    for(let item of str) {
        map.set(item, (map.get(item) || 0) + 1)
    }
    const res = []
    for(const i of map.keys()) {
        res.push(i)
    }
    res.sort((a, b) => {
        return res.get(a) === res.get(b) ? a.localeCompare(b) : map.get(b) - res.get(a);
    })
    var result = ""
    for(let i = 0; i < k; i++) {
        result += res[i]
    }
    return result
}

console.log(topK("sshopeee", 2))