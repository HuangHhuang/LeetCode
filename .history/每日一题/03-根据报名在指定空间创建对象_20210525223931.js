function namespace(oNamespace, sPackage) {
    var arr = sPackage.split(".");
	var res = oNamespace;
	for(var i=0, len = arr.length;i<len;i++){
		if(arr[i] in oNamespace){
			if(typeof oNamespace[arr[i]]!=="object"){
				oNamespace[arr[i]] = {};
			}
		}else{
			oNamespace[arr[i]] = {};
		}
		oNamespace = oNamespace[arr[i]];
	}
	return res;
}

console.log(namespace(a, 'a.b.c.d.e.f.g'));