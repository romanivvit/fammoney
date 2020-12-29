import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    LOGOUT_SUCCESS,
} from '../constatns/auth';
import { AUTH_STORAGE } from '../../constants/common/common';
import Client from '../../services/client';

// Login Actions
export const doLoginStart = () => ({
    type: LOGIN_START,
});

export const doLoginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const doLoginError = (payload) => ({
    type: LOGIN_ERROR,
    payload,
});

// Register Actions
export const doRegisterStart = () => ({
    type: GET_USER_START,
});

export const doRegisterSuccess = (payload) => ({
    type: GET_USER_SUCCESS,
    payload,
});

export const doRegisterError = (payload) => ({
    type: GET_USER_ERROR,
    payload,
});

// Logout Actions
export const doLogoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

// TODO TO be removed
// eslint-disable-next-line consistent-return
export async function getUser(dispatch) {
    dispatch(doRegisterStart());
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


        return dispatch(doRegisterSuccess(userResponse));
    } catch (error) {
        return dispatch(doRegisterError(error));
    }
}

export function logout(dispatch) {
    return new Promise((resolve) => {
        // eslint-disable-next-line no-undef
        localStorage.removeItem(AUTH_STORAGE);
        dispatch(doLogoutSuccess());
        resolve();
    });
}
