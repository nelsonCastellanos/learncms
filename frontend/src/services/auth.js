function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}


export function isAuthenticated() {
    const token = getCookie('token');
    return !!token;
}

export function authGuard(context, commands) {
    if (!isAuthenticated()) {
        return commands.redirect('/');
    }
    return undefined;
}
