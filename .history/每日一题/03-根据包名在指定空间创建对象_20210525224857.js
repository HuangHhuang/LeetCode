function namespace(oNamespace, sPackage) {
    let list = sPackage.split('.');
    let tmp = oNamespace;
    for (var k in list) {
        if (typeof tmp[list[k]] !== 'object') {
            tmp[list[k]] = {};
        }
        tmp = tmp[list[k]];
    }
    return oNamespace;
};
var a = {}
console.log(namespace(a, 'a.b.c.d.e.f.g'));