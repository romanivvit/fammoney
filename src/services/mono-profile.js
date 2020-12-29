import axios from 'axios';
import Service from './service';

const virtualDirPath = 'https://api.monobank.ua';

class monoBank extends Service {
    getPersonalInfo() {
        const that = this;


        return new Promise(((resolve, reject) => {
            axios.get(`${virtualDirPath}/personal/client-info`,
                { ...that.generalHeaders })
                .then((response) => {
                    resolve(response);
                })
                .catch((reason) => {
                    reject(reason);
                });
        }));
    }

    getWebHook() {
        const that = this;


        return new Promise(((resolve, reject) => {
            axios.post(`${virtualDirPath}/personal/webhook`,
                '', { ...that.generalHeaders })
                .then((response) => {
                    resolve(response);
                })
                .catch((reason) => {
                    reject(reason);
                });
        }));
    }

    // eslint-disable-next-line class-methods-use-this
    getBankCurrency() {
        return new Promise(((resolve, reject) => {
            axios.get(`${virtualDirPath}/bank/currency`)
                .then((response) => {
                    resolve(response);
                })
                .catch((reason) => {
                    reject(reason);
                });
        }));
    }
}

// eslint-disable-next-line new-cap
export default new monoBank();
