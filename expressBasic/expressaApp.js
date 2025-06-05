const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware buit-in 
app.use(express.static('./public'));

//send file to the browser and give the absolute path by using path.resolve
app.get('/',(req,res)=>{
     // res.sendFile(path.resolve(__dirname,'./navbar/index.html'));
     //! IMP 
     const parentDir = path.resolve(__dirname,'../navbar');
     console.log(parentDir);
     res.sendFile(path.join(parentDir,'index.html'));
})

app.all('*',(req,res)=>{
     res.status(404).send('<h2>Resource Not Found!!</h2>');
})

app.listen(5000,(()=>{
     console.log('Server is running on the port 5000 ...');
}))


//app.use is used to mount middleware functions at a specific path
//?what is middlewware ? that is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
//?Middleware functions can perform a variety of tasks, such as logging requests, parsing request bodies, handling authentication, and more.

//! IMP Absolute path

//?  const parentDir = path.resolve(__dirname,'../navbar');
 //! ../navbar is move one directory up from the current directory (__dirname) and then look for the navbar directory.
// it remove last part of the path and give the absolute path of the directory navbar 
//?   res.sendFile(path.join(parentDir,'index.html'));

