var sortArray = function(nums) {
    let i, j
    for(i = 1; i < nums.length; i++){
        let key = nums[i]
        for(j = i - 1; j >= 0; j--){
            if( key < nums[j]){
                nums[j+1] = nums[j]
            }else{
                break;
            }
        }
        nums[j+1] = key
    }
    return nums
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