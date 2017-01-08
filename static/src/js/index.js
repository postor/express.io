/**
 * index.js for browser
 */
var socket = require('socket.io-client')();
var $ = require('jquery')
$('form').submit(function(){
  var msg = $('#m').val()
  var userid = $('#userid').val()
  socket.emit('chat message', `user#${userid}:${msg}`);
  $('#m').val('');
  return false;
});
socket.on('connected',()=>{
  console.log('connected')
})
socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});