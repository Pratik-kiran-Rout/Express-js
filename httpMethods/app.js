//! Router is a collection of middleware

const express = require('express');
const app = express();

const people = require('./routers/people');
const auth = require

//! Middleware built-in
app.use(express.static('./methods-public'));

//! Middleware for get the data from the form (parse from data)
app.use(express.urlencoded({extended:false}))

//! express.json() is a middleware function
app.use(express.json()) ;

//!  IMP

//! Autho Router
app.use('/login',auth);
// here we use the '/login' as main router so in 
//? auth.js file we use '/' as main router instead of '/login'

//! people router

app.use('/api/people',people);
//here we use the '/ap/people' as main router so in 
//? people.js file we use '/' as main router instead of '/api/people'

//! run the surver 
app.listen(5000,()=>{
     console.log('Server is running the port 5000...');
})
