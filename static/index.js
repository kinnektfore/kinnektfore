$('document').ready(() => {

    var socket = io();
    socket.emit('join room', 1234);

    var i;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            console.log('cool')
        }
    }
})