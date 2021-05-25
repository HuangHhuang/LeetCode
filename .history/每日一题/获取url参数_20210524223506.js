function getUrlParams(sUrl, sKey) {
    var params = sUrl.split("#")
    return params
}

console.log(getUrlParams('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key'))