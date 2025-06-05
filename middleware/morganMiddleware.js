//morgan is a third-party middleware that is used for logging HTTP requests
// it is a popular middleware that is used in many express applications

const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use([logger,authorize]);

//home page
app.get('/',(req,res)=>{
     res.send('HomePage');
})

//about page
app.get('/about',(req,res)=>{
     res.send('About Page');
})

app.listen(5000,()=>{
     console.log('Server is running in the port 5000 ...');
})
