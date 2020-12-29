import axios from 'axios';

class Service {
    static #jwt = undefined;

    static #generalConfig = (isSecure) => ({
        headers: {
            ...(isSecure === true ? { Authorization: `Bearer ${Service.#jwt}` } : {}),
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    });

    static setConfiguration({ jwt }) {
        this.#jwt = jwt;
    }

    static getRequest(url, { isSecure } = { isSecure: true }) {
        return axios.get(url, Service.#generalConfig(isSecure));
    }

    static postRequest(url, data, { isSecure } = { isSecure: true }) {
        return axios.post(url, data, Service.#generalConfig(isSecure));
    }

    static putRequest(url, data, { isSecure } = { isSecure: true }) {
        return axios.put(url, data, Service.#generalConfig(isSecure));
    }

    static deleteRequest(url, { isSecure } = { isSecure: true }) {
        return axios.delete(url, Service.#generalConfig(isSecure));
    }
}

export default Service;
