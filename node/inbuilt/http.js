// creating apis with inbuilt package http .
// then we get to know the problem with inbuilt package http .
// and why need express framework .

// handling route with http is very difficult .
// so we have express to handle the routes .
// express is framework of nodejs to handle the routes.

let http = require('http');

/*
 creating servers :
 createServer takes two parameters :
 req : what we sends to servers ( params ,QueryParams ,Body).
 res : what server sends in returns .

 By three ways we can send data to servers
  req: params ,QueryParams ,Body
*/

 let server = http.createServer((req,res)=>{
    res.write(`<h1> Hello from http server .</h1>`)
    res.end();
 })
 server.listen(7000,(error)=>{
    if (error) throw error;
    console.log(`Server is running on port 7000`);
 })