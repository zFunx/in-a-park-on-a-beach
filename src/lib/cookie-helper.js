export function loginByCookie() {
    const cookieObj = {
        isLoggedIn: true
    }
    document.cookie = JSON.stringify(cookieObj);
}

export function logoutByCookie() {
    const cookieObj = {
        isLoggedIn: false,
    };
    document.cookie = JSON.stringify(cookieObj);
}