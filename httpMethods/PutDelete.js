const express = require('express');
const app = express();
let {people} = require('./data');


//! Middleware built-in
app.use(express.static('./methods-public'));

//! Middleware for get the data from the form (parse from data)
app.use(express.urlencoded({extended:false}))

// parse json //! express.json() is a middleware function
app.use(express.json()) 


//! This route handles the login form submission for traditional form
app.post('/login',(req,res)=>{
     // console.log(req.body); it recieves data from the form 
     const {name} = req.body;
     if(name){
          return res.status(200).send(`Welcome ${name}`);
     }else{
          return res.status(401).send('Please Provide Credentials !');
     }  
})

//! People API we just read the data 
app.get('/api/people',(req,res)=>{
     res.status(200).json({success:true, data:people});
})


//! here we actully add the data
app.post('/api/people',(req,res)=>{
     const {name} = req.body
     if(!name){
          return res.status(400).json({success:false, msg:'please provide name value'})
     }
res.status(201).json({success:true,person:name});
})
// here by using post method we add the data  

// in postman we use post method in json format and send the data
// {
//      "name" : "pratik"
// } here name is the key as in post we send the data

//! postman is used to send the data and stored as array in the database data.js
app.post ('/api/people/postman',(req,res)=>{
const {name} = req.body;
if(!name){
     return res
     .status(400)
     .json({success:false, msg:'please provide name value'})
     }
res.status(201).json({success:true,data:[...people,name]});
})
 
//! PUT method IMP
app.put('/api/people/:id',(req,res)=>{
     const {id} = req.params;
     const {name} =req.body;
     // console.log(id,name);
     // res.status(200).send('Hello World');

     const person = people.find((person)=>person.id === Number(id));
     // .find return the first element that matches the condition
     if(!person){
          return
          res
          .status(400)
          .json({success:false,msg:`no person with id ${id}`});
     }
     
     //.map return a new array by applying a function to each element
    //? person{ id:1, name:'pratik'} having two parameters

     const newPeople = people.map((person)=>{
          if(person.id=== Number(id)){
               person.name = name; //update with the new name
          }
          return person; //return the updated person to the new array
     })
     res.status(200).json({success:true,data:newPeople});
})

//! DELETE method
app.delete('/api/people/:id',(req,res)=>{
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


//! run the server
app.listen(5000,()=>{
     console.log("server is running in the port 5000 ...");
})

               