const generate_id = () => Math.random().toString(36).substr(2, 9);


// Get, Set, Delete data from browser cache
function getLocalStorage( tag ) {
    if ( typeof( Storage ) !== "undefined" ) return JSON.parse( localStorage.getItem( tag ) );
};

function setLocalStorage( tag, obj ) {
    if ( typeof( Storage ) !== "undefined" ) localStorage.setItem( tag, JSON.stringify( obj ) );
};

function delLocalStorage( tag ) {
    localStorage.removeItem( tag );
};