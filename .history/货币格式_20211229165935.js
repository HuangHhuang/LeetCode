(function(str) {
    let arr = [];
    str.split(" ").map( item => {
        if(item != "") arr.push(item)
    })
    console.log(arr)
})("This bag is 123456        RMB for 2 and that                   one is only 56 RMB")