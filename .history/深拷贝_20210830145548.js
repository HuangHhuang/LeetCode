function clone(obj) {
    var res;
    switch(Object.prototype.toString.call(obj)) {
        case '[object String]':
            res = (typeof obj === 'object' ? new String(obj) : obj.toString());
            break;
        case '[object Number]':
            res = (typeof obj === 'object' ? new Number(obj) : parseInt(obj.toString));
            break;
        case '[object Boolean]':
            res = (typeof obj === 'object' ? new Boolean(obj) : obj);
            break;
        case '[object Date]':
            res = new Date(obj);
        case '[object Array]':
            var temp = new Array();
            for(var i = 0, a; a = obj[i]; i++) {
                temp[i] = clone(obj[i]);
            }
            res = temp;
            delete temp;
            break;
        case '[object Object]':
            var temp = {};
            var keys = Object.keys(obj);
            for(var i = 0, a; a = keys[i]; i++){
                temp[i] = clone(obj[a])
            }
            res = temp;
            delete temp;
            delete keys;
            break;
        default:
            break;
    }
    return res;
}