const express = require("express");
const bodyParser = require("body-parser");

const app = express(); // running express as function

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);

/*app.use( (req, res , next) => { 
 console.log ('We are in the middleware')
 next(); // next allows us to travel into the next middleware
} ); // use allows us to create an new middleware function it accepts arrays of request handlers*/
/*const server = http.createServer(app); // app will work as valid request handler

server.listen (3000);*/

// another method

const server = app.listen(3000);
