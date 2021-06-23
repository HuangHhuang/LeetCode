/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((c,d) => c - d)
    // console.log(nums)
    var n = nums.length
    var arr = []
    for(var first = 0; first < n; first++) {
        if(first > 0 && nums[first] == nums[first - 1]) {
            continue
        }
        var third = n - 1
        var target = -nums[first]
        for(var second = first; second < n; second++) {
            if(second > 0 && nums[second] == nums[second - 1]) {
                continue
            }
            while(second < third && nums[second] + nums[third] > target) {
                third--
            }
            if(second == third) {
                break
            }
            if(nums[second] + nums[third] == target) {
                var list = []
                list.push(nums[first])
                list.push(nums[second])
                list.push(nums[third])
                arr.push(list)
            }
        }
    }
    return arr
};

console.log(threeSum([-1,0,1,2,-1,-4]))