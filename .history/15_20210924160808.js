function countStrings(str) {
    let map = new Map();
    let words = str.split(" ");
    for(let i = 0; i < words.length; i++) {
        let key = words[i];
        if(map.has(key)) {
            map.set(key, map.get(key)+1)
        }else{
            map.set(key, 1)
        }
    }
    console.log(map)
    let max = [];
    map.forEach(function(key,value) {
        console.log(key + value)
    })
}

console.log(countStrings("good good study, day day up"))