const http = require('http')

http.createServer((req, resp)=>{
    resp.write("<h1>hello this is anil siddhu</h1>");
    resp.end();

}).listen(4500);

console.log(100+20)
console.log(100+30)
