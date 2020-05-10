const API_KEY = 'AIzaSyDvGBvcbXs2jcQWEkCULRSIANtm52Q2F2c';

export default class AuthService {
    async auth(email, password, isRegister) {

        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        let url = isRegister 
                ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
                : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(authData)
            });

            return response.json();
        } catch (e) {
            throw new Error(e);
        }
    }
}
