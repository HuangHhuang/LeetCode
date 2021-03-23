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
       m = Math.floor((s + t) / 2)
       Msort(sr, tr2, s, m)
       Msort(sr, tr2, m+1, t)
       Merge(tr2, tr1, s, m, t)
   }
}

var MergePass = function(sr, tr, s, n){
   
}

var Merge = function(sr, tr, i, m, n){
   let j, k, l
   for(j = m + 1, k = i; i <= m, j <= n; k++){
       if(sr[i] < sr[j]){
           tr[k] = sr[i++]
       }else{
           tr[k] = sr[j++]
       }
   }
   if(i < m){
       for(l = 0; l <= m-i; l++){
           tr[k+l] = sr[i+l]
       }
   }
   if(j < n){
       for(l = 0; l <= n-j; l++){
           tr[k+l] = sr[j+l]
       }
   }
}