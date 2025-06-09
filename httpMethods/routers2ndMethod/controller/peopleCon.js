//controller is used to clean of the code and make it more readable

//import the data from the data.js
let {people} = require('../data');

//!  get method
const getPeople = (req,res)=>{
     res.status(200).json({success:true, data:people});
}


//! post method
const createPeople = (req,res)=>{
     const {name} = req.body
     if(!name){
          return res.status(400).json({success:false, msg:'please provide name value'})
     }
res.status(201).json({success:true,person:name});
}
//! post method 
const createPeoplePostman = (req,res)=>{
const {name} = req.body;
if(!name){
     return res
     .status(400)
     .json({success:false, msg:'please provide name value'})
     }
res.status(201).json({success:true,data:[...people,name]});
}

//! put method
const updatePeople = (req,res)=>{
     const {id} = req.params;
     const {name} =req.body;

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
}

//! delete method
const deletePeople = (req,res)=>{
     const {id} = req.params;
     const person = people.find((person)=> person.id === Number(id));

     if(!person){
          return res
          .status(400)
          .json({success: false,msg:`No person with id ${id}`});
     }
     const newPeople = people.filter((person)=>person.id !== Number(id));
     res.status(200).json({success:true,data:newPeople});
}


//!exports

module.exports = {
     getPeople,
     createPeople,
     createPeoplePostman,
     updatePeople,
     deletePeople
}; //exports the functions in obj form