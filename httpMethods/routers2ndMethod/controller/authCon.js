//controller for auth router


//! Autho Router
const userLogin = (req,res)=>{
     const {name} = req.body; // thats the reason we use post method
     if(name){
          return res.status(200).send(`Welcome ${name}, welcome to the home page`);
     }else{
          return res.status(401).send('Please Provide Credentials !');
     }  
}

module.export = userLogin ;
