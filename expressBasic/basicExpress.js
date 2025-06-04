const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/about', (req, res) => {
  res.status(200).send('This is the about page');
});

app.all('*', (req, res) => {
  res.status(404).send('<h2>Resource Not Found!!</h2>');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});


//? This is a basic Express.js application that sets up a server
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
//app.all handles all the request methods