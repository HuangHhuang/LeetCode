function peakIndex( nums ) {
    // write code here
    if(nums.length == 1) return 0
    let i = 0;
    let j = nums.length - 1;
    let res;
    let flag = true;
    for(i; i < j; i++) {
        if(nums[i] < nums[i + 1]) {
            console.log(i)
            if(!flag) return -1
            break;
        } else if(nums[i] == nums[i + 1]) {
            return -1;
        } else {
            console.log(i)
            if(flag) {
                res = i;
                flag = false;
            }
        }
    }
    return res;
}

console.log(peakIndex([1,2,6,5,3]))