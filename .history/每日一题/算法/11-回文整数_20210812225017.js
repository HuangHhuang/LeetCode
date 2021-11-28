var isPalindrome = function(x) {
    if( 0 <= x < 10) return true
    if(x < 0  || x % 10 == 0) return false
    
    var rn = x % 10
    var ln = x / 10
    while(rn < ln){
        rn = ln % 10 + rn * 10
        ln = x / 10
    }
    return (rn == ln || ln/10 == rn)
};

console.log(isPalindrome(121))