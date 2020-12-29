import React from 'react';
import { useDispatch } from 'react-redux';
import WelcomePage from '../../components/WelcomePage/WelcomePage';
import Authentication from '../../../../services/authentication';
import { AUTH_STORAGE } from '../../../../constants/common/common';
import Service from '../../../../services/service';
import {
    doLoginError,
    doLoginStart,
    doLoginSuccess, doRegisterError, doRegisterStart, doRegisterSuccess,
    getUser,
} from '../../../../state/actions/auth';

function WelcomePageContainer() {
    const dispatch = useDispatch();

    async function login(data) {
        dispatch(doLoginStart());
        try {
            const { data: loginResponse } = await Authentication.login(data);

            // eslint-disable-next-line no-undef
            localStorage.setItem(AUTH_STORAGE, JSON.stringify(loginResponse.jwtToken));
            Service.setConfiguration({ jwt: loginResponse.jwtToken });
            setTimeout(async () => {
                await getUser(dispatch);
            }, 0);

            return dispatch(doLoginSuccess(loginResponse));
        } catch (error) {
            return dispatch(doLoginError(error));
        }
    }
    async function register(data) {
        dispatch(doRegisterStart());
        try {
            const { data: userResponse } = await Authentication.register(data);
            // eslint-disable-next-line no-undef
            const info = JSON.parse(localStorage.getItem(AUTH_STORAGE));

            info.user = {
                id: userResponse.id,
                name: userResponse.name,
                email: userResponse.email,
            };

            // eslint-disable-next-line no-undef
            localStorage.setItem(AUTH_STORAGE, JSON.stringify(info));


            return dispatch(doRegisterSuccess(userResponse));
        } catch (error) {
            return dispatch(doRegisterError(error));
        }
    }

    return (
        <WelcomePage register={register} login={login} />
    );
}


export default WelcomePageContainer;
