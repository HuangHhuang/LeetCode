var name = 'world';
(function () {
    console.log(name)
    if(typeof name === 'undefined') { 
        console.log(name)
        var name = 'Jack'
        console.log("Goodbye" + name)
    } else {
        console.log("Hello" + name)
    }
})()