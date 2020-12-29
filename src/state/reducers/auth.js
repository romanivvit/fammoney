import { AUTH_STORAGE } from '../../constants/common/common';
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    LOGOUT_SUCCESS,
} from '../constatns/auth';

// eslint-disable-next-line no-undef
const authStorage = JSON.parse(localStorage.getItem(AUTH_STORAGE));

export const initialState = {
    isAuthenticated: !!authStorage,
    isLoading: false,
    error: undefined,
    tokenString: authStorage ? authStorage.tokenString : undefined,
    user: authStorage && authStorage.user ? { ...authStorage.user, name: `${authStorage.user.firstName} ${authStorage.user.lastName}` } : {},
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: undefined,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                error: undefined,
                tokenString: action.payload.tokenString,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: 'login.error',
                isLoading: false,
            };
        case GET_USER_START:
            return {
                ...state,
                isLoading: true,
                error: undefined,
                user: {},
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: {
                    id: action.payload.id,
                    name: `${action.payload.firstName} ${action.payload.lastName}`,
                    lastName: action.payload.lastName,
                    firstName: action.payload.firstName,
                    picture: action.payload.profilePictureBase64,
                },
            };
        case GET_USER_ERROR:
            return {
                ...state,
                error: action.payload.message,
                user: {},
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                tokenString: undefined,
                error: undefined,
                user: {},
            };
        default:
            return state;
    }
};
