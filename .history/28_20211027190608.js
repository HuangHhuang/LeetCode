// 1、 写一个基本的 debounce 函数
function debounce(fn, delay) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;

        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

// 2、 生成一个数组，结构为[1,2,3，...100]
function createArr() {
    var arr = [];
    for(let i = 1; i <= 100; i++) {
        arr.push(i);
    }
    return arr;
}

// 3、数组去重
function toSet(arr) {
    arr.sort();
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] == arr[i - 1]) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

// 4、 将给定数组（ 如：[1,2,3,4,5] ）的每一项间隔1s打印。（最终期待的效果是：每间隔一秒打印出数组的一项）
function printArr(arr) {
    for(let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            console.log(arr[i])
        }, (i + 1) * 1000);
    }
}

// 5、写个排序算法（自己熟悉的就好，会写快排就写快排，不熟悉的话写下冒泡）
function quickSort(arr) {
    sort(arr, 0, arr.length - 1);
    
    var sort = function(arr, low, high) {
        if(low < high) {
            let index = partition(arr, low, high);
            sort(arr, low, index - 1);
            sort(arr, index + 1, high); 
        }
        return arr
    }
    var partition = function(arr, low, high) {
        let key = arr[low];
        while(low < high) {
            while(low < high && arr[high] >= key) {
                high--;
            }
            if(low < high) {
                arr[low] = arr[high];
            }
            while(low < high && arr[low] <= key) {
                low++;
            }
            if(low < high) {
                arr[high] = arr[low];
            }
        }
        arr[low] = key;
        return low;
    }

    return arr;
}