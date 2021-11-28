var obj={params:{src:"C:/Users/dell/Desktop/src=http___img14.artimg.net_gallery_2021_0528_162216404497083590.jpg.big.jpg&refer=http___img14.artimg.jpg"}}
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