var sortArray = function(nums) {
    /* 
        申请一个临时数组，用来存放排序过后的新数组
    */
    let temp = []
    Merge(nums, temp, 0, nums.length)
    return nums
};

var Merge = function(nums, temp, left, right){
    /* 
        当左索引等于右索引，则说明当前数组已经分的只剩一个元素，结束递归    
    */
    if(left == right) return
    /* 
        取得中间的坐标
    */
    let m = Math.floor((left + right) / 2)
    /* 
        对中间分开的两个数组分别进行再次分组
    */
    Merge(nums, temp, left, m)
    Merge(nums, temp, m+1, right)
    /* 
        每次分完组后，进行排序，取得两个数组的第一个索引值
    */
    let i = left, j = m+1, k = 0
    /* 
        两个数组都遍历完才跳出循环
    */
    while(i <= m || j <= right){
        /* 
            首先看后半部分，i没有遍历完并且I索引的值小于j索引的值则将i赋值给k然后两者+1
            如果i索引的值大于j索引的值，或者i已经遍历完了，则将j赋值给k然后两者+1
            再看前面部分，i遍历完了就会遍历j，则j遍历完了也要遍历i，所以j>right时就代表
            j遍历完了，直接对i进行遍历
        */
        if( j > right || (i <= m && nums[i] < nums[j])){
            temp[k++] = nums[i++]
        }else{
            temp[k++] = nums[j++]
        }
    }
    /* 
        最后将排好序的临时数组的值对应赋值到原数组
    */
    for(let l = 0; l < k; l++){
        nums[left + l] = temp[l]
    }
}