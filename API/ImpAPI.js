const express = require('express');
const app = express();

// Assuming Products is an array of objects imported from './data'
const {products} = require('./data'); // imp as array of objects

// Home page route
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});



//! Products route: Return only id, name, and image for each product
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product; // Destructure the product object
    return { id, name, image }; 
  });
  res.json(newProducts);
});

//? single product without params
//!there is a problem with this code, it will always return the first product
app.get('/api/products/1', (req,res)=>{
  const singleProduct = products.find((product)=> product.id===1);
  res.json(singleProduct);
})

//! use the param and exract id from the request
app.get('/api/products/:productID',(req,res)=>{
  console.log(req.params);
  const {productID} = req.params; // Extract iD from the request as string
  const singleProduct = products.find((product)=> product.id === Number(productID)); // Convert string to number

  if (!singleProduct){
    return res.status(404).send('Product Not Found !!');
  }
  return res.json(singleProduct);
})

//! Route String Parameters
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
  console.log(req.params);
  //Exam : { productID: '2', reviewID: 'abs' }

  res.send('Hello world');
  //? here reviews is not a string parameter 
})

//? Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});




//? The product parameter is necessary because map needs to provide the callback function with the current element to work with. Without it, the callback wouldn’t know which object to process.

//?This allows you to transform each product object individually (e.g., selecting specific properties or modifying values).