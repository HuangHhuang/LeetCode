var temp = "${user} is ${age}"
var data = {
    user: "tom",
    age: 1
}

function template(temp, data) {
    for(var i in data) {
        temp = temp.replace("${", "")
        temp = temp.replace("}", "")
        temp = temp.replace(i, data[i])
        console.log(temp)
    }
}

template(temp, data)
console.log(temp)