const http = require('http');

const server = http.createServer((req,res)=>{
     console.log("user hit the server ");
     res.writeHead(200,{'content-type':'text/html'});
     res.write('<h1> Hello welcome to Home Page </h1>');
     res.end("<h2> This is the end of the response </h2>");
})

server.listen(5000,()=>{
     console.log('Server is listening on port 5000');
});