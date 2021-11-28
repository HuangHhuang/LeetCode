function SelectSort (arr){
    let i, j, min
    for (i = 0; i < arr.length; i++) {
       min = i
       for (j = i+1; j < arr.length; j++) {
          if(arr[j] < arr[min]){
              min = j
          }
       }
       if(i!=min){
           swap(arr, i, min)
       }
    }
    return arr
}

console.log(SelectSort(randomArray()))

/* 
    交换两数组元素
*/
function swap (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
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