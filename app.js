const http = require("http");

const server = http.createServer((re, res)=>{
    console.log("pethanan")
});

server.listen(3000);
