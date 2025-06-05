const express = require('express');
const app= express();
// req => middleware => res

// Middleware function
const logger =(req,res,next)=>{
     const method = req.method;
     const url = req.url;
     const time = new Date().getFullYear();
     console.log(method,url,time);
     // res.send("middleware");
     next()
}

//? but it looks messy so we write it in separat efile and export it and import it here
//home page 
app.get('/',logger,(req,res)=>{
     res.send('Home Page');
})

// about page
app.get('/about',logger,(req,res)=>{
     res.send('About Page');
})
app.listen(5000,()=>{
     console.log('Server is running on the port 5000 ....');
})

//! next is very very important to call in middleware because it tells express to move to the next middleware or route handler so always call next() at the end of middleware function
// Middleware function
//express supplys req,res,next to the middleware function