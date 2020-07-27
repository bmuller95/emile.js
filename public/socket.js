var socket = io();

const login = () => {
    let input = document.getElementById('username');
    let username = input ? input.value : 'user';
    let id = generate_id();

    socket.emit('login', {id, username});
    toWaitingRoom();
};