const toWaitingRoom = () => {
    let loginDiv = document.getElementById('login');
    loginDiv.parentNode.removeChild(loginDiv);
    let rootDiv =document.getElementById('root');
    rootDiv.innerHTML = /*html*/`
        <div id="users">
        
        
        </div>
    `
};