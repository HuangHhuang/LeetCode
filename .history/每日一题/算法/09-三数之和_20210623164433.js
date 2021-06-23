/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((c,d) => c - d)
    // console.log(nums)
    var n = nums.length
    var arr = []
    for(var i = 0; i < n; i++) {
        var l = n
        for(var j = i + 1; j = l; j++) {
            for(var k = n - 1, l = k; j = k; k--){
                console.log(1)
                if(nums[i] != nums[j] && nums[j] != nums[k] && nums[i] + nums[j] + nums[k] == 0){
                    var a = []
                    a.push(i)
                    a.push(j)
                    a.push(k)
                    arr.push(a)
                }
            }
        }
    }
    return arr
};

console.log(threeSum([-1,0,1,2,-1,-4]))