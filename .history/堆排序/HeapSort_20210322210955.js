var sortArray = function(nums) {
    let i
    let index = parseInt((nums.length- 1) / 2) 
    for(i = index; i >= 0; i--){
        // console.log(i)
        heapAdjust(nums, i, nums.length)
    }
    // console.log(nums)
    for(i = nums.length-1; i > 0; i--){
        let temp = nums[0]
        nums[0] = nums[i]
        nums[i] = temp
        heapAdjust(nums, parseInt((i - 1) / 2, i-1)
    }
    return nums
};

var heapAdjust = function(nums, index, size){
    let temp, j
    temp = nums[index]
    for(j = 2 * index + 1; j <= size; j = (j + 1) * 2 - 1){
        if(j <= size && nums[j] < nums[j+1]){
            ++j
        }
        if(nums[j] <= temp){
            break
        }
        nums[index] = nums[j]
        index = j
        // console.log(index)
    }
    nums[index] = temp
    return nums
}

// const arr = [2,5,6,3,4,1,9,7,8,10]
// for (var i = 4; i >= 0; i--) {
//     console.log(heapAdjust(arr,i,9))
// }

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