const http = require("http");

const server = http.createServer((re, res)=>{
    console.log("pethanan")
    console.log(req);

});

server.listen(3000);
