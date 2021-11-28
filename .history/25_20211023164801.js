function threeSum( nums ) {
    // write code here
    let n = nums.length
    let ans = []
    for(let i = 0; i < n; i++) {
        if(i > 0 && nums[i] == nums[i - 1]) continue
        let j = n - 1
        let target = -nums[i]
        for(let k = i + 1; k < n; k++) {
            if(k > i + 1 && nums[k] == nums[k - 1]) continue
            // console.log(j + k)
            while (k < j && nums[k] + nums[j] > target) {
                j--
            }
            console.log(j + " " +  k)
            if(j == k) break
            if(nums[k] + nums[j] == target) {
                let list = []
                list.push(nums[i])
                list.push(nums[k])
                list.push(nums[j])
                ans.push(list)
            }
        }
    }
    return ans
}

console.log(threeSum([1,2,3,4,5]))