var sortArray = function(nums) {
    quickSort(nums, 0, nums.length-1)
    return nums
}

var quickSort = function(nums, low, high){
    if( low < high){
        let index = partition(nums, low, high)
        quickSort(nums, low, index-1)
        quickSort(nums, index+1, high)
    }
    return nums
}

var partition = function(nums, low, high){
    let key = nums[low]
    while(low < high){
        while(low < high && nums[high] >= key){
            high--
        }
        if(low < high){
            nums[low] = nums[high]
        }
        while(low < high && nums[low] <= key){
            low++
        }
        if(low < high){
            nums[high] = nums[low]
        }
    }
    nums[low] = key
    return low
}

console.log(sortArray(randomArray()))

/* 
    生成0-100的随机数组
*/
function randomArray(){
    let arr = []
    for (let i = 0; i < 10; i++)
    arr.push(parseInt(Math.random()*100))
    return arr
}