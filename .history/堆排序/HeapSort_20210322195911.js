var sortArray = function(nums) {
    let i
    let max = parseInt(nums.length / 2)
    for(i = max; i >= 0; i--){
        heapAdjust(nums, i, nums.length)
    }
    for(i = nums.length; i > 1; i--){
        let temp = nums[0]
        nums[0] = nums[i]
        nums[i] = temp
        heapAdjust(nums, 1, i-1)
    }
};

var heapAdjust = function(nums, s, m){
    let temp, j
    temp = nums[s]
    for(j = 2 * s; j <= m; j * 2){
        if(nums[j] < nums[j+1]){
            ++j
        }
        if(nums[j] < temp){
            break
        }
        nums[s] = nums[j]
        s = j
    }
    nums[s] = temp
}

/* 
    生成0-100的随机数组
*/
function randomArray(){
    let arr = []
    for (let i = 0; i < 10; i++)
    arr.push(parseInt(Math.random()*100))
    return arr
}