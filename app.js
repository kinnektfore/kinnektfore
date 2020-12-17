const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'));

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

var io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('error: connection failed');
});