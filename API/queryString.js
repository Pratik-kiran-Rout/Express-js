//! Query String Parameters line 50

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

//! single product without params
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

//! Query String Parameters and IMP 
//? v1 is meaning is 'version 1' and it is used to differentiate between different versions of the API

app.get('/api/v1/products',(req,res)=>{
     console.log(req.query);
     // exam : '/api/v1/products?name=pratik&age=19'
     // it will return a query object like : { 'name}:'pratik','age' :19}
     // res.send('Hello World');
     
     const {search , limit} = req.query; // Extracting query parameters
     let sortedProducts = [... products]; //! Create a copy of the products array
     
     if(search){
          sortedProducts = sortedProducts.filter((product)=>{
               return product.name.startsWith(search);
               //it compare first strings 
          })
     }
     if(limit){
          return sortedProducts = sortedProducts.slice(0,Number(limit)); // Limit the number of products returned
     }
     //empty array
     if(sortedProducts.length < 1){
          // res.status(200).send('No product matched !! '); //error
          return res.status(200).json({success:true,data:[]});

          // Return an empty array with success status
          // if i dont write the return it will confuse with next tine of the code are give the error so we use 'return' 
          // always we get one res for a request
     }

     res.status(200).json(sortedProducts); // Return the filtered products

})


//? Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});

//! let is a block-scoped variable, meaning it is only accessible within the block it is defined in.
//? const is also a block-scoped variable, but it cannot be reassigned after it is defined. It is used for variables that should not change.
// ' slice ' is used to extract a section of a array and return a new array, without modifying the original array.