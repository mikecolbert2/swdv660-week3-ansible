var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello World"
   response.end('Hello Professor Sindel\n it\'s Mike Colbert\'s page\n \n this is my week 3 Ansible assignment')
}).listen(3333)

// Console will print the message
console.log('Server running')
