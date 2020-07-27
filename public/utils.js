const generate_id = () => Math.random().toString(36).substr(2, 9);

// Retreive data from browser cache
function getLocalStorage( tag ) {
    if ( typeof( Storage ) !== "undefined" ) return JSON.parse( localStorage.getItem( tag ) );
};

// Save data to browser cache
function setLocalStorage( tag, obj ) {
    if ( typeof( Storage ) !== "undefined" ) localStorage.setItem( tag, JSON.stringify( obj ) );
};

// Delete data from browser cache
function delLocalStorage( tag ) {
    localStorage.removeItem( tag );
};