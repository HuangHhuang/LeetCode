function SelectSort (arr){
    for (var i = 0; i < arr.length; i++) {
       let min = i
       for (var j = i+1; j < arr.length; j++) {
          if(arr[j] < arr[min]){
              min = j
          }
       }
       arr[min] = arr[j]
       arr[j] = arr[i]
       arr[i] = arr[min]
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