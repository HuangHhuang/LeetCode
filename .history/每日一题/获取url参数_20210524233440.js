function getUrlParams(sUrl, sKey) {
    var params = sUrl.split("#")[0].split("?")[1]
    if(sKey){
        var keys = params.split("&")
        var arr = new Array
        for(var i = 0; i < keys.length; i++){
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
        var objArr = new Object
        for(var i = 0; i < keys.length; i++){
            var strs = item.split("=")
            if(!(strs[0] in objArr)){
                objArr[strs[0]] = []
            }
            objArr[strs[0]].push(strs[1])
        })
        return objArr
    }
}

console.log(getUrlParams('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key'))