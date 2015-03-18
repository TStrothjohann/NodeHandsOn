var server = require('express')();
var http = require('http').createServer(server);
var io = require('socket.io')(http);


server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');


server.get('/', function(request, response){
  response.render('index')
});

server.get('/chat', function(request, response){
  response.sendFile(__dirname + '/websockets.html')
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

server.get('/page2', function(request, response){
  response.send("This is page 2")
});

http.listen(3000, function(){
  console.log('Listening on port 3000')
});
