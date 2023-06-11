const http = require("http");

const handler = require("./router")
const server = http.createServer();

server.listen(3000);
