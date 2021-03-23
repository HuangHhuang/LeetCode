var sortArray = function(nums) {
    let i
    /* 取得堆的最后一个根节点 */
    let index = parseInt((nums.length- 1) / 2) 
    /* 根节点递减排序，直至根节点结束 */
    for(i = index; i >= 0; i--){
        /* 首次进行排序，建立出一个大顶堆 */
        heapAdjust(nums, i, nums.length-1)
    }
    /* 从最后一个叶子结点开始，与根节点（数组索引0）交换，然后对交换后的根节点进行堆调整 */
    for(i = nums.length-1; i > 0; i--){
        let temp = nums[0]
        nums[0] = nums[i]
        nums[i] = temp
        heapAdjust(nums, 0, i-1)
    }
    return nums
};

var heapAdjust = function(nums, index, size){
    let temp, j
    temp = nums[index]
    /* 
        由于是完全二叉树，数组索引从零开始，可知任意一个根节点的左叶子节点为 2 * index + 1，
        
    */
    for(j = 2 * index + 1; j <= size; j = 2 * index + 1 ){
        if(j < size && nums[j] < nums[j+1]){
            ++j
        }
        if(nums[j] <= temp){
            break
        }
        nums[index] = nums[j]
        index = j
    }
    nums[index] = temp
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