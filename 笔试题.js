var name = 'world';
(function () {
    if(typeof name === 'undefined') { 
        var name = 'Jack' // 变量提升
        console.log("Goodbye" + name)
    } else {
        console.log("Hello" + name)
    }
})()