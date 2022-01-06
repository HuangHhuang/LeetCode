(function(str) {
    let arr = [];
    let res = "";
    str.split(" ").map( item => {
        if(item != "") arr.push(item)
    })
    for(let i = arr.length - 1; i >= 0 ; i--) {
        res = arr[i] + res;
        if(i !== 0) res = " " + res;
    }
    console.log(res)
})("This bag is 123456        RMB for 2 and that                   one is only 56 RMB")