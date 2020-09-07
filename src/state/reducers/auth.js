import deepFreeze from 'deep-freeze';
import { LOGIN_SUCCESS } from '../constatns/auth';

const INITIAL_STATE = [];

const applyLoginSuccess = (payload) => deepFreeze(payload);

export const accountsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: return applyLoginSuccess(action.payload);
        default: return state;
    }
};
