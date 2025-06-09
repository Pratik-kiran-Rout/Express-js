const express = require('express');
const router = express.Router();


// post is used to send the data
// get we used to read the data

router.post('/',(req,res)=>{
     const {name} = req.body; // thats the reason we use post method
     if(name){
          return res.status(200).send(`Welcome ${name}, welcome to the home page`);
     }else{
          return res.status(401).send('Please Provide Credentials !');
     }  
})

module.exports = router;