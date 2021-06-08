function cssStyle2DomStyle(sName) {
    var strs = sName.split("-")
    for(let i = 0; i < strs.length; i++) {
        console.log(strs[i])
    }
}

cssStyle2DomStyle('-webkit-border-image')