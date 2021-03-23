var sortArray = function(nums) {
    let i, j
    let increment = nums.length
    do{
        increment = parseInt(increment / 3 + 1)
        for(i = increment; i < nums.length; i++){
            let temp = nums[i]
            for(j = i - increment; j >= 0 && temp < nums[j]; j -= increment){
                nums[j+increment] = nums[j]
            }
            nums[j+increment] = temp 
        }
    }
    while(increment > 1)
    return nums
};

console.log(sortArray(randomArray()));

/* 
    生成0-100的随机数组
*/
function randomArray(){
    let arr = []
    for (let i = 0; i < 10; i++)
    arr.push(parseInt(Math.random()*100))
    return arr
}