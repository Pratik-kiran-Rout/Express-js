const http = require('http');

const server = http.createServer((req,res)=>{
     console.log('user hit the server');
     console.log(req);
     console.log(req.method);
     console.log(req.url);
     // res.writeHead(200,{'content-type':'text/plain'});
     res.writeHead(200,{'content-type':'text/html'});
     res.write('<h1> Home Page </h1>');
     res.end();
})

server.listen(5000,()=>{
     console.log('Server is listening on port 500');
})
// 5000 is the port number where the server will listen for requests
 // 200 is the status code for ok and plain is for plain text response
 //html, json, text, etc. can be used as content types (MIME types)
//! res.method is the method used to make the request (GET, POST, etc.)
// res.url is the url of the request
//! res.url example: /about, /contact, etc.