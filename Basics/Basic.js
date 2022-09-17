const http = require ('http') // e.g of core module 
const fs = require('fs');

    // It will have two responses i.e  request: incoming message and response: that will be server response
    // short key words will be req and res req should always be first and res should be second
/*function rqListner( req ,res ){

    
}

http.createServer(rqListner);

// We can also use to create anonymous function i.e function without name

http.ServerResponse(function (req,res){

})*/

// Next Generation method i.e arrow head function and remove the function key word 

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
      res.write('<html>');
      res.write('<head><title>Enter Message</title><head>');
      res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
      res.write('</html>');
      return res.end();
    }
    if (url === '/message' && method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
       // fs.writeFileSync('message.txt', message); // Blocking Function
       fs.writeFileSync('message.txt', message);
      });
      res.statusCode = 302; // it is used to redirect user 
      res.setHeader('Location', '/');
      return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
  });

server.listen(3000);