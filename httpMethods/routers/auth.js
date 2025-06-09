const express = require('express');
const router = express.Router();

app.router('/login',(req,res)=>{
     // console.log(req.body); it recieves data from the form 
     const {name} = req.body;
     if(name){
          return res.status(200).send(`Welcome ${name}`);
     }else{
          return res.status(401).send('Please Provide Credentials !');
     }  
})

module.exports = router;