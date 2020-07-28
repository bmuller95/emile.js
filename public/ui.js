const renderLogged = () => {
    // let loginDiv = document.getElementById('login');
    // loginDiv.parentNode.removeChild(loginDiv);

    let loginDiv =document.getElementById('login');
    loginDiv.innerHTML = /*html*/`
        <button onclick="logout()"> Logout </button>
    `
};

const renderLoggedOut = () => {
    let loginDiv =document.getElementById('login');
    loginDiv.innerHTML = /*html*/`
        <input type="text" id="username" name="username" placeholder="enter your username">
        <br>
        <button onclick="login()"> Login </button>
    `;
};