const authorize = (req,res,next)=>{
     const {user}= req.query;
     if(user && user === 'pratik'){
           req.user = {name:'pratik', id:24};
           next();
     }
     else{
          res.status(401).send('Unauthorized');
     }
}
module.exports = authorize;