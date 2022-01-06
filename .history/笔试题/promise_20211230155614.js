const axios = require('axios');

console.log("start");

const fetchDate = async (num) => {
    // it take 100ms to get response
    await axios.get("https://dataweb/api/mockupdata");
    console.log("get response " + num);
}

setTimeout(async () => {
    console.log("1st timeout");
    await fetchDate(1);
    await fetchDate(2);
    await fetchDate(3);
}, 0);

var promise1 = new Promise((resolve, reject) => {
    console.log("new promise");
    setTimeout(() => {
        console.log("3rd timeout");
    }, 0);
})

setTimeout(() => {
    console.log("2nd timeout");
}, 0);

for (var i = 0; i < 2; i++) {
   (function(j) {
       promise1.then((value) => console.log("promise then" + j))
   })(i);
}