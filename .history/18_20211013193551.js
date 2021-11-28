function time(data, change) {
    var newData = new Date(data).getTime();
    console.log(newData)
}

console.log(time("2021-09-13 00:00:00", "+5d"))