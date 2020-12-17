var socket = io();

socket.emit('join room', 1234);
$('document').ready(() => {
    var i;
    for (i = 0; i < 4; i++) {
        console.log('cool')
    }
})
