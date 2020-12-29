import React, { Suspense, useReducer } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './state/store';
import RenderRoutes from './router';
import routers from './router/routers';
import WelcomePage from './pages/Authentication/components/WelcomePage/WelcomePage';
import { initialState, authReducer } from './state/reducers/auth';
import { setInterceptors } from './interceptors';

const App = () => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    setInterceptors(process.env.REACT_APP_BASE_URL, dispatch);

    return (
        <Provider store={store}>
            <Suspense fallback={<WelcomePage />}>
                <BrowserRouter>
                    <RenderRoutes routers={routers(state.IsAuthenticated)} />
                </BrowserRouter>
            </Suspense>
        </Provider>
    );
};

export default App;
