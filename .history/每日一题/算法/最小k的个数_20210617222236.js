function GetLeastNumbers_Solution(input, k)
{
    input.sort()
    var result = []
    for(var i = 0; i < input.length; i++) {
        result[i] = input[i]
    }
    return result
}

console.log(GetLeastNumbers_Solution([4,5,1,6,2,7,3,8], 4))