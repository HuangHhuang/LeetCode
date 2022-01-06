(function(str) {
    if(typeof str !== 'string') return "";
    let arr = [];
    let res = "";
    str.split(" ").map( item => {
        if(item != "") arr.push(item)
    })
    for(let i = arr.length - 1; i >= 0 ; i--) {
        if(arr[i] == "RMB") {
            arr[i-1] = chang(arr[i - 1]);
        }
        res = arr[i] + res;
        if(i !== 0) res = " " + res;
    }
    console.log(res)
    return res;
})("This bag is 123456        RMB for 2 and that                   one is only 56 RMB")

function chang(str) {
    let arr = str.split("");
    let res = "";
    let len = arr.length;
    if(len == 1) {
        return `0.0${arr[0]}`;
    }
    if(len == 2) {
        return `0.${arr[0]}${arr[1]}`;
    }
    var flag = 0;
    for(let i = len - 3; i >= 0; i--) {
        if(flag == 3) {
            res = "," + res;
            flag = 0;
        }
        res = arr[i] + res;
        flag++;
    }
    res += `.${arr[len - 2]}${arr[len - 1]}`
    return res
}