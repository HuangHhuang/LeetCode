function getUrlParams(sUrl, sKey) {
    var params = sUrl.split("#")
    return params
}


var a = getUrlParams('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key')
console.log(a)