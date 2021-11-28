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
    map.forEach(function(value ,key) {
        if(map.get(max[0]) < value) {
            max = splice(0, max.length)
            max.push(key)
        }
        if(map.get(max[0]) == value) {
            max.push(key)
        }
        if(max.length == 0){
            max.push(key)
        }
    })
    console.log(max)
}

console.log(countStrings("good good study, day day up"))