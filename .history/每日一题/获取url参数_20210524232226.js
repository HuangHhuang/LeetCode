function getUrlParams(sUrl, sKey) {
    var params = sUrl.split("#")[0].split("?")[1]
    if(sKey){
        var keys = params.split("&")
        var arr = new Array
        keys.forEach(item => {
            var strs = item.split("=")
            // console.log(items)
            if(sKey == strs[0]){
                arr.push(strs[1])
            }
        })
        if(arr.length == 1){
            return arr[0]
        }else if(arr.length == 0){
            return ""
        }else{
            return arr
        }
    }
    if(!sKey){
        var keys = params.split("&")
        var arr = new Array
        keys.forEach(item => {
            var strs = item.split("=")
            arr.push(strs[1])
        })
        if(arr.length == 1){
            return arr[0]
        }else if(arr.length == 0){
            return new Object
        }else{
            return arr
        }
    }
    return params
}

console.log(getUrlParams('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key'))