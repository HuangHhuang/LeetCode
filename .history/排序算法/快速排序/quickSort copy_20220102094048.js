var sortArray2 = function(nums) {
    quickSort(nums, 0, nums.length-1)
    return nums
}

var quickSort2 = function(nums, low, high){
    if( low < high){
        let index = partition(nums, low, high)
        quickSort(nums, low, index-1)
        quickSort(nums, index+1, high)
    }
    return nums
}

var partition2 = function(nums, low, high){
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

function sortArray(arr){
    quickSort(arr, 0, arr.length - 1);
    return arr;
}

function quickSort(arr, low, high) {
    if(low < high){
        let index = partition(arr, low, high);
        quickSort(arr, 0, index - 1);
        quickSort(arr, index + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    let key = arr[low];
    while(low < high) {
        while(low < high && arr[high] > key) {
            high--;
        }
        if(low < high) key = arr[high];
        while(low < high && arr[low] < key) {
            low++;
        }
        if(low < high) key = arr[low];
    }
    arr[low] = key;
    return low;
}