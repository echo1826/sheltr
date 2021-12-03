import decode from 'jwt-decode';

class AuthService {
    //Saves user token
    login(tokenId) {
        localStorage.setItem('id_token', tokenId);
        
        window.location.assign('/');
    }
    //deletes user token
    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
    //get user token from localstorage
    getToken() {
        return localStorage.getItem('token_id');
    }

    checkTokenExpiration(token) {
        try {
            const decoded = decode(token);

            if(decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } catch(err) {
            return false;
        }
    }

    getProfileToken() {
        return decode(this.getProfileToken());
    }

    isLoggedIn() {
        const token = this.getToken();
        return !!token && !this.checkTokenExpiration(token);
    }
};

export default new AuthService();