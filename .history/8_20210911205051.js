function minWastedSpace( packages ,  boxes ) {
    // write code here
    var plen = packages.length;
    var blen = boxes.length;
    var min = 0;
    for(var i = 0; i < blen; i++){
        var sum = 0;
        for(var j = 0; j < plen.length; j++){
            for(var k = 0; k < boxes[i].length; k++){
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

console.log(minWastedSpace([2,3,5],[[4,8],[2,8]]));