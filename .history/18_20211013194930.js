function time(data, change) {
    var newData = new Date(data).getTime();
    var changes = change.split(" ")
    for(var item in changes) {
        var a = changes[item].substring(0, 1)
        var b = changes[item].substring(item.length - 1)
        console.log(b)
        if(a == "+"){
            switch(b) {
                case "W": 

            }
        }
    }

}

console.log(time("2021-09-13 00:00:00", "+5d"))