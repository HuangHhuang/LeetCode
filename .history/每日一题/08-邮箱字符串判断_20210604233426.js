function isAvailableEmail(sEmail) {
    var reg = /[a]/
    
    return reg.test(sEmail)
}

console.log(isAvailableEmail('a'))