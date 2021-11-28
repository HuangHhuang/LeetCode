function threeSum( nums ) {
    // write code here
    let n = nums.length
    let ans = []
    for(let i = 0; i < n; i++) {
        if(i > 0 && nums[i] == nums[i - 1]) continue
        let j = n - 1
        let target = -nums[i]
        for(let k = i + 1; k < n; k++) {
            console.log(j)
            if(k > i + 1 && nums[k] == nums[k - 1]) continue
            while (k < j && nums[k] + nums[j] > target) {
                j--
            }
            if(j == k) break
            if(nums[k] + nums[j] == target) {
                let list = []
                list.push(i)
                list.push(k)
                list.push(j)
                ans.push(list)
            }
        }
    }
    return ans
}

console.log(threeSum([1,2,3,4,5]))