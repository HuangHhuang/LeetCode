var name = 'world';
(function () {
    if(typeof name === 'undefined') { 
        console.log(name)
        var name = 'Jack'
        console.log("Goodbye" + name)
    } else {
        console.log("Hello" + name)
    }
})()