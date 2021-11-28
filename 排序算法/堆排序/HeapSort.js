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
        每次循环完把左叶子节点的值赋给j，判断其左叶子是否存在，不存在则不再循环
    */
    for(j = 2 * index + 1; j <= size; j = 2 * index + 1 ){
        /* 比较左右叶子谁的值比较大，j取值最大的叶子结点 */
        if(j < size && nums[j] < nums[j+1]){
            ++j
        }
        /* 如果最大的叶子结点值不比根节点的值大，则跳出循环不执行 */
        if(nums[j] <= temp){
            break
        }
        /* 
            若没有跳出循环，则将最大叶子结点的值赋予根节点，index继续当前叶子结点的值，
            for循环判断该结点是否仍然存在叶子结点，若存在则继续比较
        */
        nums[index] = nums[j]
        index = j
    }
    /* 
        若不存在，将根节点的值赋予叶子结点。注意此处记录的是根节点的值，
        叶子结点的大值会在循环里被覆盖小值，temp记录的永远是最小值 
    */
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