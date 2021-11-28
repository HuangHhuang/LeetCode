function countStrings(str) {
    let map = new Map();
    for(let i = 0; i < str.length; i++) {
        let key = str.charAt(i);
        if(map.keys.hasOwnProperty(key)) {
            map.set(key, map.get(key)+1)
        }else{
            map.set(key, 1)
        }
    }
    return map
}

console.log(countStrings("good good study, day day up"))