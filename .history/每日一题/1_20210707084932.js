const fetch = require("node-fetch")

var obj={params:{src:"F:\1.png"}}
        function getData(){
            const url="http://192.168.0.100:8080/api/analysis/totalByCompanyId";
            const config={
                method:"post",
                headers:{
                    "Postman-Token":"<calculated when request is sent>",
                    "Content-Type":"application/json",
                    "Content-Length":"<calculated when request is sent>",
                    "Host":"<calculated when request is sent>",
                    "User-Agent":"PostmanRuntime/7.28.1",
                    "Accept":"*/*",
                    "Accept-Encoding":"gzip, deflate, br",
                    "Connection":"keep-alive",
                    },
                body:JSON.stringify(obj)
                
                }
                fetch(url,config);
            }
             
        getData();