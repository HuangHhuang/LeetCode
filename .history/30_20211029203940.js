function str(value) {
    switch(value) {
        case "A":
            console.log("A")
            break
        case "B":
            console.log("B")
            break
        case "undefined":
            console.log("undefined")
            break
        default:
            console.log("default: " + value)
            break    
    }
}
str(new String("A"));