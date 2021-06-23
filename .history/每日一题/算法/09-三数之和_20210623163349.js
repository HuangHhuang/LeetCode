/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort()
    console.log(nums)
    var n = nums.length
    var arr = []
    for(var i = 0; i < n; i++) {
        for(var j = i+1, k = n-1; j = k; j++, k--) {
            if(nums[i] != nums[j] && nums[j] != nums[k] && nums[i] + nums[j] + nums[k] == 0){
                var a = []
                a.push(i)
                a.push(j)
                a.push(k)
                arr.push(a)
            }
        }
    }
    return arr
};

console.log(threeSum([-1,0,1,2,-1,-4]))