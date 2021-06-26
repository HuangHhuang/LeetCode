function sort(nums) {
    quickSort(nums, 0, nums.length - 1)
    return nums
}

function quickSort(nums, low, high) {
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

console.log(sort(randomArray()))

/* 
    生成0-100的随机数组
*/
function randomArray(){
    let arr = []
    for (let i = 0; i < 10; i++)
    arr.push(parseInt(Math.random()*100))
    return arr
}