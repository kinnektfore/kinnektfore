const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'));

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

var io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('a user connected');

    io.on('join room', (room_code) => {
        socket.join(room_code);

        console.log(socket);
    });

    io.on('create room', () => {
        let room_code = Math.floor((Math.random() * 100) + 1);

        socket.join(room_code);

        socket.on('peer_ready', () => {
            room_ready(socket);
        })
    });
});

function room_ready(socket) {

}
