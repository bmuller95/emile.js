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

    socket.on('login', ({id, username}) => {
        socket.user = {id, username};
        let users = get_users();
        io.emit('users', users);
    });

    socket.on('logout', (user) => {
        console.log(`${user.username} logged out`);
        let users = get_users();
        users = users.filter((obj) => {
            return obj.id !== user.id;
          });
        io.emit('users', users);
    });

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
        let users = get_users();
        io.emit('users', users);
    });
});


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});


function get_users() {
    let clients = io.sockets.clients().connected;
    let sockets = Object.values(clients)
    return sockets.map(socket => socket.user)
};


