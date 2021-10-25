import decode from 'jwt-decode';
//  function CurrentUser() {
//     let currentUser='';
//     let user = getToken()
//     if (user && user.token) {
//         currentUser =user.userRole
//         return currentUser;

//     } else {
//         return "user non specifiee"
//     }
// }
// export default CurrentUser

function loggedIn() {
    const token = this.getToken()
    // token exists && is not expired
    return !!token && !this.isTokenExpired(token)
}
function isTokenExpired(token) {
        try {            
            const decoded = decode(token.token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
                logout()
                return true;
            }
            else
                return false;
        }
        catch (err) {
            console.log("expired check failed! Line 42: AuthService.js");
            return false;
        }
    }
function setToken(idToken) {
    localStorage.setItem('user', idToken)
}
function getToken() {
    return JSON.parse(localStorage.getItem('user'))
}
function logout() {
    localStorage.removeItem('user');
}
export const  userService = {
    loggedIn:loggedIn,
    setToken:setToken,
    isTokenExpired:isTokenExpired,
    getToken:getToken,
    logout:logout,
};