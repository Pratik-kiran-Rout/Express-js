const http = require('http');
const {readFileSync} = require('fs');

// read all files
const homePage = readFileSync('./basicExpress/html/index.html');
const aboutPage = readFileSync('./basicExpress/html/about.html');

const server = http.createServer((req,res)=>{
       const url= req.url;
       console.log('user hit the server');
       // Home pAGE
       if( url ==='/' || url ==='/home'){
          res.writeHead(200,{'content-type':'text/html'});
          res.write(homePage);
          res.end();
          }
        //About page 
        else if(url==='/about'){
          res.writeHead(200,{'content-type':'text/html'});
          res.write(aboutPage);
          res.end();
        }
        else{
          res.writeHead(404,{'content-type':'text/plain'});
          res.write('Error ! Page not Found !!');
          res.end();
        }
     }
)

server.listen(5000,()=>{
     console.log('Server is listening on port 5000 .... ');
})