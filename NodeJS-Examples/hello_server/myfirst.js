var http = require('http');
var dt = require('./mymodule');

console.log("Starting HTTP server on localhost, port 8080");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("<h1>Hello World!</h1> Here is the current date and time: " + dt.myDateTime());
}).listen(8080);


