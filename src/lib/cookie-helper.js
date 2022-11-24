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

export function checkIfLoggedIn(reqHeaders) {
    const cookie = reqHeaders.get("cookie");
    const cookieObj = JSON.parse(cookie);
    const isLoggedIn = cookieObj ? cookieObj.isLoggedIn : false;

    return isLoggedIn;
}