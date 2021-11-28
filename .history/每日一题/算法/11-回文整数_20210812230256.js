var isPalindrome = function(x) {
    if( x >= 0 && x < 10) return true
    if(x < 0  || x % 10 == 0) return false
    
    var rn = 0
    console.log(rn, ln)
    while(rn < ln){
        rn = ln % 10 + rn * 10
        ln = Math.floor(ln / 10)
        console.log(rn, ln)
    }
    return (rn == ln || Math.floor(ln / 10) == rn)
};

console.log(isPalindrome(121))