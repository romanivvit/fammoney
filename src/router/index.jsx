import React from 'react';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import {
    Redirect, Route, Router, Switch,
} from 'react-router-dom';

export const history = createBrowserHistory();

const renderComponent = (route, props, extraProps) => (
    <route.component {...props} {...extraProps} route={route} />
);

export const next = (path) => (
    path || true
);

const RenderRoutes = ({ routers }, { extraProps = {} }) => (routers
    ? (
        <Router history={history}>
            <Switch>
                {routers && routers.map((route, i) => (
                    <Route
                        key={route.key || i}
                        path={route.path}
                        exact={route.exact}
                        strict={route.strict}
                        render={(props) => {
                            const { before } = route;

                            if (Object.prototype.hasOwnProperty.call(route, 'before')
                            && typeof before === 'function') {
                                const result = before();

                                if (typeof result === 'string') {
                                    return <Redirect to={result} />;
                                }

                                return renderComponent(route, props, extraProps);
                            }

                            return renderComponent(route, props, extraProps);
                        }}
                    />
                ))}
            </Switch>
        </Router>
    ) : null);

RenderRoutes.propTypes = {
    routers: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        path: PropTypes.string,
        exact: PropTypes.bool,
        before: PropTypes.func,
    })).isRequired,
};

export default RenderRoutes;
