var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

let nsp = io.of('/tester')
nsp.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
      for(let iteration = 0; iteration < 100; iteration++){
        console.log(`iteration - ${iteration}`);
            if (msg.includes('volatile')){
              socket.volatile.emit('test', {iteration})
            } else {
              socket.emit('test', {iteration})
            }
        }
        io.of('/tester').emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});