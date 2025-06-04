const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('./public'));

//! app.get('/',(req,res)=>{
      // res.sendFile(path.resolve(__dirname,'./navbar/index.html'));
//      //! IMP 
//      const parentDir = path.resolve(__dirname,'../navbar');
//      console.log(parentDir);
//      res.sendFile(path.join(parentDir,'index.html'));
// })

//! adding to static assets () public folder kind of SSR
//! SSR (server-side rendering) is not used here, we are just serving static files from the public folder

app.all('*',(req,res)=>{
     res.status(404).send('<h2>Resource Not Found!!</h2>');
})

app.listen(5000,(()=>{
     console.log('Server is running on the port 5000 ...');
}))


