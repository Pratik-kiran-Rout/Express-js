//! API - JSON 
//! Send DATA 
//! RES.JSON()
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
res.json([{'Name': 'pratik','age':19},{'Name':'prabhu','age':20}]);
})

app.listen(5000,()=>{
     console.log('Server is running in the port 5000...');
});
