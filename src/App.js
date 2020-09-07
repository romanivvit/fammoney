import React, { Component, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './state/store';
import RenderRoutes from './router';
import routers from './router/routers';
import WelcomePage from './pages/Auth/WelcomePage/WelcomePage';

class App extends Component {
    render() {
        // const [state, dispatch] = useReducer(reducer, initialState);
        return (
            // eslint-disable-next-line react/jsx-filename-extension
            <Provider store={store}>
                <Suspense fallback={<WelcomePage />}>
                    <BrowserRouter>
                        <RenderRoutes routers={routers} />
                    </BrowserRouter>
                </Suspense>
            </Provider>
        );
    }
}

export default App;
