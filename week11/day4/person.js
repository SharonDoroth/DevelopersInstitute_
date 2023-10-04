// const http = require("http");

// const server = http.createServer((request,response)=>{
//     //send response
//     response.end("hello from my first web server");
// });

// server.listen(5000);

class Person {
    constructor(name) {
        this.name = name;
    }
    sayMyName() {
        return `My name is ${this.name}!`;
    }
}

module.exports = {
    Person,
};