const express = require('express');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http);

const port = process.env.PORT || 3000 ;

http.listen(port, () => {
    console.log(`server is listening on ${port}`);
});

io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);

    socket.on('login', (data) => {
        socket.user = data;
        emit_users();
    });

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
        emit_users();
    });
});


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});


function get_users() {
    let clients = io.sockets.clients().connected;
    let sockets = Object.values(clients)
    return sockets.map(element => element.user)
};

function emit_users(){
    let users = get_users();
    io.emit('users', users);
}
