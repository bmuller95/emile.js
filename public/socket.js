var socket = io();

const verify_user = () => {
    let cache = getLocalStorage('emile');
    if (!cache) return;
    socket.emit('login', cache);
    renderLogged();
};

verify_user();

const login = () => {
    let input = document.getElementById('username');
    let username = input.value ? input.value : "user";
    let id = generate_id();

    setLocalStorage('emile', {id, username});

    socket.emit('login', {id, username});
    renderLogged();
};

const logout = () => {
    let cache = getLocalStorage('emile');
    if (!cache) return
    delLocalStorage('emile');
    socket.emit('logout',cache);
    renderLoggedOut();
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
