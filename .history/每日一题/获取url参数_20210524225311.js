function getUrlParams(sUrl, sKey) {
    var params = sUrl.split("#")[0].split("?")[1]
    if(sKey){
        var keys = params.split("&")
        keys.forEach(item => {
            var items = item.split("=")[1]
            console.log(items)
            if(sKey == items){
                return items
            }
        })
    }
    if(!sKey){

    }
    return params
}

console.log(getUrlParams('http://www.nowcoder.com'))