var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = 1;
var ans = [];
var cur_line = 5;
rl.on('line', function(line){
   if (n == 1) {
       var zwb = line.split(" ")
       n++
   } else if (n == 2) {
       var z = line.split(" ")
       n++
   } else if (n == 3) {
       var w = line.split(" ")
       n++
   } else if (n == 4) {
       var b = line.split(" ")
       n++
   } else if (n == 5) {
       var n = parseInt(line.trim()) + 5
       n++
   } else {
       var tokens = line.split(" ")
       if(z.indexOf(tokens[0]) == -1) {
         ans.push(false)
       } else {
           console.log(n)
         for(var i = 1; i < tokens.length; i++) {
           if(z.indexOf(tokens[i]) == -1) {
               if(w.indexOf(tokens[i]) == -1) {
                   ans.push(false)
                   break
               } else if (w.indexOf(tokens[i + 1]) == -1){
                ans.push(false)
                break
               } else {
                   for(var j = i + 1; j <= tokens.length; j++) {
                    if(b.indexOf(tokens[j]) == -1) {
                        ans.push(false)
                        break
                    }
                    if(j == tokens.length) {
                        ans.push(true)
                    }
                   }
                   break
               }
           }
         }
       }
       
       cur_line += 1
   }
    
   if (n === cur_line) {
       for(let i = 0; i < ans.length; i++) {
        console.log(ans);
       }
       
       n = 1;
       ans = [];
       cur_line = 5;
   }
});