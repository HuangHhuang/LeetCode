function test(temp){
    var num = temp;
    var arr = new Array();
    for(var i = 0; 1; i++){
        if(num / 2 >= 1){
            arr[i] = num % 2;
            num = parseInt(num / 2);
        }else{
            arr[i] = 1;
            break;
        }
    }
    for(i = arr.length; i > 0; i--){
        console.log(arr[i-1]);
    }
}

test(8);