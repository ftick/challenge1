const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
socket.on('update', function(msg){
    console.log(msg)
});