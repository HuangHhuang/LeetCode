var isPalindrome = function(x) {
    if( x >= 0 && x < 10) return true
    if(x < 0  || x % 10 == 0) return false
    
    var rn = x % 10
    var ln = Math.floor(x / 10)
    console.log(rn, ln)
    while(rn < ln){
        rn = ln % 10 + rn * 10
        ln = Math.floor(ln / 10)
        console.log(rn, ln)
    }
    return (rn == ln || Math.floor(ln / 10) == rn)
};

console.log(isPalindrome(11))