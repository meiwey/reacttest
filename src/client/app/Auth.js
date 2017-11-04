class Auth {

authenticateUser(username) {
  	localStorage.setItem('user', username);
    localStorage.setItem('isUserAuthenticated', true);
  }

isUserAuthenticated() {
    return localStorage.getItem('isUserAuthenticated');
  }

deauthenticateUser() {
    localStorage.setItem('isUserAuthenticated', false);
    localStorage.setItem('user', '');
  }

}

export default Auth;