import { LOGIN_SUCCESS } from '../constatns/auth';

export const doAccountsFetchSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
});
