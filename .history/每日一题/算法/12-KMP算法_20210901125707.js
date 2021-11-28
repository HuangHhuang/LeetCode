function getNext(ps){
    var p = ps.split("");
    var next = [];
    next[0] = -1;
    var j = 0;
    var k = -1;
    while(j < p.length){
        if(k == -1 || p[j] == p[k]){
            if(p[++j] == p[++k]){
                next[j] = next[k];
            } else {
                next[j] = k;
            }
        }else {
            k = next[k];
        }
    }
    return next;
}

function KMP(ts, ps){
    var t = ts.split("");
    var p = ps.split("");
    var i = 0;
    var j = 0;
    var next = getNext(ps);
    while(i < t.length && j < p.length){
        if(j == -1 || t[i] == p[j]){
            i++;
            j++;
        }else{
            j = next[j];
        }
    }
    if(j == p.length){
        return i - j;
    }else{
        return -1;
    }

}

console.log(KMP("ababacd","abac"));