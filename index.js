//const http = require( 'http');

const express = require("express");
const bodyParser = require("body-parser")

const app = express(); // running express as function
app.use(bodyParser.urlencoded({extended:false}));

/*app.use( (req, res , next) => { 
 console.log ('We are in the middleware')
 next(); // next allows us to travel into the next middleware
} ); // use allows us to create an new middleware function it accepts arrays of request handlers*/

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action = "/product" method = "POST" ><input type= "text" name="title" ><button type="submit">Add Product</button></form>'
  );
});

app.use("/product", (req, res) => {
    
    console.log(req.body);
    res.redirect('/');
  });

app.use("/", (req, res, next) => {
  console.log("We are in another middleware");

  // sending response
  res.send("<h1> Hi, I am express </h1>");
});

/*const server = http.createServer(app); // app will work as valid request handler

server.listen (3000);*/

// another method

const server = app.listen(3000);
