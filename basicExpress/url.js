const http = require('http');
const server = http.createServer((req,res)=>{
     const url = req.url;
     console.log('user hit the server');
     // home page
     if( url === '/' || url === '/home' ){
          res.writeHead(200,{'content-type':'text/html'});
          res.write('<h1> Home Page </h1>');
          res.end();
     }
     // about page
     else if (url ==='/about'){
         res.writeHead(200,{'content-type': 'text/html'});
         res.write("<h1> About Page </h1>");
         res.end();
     }
     // error
     else{
          res.writeHead(404,{'content-type':'text/html'});
          res.write(`<h2> Page not found at port ${url} </h2>`);
          res.end();
     }
});

server.listen(5000,()=>{
     console.log('Server is listening on port 5000 .... ');
})

