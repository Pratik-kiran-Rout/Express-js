const express = require('express');
const app = express();
let {people} = require('./data');


// Middleware built-in
app.use(express.static('./methods-public'));

// Middleware for get the data from the form (parse from data)
app.use(express.urlencoded({extended:false}))

// parse json
app.use(express.json()) 
//! express.json() is a middleware function

// People API we just read the data 
app.get('/api/people',(req,res)=>{
     res.status(200).json({success:true, data:people});
})

//here we actully add the data
app.post('/api/people',(req,res)=>{
     const {name} = req.body
     if(!name){
          return res.status(400).json({success:false, msg:'please provide name value'})
     }
res.status(201).json({success:true,person:name});
})
// here by using post method we add the data  

app.post('/login',(req,res)=>{
     // console.log(req.body); it recieves data from the form 
     const {name} = req.body;
     if(name){
          return res.status(200).send(`Welcome ${name}`);
     }else{
          return res.status(401).send('Please Provide Credentials !');
     }  
})

app.listen(5000,()=>{
     console.log("server is running in the port 5000 ...");
})

                   //! Express.urlencoded()

//! app.use(express.urlencoded({extended:false})) is used to parse the incoming request bodies in a middleware before your handlers, available under the req.body property.

//! in simple it is used to parse the form data from the request body and make it available in req.body object.

// ! The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The qs library allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.

                 //? Express.urlencoded()

//? express.static() is a built-in middleware function in Express. It serves static files, such as images, CSS files, and JavaScript files. It is used to serve files from a directory that you specify.

//? in simple words it is used to serve static files from a directory. In this case, it serves the files from the 'methods-public' directory.