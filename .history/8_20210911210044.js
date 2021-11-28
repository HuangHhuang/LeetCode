function minWastedSpace( packages ,  boxes ) {
    // write code here
    packages = packages.map((a =>{console.log(a)}))
    var plen = packages.length;
    var blen = boxes.length;
    console.log(packages)
    var min = 0;
    for(var i = 0; i < blen; i++){
        var sum = 0;
        for(var j = 0; j < plen.length; j++){
            console.log(1)
            for(var k = 0; k < boxes[i].length; k++){
                console.log(boxes[k] + packages[j])
                var nap = boxes[k] - packages[j]
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