import axios from 'axios';
import { logout } from './state/actions/auth';

export const setInterceptors = (baseURL, dispatch) => {
    axios.interceptors.request.use(
        (config) => {
            config.baseURL = `http://localhost:3001${baseURL}`;
            config.headers['Content-Type'] = 'application/json';
            config.headers.Accept = 'application/json';

            return config;
        },
    );
    axios.interceptors.response.use((response) => response, (error) => {
        if (error.response.status === 401) {
            logout(dispatch);
        }
    });
};
