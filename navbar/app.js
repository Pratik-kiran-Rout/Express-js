const http = require('http');
const {readFileSync} = require('fs');

// read all files
const homePage = readFileSync('./navbar/index.html');
const style = readFileSync('./navbar/style.css');
const logo = readFileSync('./navbar/logo.svg');
const logic = readFileSync('./navbar/logic.js');

const server = http.createServer((req,res)=>{
       const url= req.url;
     //   console.log(url);
       // Home pAGE
       if( url ==='/' || url ==='/home'){
          res.writeHead(200,{'content-type':'text/html'});
          res.write(homePage);
          res.end();
          }
        //style
        else if(url==='/style.css'){
          res.writeHead(200,{'content-type':'text/css'});
          res.write(style);
          res.end();
        }
        else if(url==='/logic.js'){
          res.writeHead(200,{'content-type':'text/javascript'});
          res.write(logic);
          res.end();
        }
        else if(url==='/logo.svg'){
          res.writeHead(200,{'content-type':'text/svg+xml'});
          res.write(logo);
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


//? below is the file structure for this code that req want for res
// Server is listening on port 5000 .... 
// /
// /styles.css
// /logo.svg
// /browser-app.js
