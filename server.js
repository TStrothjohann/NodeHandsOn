var server = require('express')();
var http = require('http').createServer(server);

server.get('/', function(request, response){
  response.send('<h1>Hello and Welcome on my Express server</h1>')
});

http.listen(3000, function(){
  console.log('Listening on port 3000')
});
