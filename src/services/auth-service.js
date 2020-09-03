import { API_KEY, SIGHN_UP_URL, SIGHN_IN_URL } from "../constants";

export default class AuthService {
  async auth(email, password, isRegister) {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url = isRegister
      ? `${SIGHN_UP_URL}${API_KEY}`
      : `${SIGHN_IN_URL}${API_KEY}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(authData),
      });
      return response.json();
    } catch (e) {
      throw new Error(e);
    }
  }
}
