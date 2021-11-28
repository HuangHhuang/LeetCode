function time(data, change) {
    var newData = new Date(data).getTime();
    var changes = change.split(" ")
    console.log(changes)
    for(var item in changes) {
        var a = item.substring(0, 1)
        console.log(item)
        if(a == "+"){
            switch(substring(item.length - 1, item.length)) {
                case "W": 

            }
        }
    }

}

console.log(time("2021-09-13 00:00:00", "+5d"))