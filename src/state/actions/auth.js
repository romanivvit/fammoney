import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    LOGOUT_SUCCESS,
} from '../constatns/auth';
import { AUTH_STORAGE } from '../../constants/common';
import Service from '../../services/service';
import Login from '../../services/login';
import Client from '../../services/client';

export const doAccountsFetchSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
});

// To be Changed
export function getUserStart() {
    return { type: GET_USER_START };
}

export function getUserSuccess(payload) {
    return { type: GET_USER_SUCCESS, payload };
}

export function getUserError(payload) {
    return { type: GET_USER_ERROR, payload };
}

// eslint-disable-next-line consistent-return
export async function getUser(dispatch) {
    dispatch(getUserStart());
    try {
        const { data: userResponse } = await Client.overview();
        // eslint-disable-next-line no-undef
        const info = JSON.parse(localStorage.getItem(AUTH_STORAGE));

        info.user = {
            id: userResponse.id,
            name: `${userResponse.firstName} ${userResponse.lastName}`,
            lastName: userResponse.lastName,
            firstName: userResponse.firstName,
            picture: userResponse.profilePictureBase64,
        };

        // eslint-disable-next-line no-undef
        localStorage.setItem(AUTH_STORAGE, JSON.stringify(info));


        return dispatch(getUserSuccess(userResponse));
    } catch (error) {
        console.log(error);
    }
}

export function loginStart() {
    return { type: LOGIN_START };
}

export function loginSuccess(payload) {
    return { type: LOGIN_SUCCESS, payload };
}

export function loginError(payload) {
    return { type: LOGIN_ERROR, payload };
}

// eslint-disable-next-line consistent-return
export async function login(dispatch, data) {
    dispatch(loginStart());
    try {
        const { data: loginResponse } = await Login.signIn(data);

        // eslint-disable-next-line no-undef
        localStorage.setItem(AUTH_STORAGE, JSON.stringify(loginResponse));
        Service.setConfiguration({ jwt: loginResponse.tokenString });
        setTimeout(async () => {
            await getUser(dispatch);
        }, 0);

        return dispatch(loginSuccess(loginResponse));
    } catch (error) {
        console.log(error);
    }
}

export function logoutSuccess() {
    return { type: LOGOUT_SUCCESS };
}

export function logout(dispatch) {
    return new Promise((resolve) => {
        // eslint-disable-next-line no-undef
        localStorage.removeItem(AUTH_STORAGE);
        dispatch(logoutSuccess());
        resolve();
    });
}
