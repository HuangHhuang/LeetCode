/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    var dp = []
    dp[0] = nums[0]
    var m = dp[0]
    for(var i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i-1] + nums[i])
        m = Math.max(dp[i], m)
    }
    return m
};