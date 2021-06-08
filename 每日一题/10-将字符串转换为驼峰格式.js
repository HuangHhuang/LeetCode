function cssStyle2DomStyle(sName) {
    var arr = sName.split("")
    if(arr.indexOf('-') == 0){
        arr.splice(0, 1)
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '-'){
            arr.splice(i, 1)
            arr[i] = arr[i].toUpperCase()
        }
    }
    return arr.join('')
}

cssStyle2DomStyle('-webkit-border-image')