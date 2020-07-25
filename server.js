const express = require('express');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http);

const port = process.env.PORT || 3000 ;

http.listen(port, () => {
    console.log(`server is listening on ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile('__dirname'+'./index.html');
})
