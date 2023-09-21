const http = require("http");

const server = http.createServer((request,response)=>{
    //send response
    response.end("hello from my first web server");
});

server.listen(5000);