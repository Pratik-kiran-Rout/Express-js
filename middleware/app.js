const express = require('express');
const app = express();
const logger = require('./logger');

//middleare function
// ?app.use(logger); // this will apply to all the routes 

// if i write  app.use('/api',logger);
//! it will apply only to the routes that start with /api


app.use('/api',logger);
// we dont need to write the middle are function in every route handler
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
     res.send('Items Page');
})
app.listen(5000,()=>{
     console.log('Server is running on the port 5000 ...');
})