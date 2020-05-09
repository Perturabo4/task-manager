export default class AuthService {
    async sighnUp(email, password, token=true) {

        const registerData = {
            email,
            password,
            returnSecureToken: token
        }

        try {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(registerData)
            });
        } catch (e) {
            throw new Error(e);
        }
        
    }
}
