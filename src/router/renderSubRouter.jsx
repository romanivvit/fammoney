import React from 'react';
import PropTypes from 'prop-types';
import RenderRoutes from './index';

const PagesRouter = (props) => {
    const { route: { routes } } = props;

    return (
        <RenderRoutes routers={routes} />
    );
};

PagesRouter.propTypes = {
    route: PropTypes.shape({
        routes: PropTypes.arrayOf(PropTypes.shape({
            path: PropTypes.string,
            strict: PropTypes.bool,
            component: PropTypes.node,
        })),
    }),
};
PagesRouter.defaultProps = {
    route: {
        routes: null,
    },
};

export default PagesRouter;
