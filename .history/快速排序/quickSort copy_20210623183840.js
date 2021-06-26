function sort(nums) {
    quickSort(nums, 0, nums.length - 1)
    return nums
}

quickSort(nums, low, high) {
    if(low == high){
        var i = partition(nums, low, high)
        quickSort(nums, low, i - 1)
        quickSort(nums, i + 1, high) 
    }
    return nums​
}

function partition(nums, low, high) {
    var key = nums[low]
    while(nums[high] > key) {
        high--
    }
    if(low < high){
        nums[low] = nums[high]
        low++
    }
    while(nums[low] < key){
        low++
    }
    if(low < high){
        nums[high] = nums[low]
        high--
    }
    nums[low] = key
    return low
}