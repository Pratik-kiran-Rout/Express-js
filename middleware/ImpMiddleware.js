const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');


// 1. use vs route
// 2. options - our own / express built-in / third-party
// our own - logger, authorize
// express built-in - express.json(), express.static()
// third-party - morgan, helmet, cors, etc.

//!---------------------------------------------------------------

// 1. middleare function
//! for globar use 
// ?app.use(logger); // this will apply to all the routes 

// 2. if i write  app.use('/api',logger);
//! it will apply only to the routes that start with /api
//? app.use('/api',logger);

// 3. how to use multiple middleware functions
app.use([logger , authorize]);
//? only i can asses when if i write 
// example:  localhost:5000/?user=pratik home page

// 4 . how to use middleware function in specific route
//? app.get('/',logger,(req,res)=>{ : single middleware 
//? or app.get('/',[logger, authorize],(req,res)=>{ : multiple middleware functions can be used in a route handler

// 0 intro : we dont need to write the middle are function in every route handler
//? we can use it globally for all routes by using the app.use  
//! app.get('/',logger,(req,res)=>{
//!      res.send('Home Page');
//! })
     
     //Home Page
app.get('/',(req,res)=>{
     res.send('Home Page');
})
     // About Page
app.get('/about',(req,res)=>{
     res.send('About Page');
})
// Products Page
app.get('/api/products',(req,res)=>{
     res.send('Products Page');
})
// Items Page
app.get('/api/items',(req,res)=>{
     console.log(req.user);
     res.send('Items Page');

     //?GET /.well-known/appspecific/com.chrome.devtools.json 2025
     //?GET /api/items/?user=pratik 2025
     //?{ name: 'pratik', id: 24 }
})
app.listen(5000,()=>{
     console.log('Server is running on the port 5000 ...');
})