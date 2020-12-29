import React from 'react';
import { useDispatch } from 'react-redux';
import WelcomePage from '../../components/WelcomePage/WelcomePage';
import Authentication from '../../../../services/authentication';
import { AUTH_STORAGE } from '../../../../constants/common/common';
import Service from '../../../../services/service';
import {
    doLoginError,
    doLoginStart,
    doLoginSuccess,
    getUser,
} from '../../../../state/actions/auth';

function WelcomePageContainer() {
    const dispatch = useDispatch();

    async function login(data) {
        dispatch(doLoginStart());
        console.log(data);
        try {
            const { data: loginResponse } = await Authentication.login(data);

            // eslint-disable-next-line no-undef
            localStorage.setItem(AUTH_STORAGE, JSON.stringify(loginResponse));
            Service.setConfiguration({ jwt: loginResponse.tokenString });
            setTimeout(async () => {
                await getUser(dispatch);
            }, 0);

            return dispatch(doLoginSuccess(loginResponse));
        } catch (error) {
            return dispatch(doLoginError(error));
        }
    }
    const signup = () => {
        console.log('signup success');
    };

    return (
        <WelcomePage signup={signup} login={login} />
    );
}


export default WelcomePageContainer;
