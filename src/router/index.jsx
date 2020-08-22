import React, { Component, Fragment } from 'react';
import RouterView from 'router-view-dom';

import routers from './routers';

class Router extends Component {
    render() {
        return (
            <Fragment>
                <RouterView routers={routers} />
            </Fragment>
        );
    }
}


export default Router;
