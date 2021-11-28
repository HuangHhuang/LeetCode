/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    Msort(nums, nums, 0, nums.length-1)
    return nums
}

var Msort = function(sr, tr1, s, t){
   let m
   let tr2 = []
   if(s === t){
       tr1[s] = sr[s]
   }
   else{
       /* 
            将SR[s..t]平分为SR[s..m]和SR[m+1..t]
       */
       m = Math.floor((s + t) / 2)
       /* 
            递归将SR[s..m]归并为有序的TR2[s..m]
       */
       Msort(sr, tr2, s, m)
       /* 
            递归将SR[m+1..t]归并为有序的TR2[m+1..t]
       */
       Msort(sr, tr2, m+1, t)
       /* 
            将TR2[s..m]和TR2[m+1..t],
            归并到TR1[s..t]
       */
       Merge(tr2, tr1, s, m, t)
   }
}

var Merge = function(sr, tr, i, m, n){
   let j, k, l
   /* 
        找到两个数组的最小值，当有一个数组循环完毕则跳出循环，
        k为新数组的索引值
   */
   for(j = m + 1, k = i; i <= m && j <= n; k++){
       /* 
        比较哪个数组的值更小，然后放进新的数组里
       */
       if(sr[i] < sr[j]){
           tr[k] = sr[i++]
       }else{
           tr[k] = sr[j++]
       }
   }
   /* 
    通过if循环比较出哪个数组的值没有通过以上循环放进新数组
   */
   if(i <= m){
       /* 将没放进新数组的值放进新数组 */
       for(l = 0; l <= m-i; l++){
           tr[k+l] = sr[i+l]
       }
   }
   if(j <= n){
       /* 将没放进新数组的值放进新数组 */
       for(l = 0; l <= n-j; l++){
           tr[k+l] = sr[j+l]
       }
   }
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