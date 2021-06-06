function isAvailableEmail(sEmail) {
    var reg = /[.]/
    
    return reg.test(sEmail)
}

console.log(isAvailableEmail('a'))