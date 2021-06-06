function isAvailableEmail(sEmail) {
    var reg = /([.]\w+)/
    
    return reg.test(sEmail)
}

console.log(isAvailableEmail('.qq'))