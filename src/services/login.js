import Service from './service';

class Login extends Service {
    static #baseUrl = 'identity';

    static login(data) {
        return this.postRequest(`${this.#baseUrl}/login`, data);
    }

    static register(data) {
        return this.postRequest(`${this.#baseUrl}/register`, data);
    }
}

export default Login;
