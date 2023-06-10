const http = require("http");

const handler = require("./route")
const server = http.createServer();

server.listen(3000);
