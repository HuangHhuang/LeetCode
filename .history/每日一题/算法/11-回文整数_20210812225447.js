var isPalindrome = function(x) {
    if( x >= 0 && x < 10) { console.log(1) 
        return true}
    if(x < 0  || x % 10 == 0) return false
    
    var rn = x % 10
    var ln = x / 10
    while(rn < ln){
        console.log(1)
        rn = ln % 10 + rn * 10
        ln = x / 10
    }
    console.log(rn, ln)
    return (rn == ln || ln/10 == rn)
};

console.log(isPalindrome(11))