import Service from './service';

class Authentication extends Service {
    static #baseUrl = 'auth';

    static login(data) {
        return this.postRequest(`${this.#baseUrl}/login`, data);
    }

    static register(data) {
        return this.postRequest(`${this.#baseUrl}/register`, data);
    }
}

export default Authentication;
