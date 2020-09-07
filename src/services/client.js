import Service from './service';

class Client extends Service {
    static #baseUrl = 'students';

    static overview() {
        return this.getRequest(`${this.#baseUrl}/overview`);
    }

    static getGeneralInformation() {
        return this.getRequest(`${this.#baseUrl}/general-information`);
    }

    static putGeneralInformation(data) {
        return this.putRequest(`${this.#baseUrl}/general-information`, data);
    }

    static getPersonalDetails() {
        return this.getRequest(`${this.#baseUrl}/personal-details`);
    }

    static putPersonalDetails(data) {
        return this.putRequest(`${this.#baseUrl}/personal-details`, data);
    }
}

export default Client;
