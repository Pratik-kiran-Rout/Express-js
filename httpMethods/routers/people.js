const express = require('express');
const router = express.Router();

//! The main route is " /api/people " mainly used to send the data

//import the data from the data.js
let {people} = require('../data');

//! GET method
router.get('/',(req,res)=>{
     res.status(200).json({success:true, data:people});
})

//! here we actully add the data
router.post('/',(req,res)=>{
     const {name} = req.body
     if(!name){
          return res.status(400).json({success:false, msg:'please provide name value'})
     }
res.status(201).json({success:true,person:name});
})

//! postman is used to send the data and stored as array in the database data.js
// '/api/people/postman' base url

router.post ('/postman',(req,res)=>{
const {name} = req.body;
if(!name){
     return res
     .status(400)
     .json({success:false, msg:'please provide name value'})
     }
res.status(201).json({success:true,data:[...people,name]});
})
 
//! PUT method IMP
router.put('/:id',(req,res)=>{
     const {id} = req.params;
     const {name} =req.body;
     // console.log(id,name);
     // res.status(200).send('Hello World');

     const person = people.find((person)=>person.id === Number(id));
     if(!person){
          return
          res
          .status(400)
          .json({success:false,msg:`no person with id ${id}`});
     }

     const newPeople = people.map((person)=>{
          if(person.id=== Number(id)){
               person.name = name;
          }
          return person;
     })
     res.status(200).json({success:true,data:newPeople});
})

//! DELETE method
router.delete('/:id',(req,res)=>{
     const {id} = req.params;
     const person = people.find((person)=> person.id === Number(id));

     if(!person){
          return res
          .status(400)
          .json({success: false,msg:`No person with id ${id}`});
     }
     const newPeople = people.filter((person)=>person.id !== Number(id));
     res.status(200).json({success:true,data:newPeople});
})

//! export the router
module.exports = router





/* 
We use the router in Express to organize and modularize our route handlers. Instead of defining all routes directly on the main app, we can group related routes together in separate files using express.Router(). This makes the code easier to manage, maintain, and scale, especially in larger applications.


  ------------------------------


Keeps code organized by feature or resource.
Makes it easier to maintain and extend.
Supports modular development and cleaner code structure.
*/