var socket = io();

const verify_user = () => {
    let cache = getLocalStorage('emile');
    if (!cache) return;
    socket.emit('login', cache);
    toWaitingRoom();
};

verify_user();

const login = () => {
    let input = document.getElementById('username');
    let username = input ? input.value : 'user';
    let id = generate_id();

    setLocalStorage('emile', {id, username});

    socket.emit('login', {id, username});
    toWaitingRoom();
};

socket.on('users', (users) => {
    update_users(users);
});

function update_users(users) {
    let usersDiv = document.getElementById('users');
    usersDiv.innerHTML = "";
    users.forEach( ({id, username}) => {
        usersDiv.innerHTML += `<p> 
            ${username}
        </p>`;
    });   
};
