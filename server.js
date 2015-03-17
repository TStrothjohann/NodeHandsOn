var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
  console.log("Server ON");

  var path = url.parse(request.url).pathname;

  switch(path){
    case '/':
    response.writeHead(200, {'content-Type': 'text/html'});
    response.write("Hello World - this is a hand written node server.")
      break;
    default:
      response.writeHead(404);
      response.write('404: nothing here...')
  }

  response.end();

});

server.listen(3000);
console.log("Server up and running.")
