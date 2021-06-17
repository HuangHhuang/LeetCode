function rgb2hex(sRGB) {
    var reg = /^(rgb|RGB)\((\d+),\s*(\d+),\s*(\d+)\)$/
    if(!reg.test(sRGB)) return sRGB
    var temp = sRGB.replace(reg, '$2,$3,$4')
    return '#'+temp.split(',').map(item=>{
        if(+item>16) return (+item).toString(16)
        return '0'+(+item).toString(16)
    }).join('')
}