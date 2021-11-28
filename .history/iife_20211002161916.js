// undefined = true;
// (function IIFE( undefined ) {
//     var a;
//     if(a === undefined) {
//         console.log("Undefined is safe here")
//     }
// })()

var a = 2;
(function () {
    console.log(a)
})()