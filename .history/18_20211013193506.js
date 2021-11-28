function time(data, change) {
    var newData = new Date(data)
    console.log(newData.UTC())
}

console.log(time("2021-09-13 00:00:00", "+5d"))