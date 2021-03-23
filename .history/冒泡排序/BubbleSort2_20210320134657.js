var sortArray = function(nums) {
    let i,j
    let flag = true
    for (i = 0; i < nums.length && flag===true; i++){
        flag = false
        for(j = nums.length -1; j > i; j--){
            if(nums[j] < nums[j-1]){
                let k = nums[j]
                nums[j] = nums[j-1]
                nums[j-1] = k
                flag = true
            }
        }
    }
    return nums
};

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