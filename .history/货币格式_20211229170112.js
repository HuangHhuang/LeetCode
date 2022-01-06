(function(str) {
    let arr = [];
    let res = "";
    str.split(" ").map( item => {
        if(item != "") arr.push(item)
    })
    for(let i = 0; i < arr.length; i++) {
        res += arr[i];
        if(i !== arr.length - 1) res += " "
    }
    console.log(res)
})("This bag is 123456        RMB for 2 and that                   one is only 56 RMB")