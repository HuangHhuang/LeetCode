var singleNumber = function(nums) {
    nums = nums.sort()
    for(var i = 1; i < nums.length; i++) {
        if(nums[i-1] != nums[i]){
            if(i != nums.length-1 && nums[i] !=  nums[i+1]){
                return nums[i]
            }else {
                return nums[nums.length - 1]
            }
        }
    }
};

console.log(singleNumber([2,2,1]))
