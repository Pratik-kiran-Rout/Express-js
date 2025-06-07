const express = require('express');
const app = express();
let {people} = require('./data');

//Home Page
app.get('/',(req,res)=>{
  res.status(200).send('Welcome to the home page')
})



// People API
app.get('/api/people',(req,res)=>{
     res.status(200).json({success:true,data:people});
})

app.listen(5000,()=>{
     console.log("server is running in the port 5000 ...");
})