function SelectSort (arr){
    for (var i = 0; i < arr.length; i++) {
       let min = i
       for (var j = i+1; j < arr.length; j++) {
          if(arr[j] < arr[min]){
              min = j
          }
       }
       arr[i] = arr[min]
    }
}

function swap (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}