function minWastedSpace( packages ,  boxes ) {
    // write code here
    var pArr = []
    var bArr = []
    packages.map((a => pArr.push(a)))
    boxes.map(b => {
        var temp = []
        b.map( c => temp.push(c))
        bArr.push( temp)
    })
    var plen = pArr.length;
    var blen = bArr.length;
    // console.log(bArr)
    var min = 0;
    for(var i = 0; i < blen; i++){
        var sum = 0;
        for(var j = 0; j < plen; j++){
            console.log(1)
            for(var k = 0; k < bArr[i].length; k++){
                console.log(bArr[k] + pArr[j])
                var nap = bArr[k] - pArr[j]
                if(nap >= 0){
                    sum += nap;
                    break;
                }
            }
        }
        if(sum < min){
            min = sum;
        }
    }
    return min;
}

var a = [2,3,5]
var b = [[4,8],[2,8]]

console.log(minWastedSpace(a,b));