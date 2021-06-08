function cssStyle2DomStyle(sName) {
    var strs = sName.split("-")
    for(let i = 0; i < strs.length+1; i++) {
        console.log(strs[i])
    }
}

console.log(cssStyle2DomStyle('-webkit-border-image'))