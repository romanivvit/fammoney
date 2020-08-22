import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { RouterWrapper } from 'router-view-dom';
import { store } from './state/store';
import Router from './router';

class App extends Component {
    render() {
        return (
            // eslint-disable-next-line react/jsx-filename-extension
            <Provider store={store}>
                <RouterWrapper>
                    <Router />
                </RouterWrapper>
            </Provider>
        );
    }
}

export default App;
