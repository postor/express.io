var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//sass,browserfy,pug
require('./expressjs/init')(app)

//custom express
require('./expressjs')(app)

//custom socketio
require('./websocket')(io)

//start
var port = 80
server.listen(port,()=>{
  console.log(`service started at port ${port}`)
});

