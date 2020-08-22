import React, { Component } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import './GridContent.less';

class GridContent extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="GridContent">
                {children}
            </div>
        );
    }
}


GridContent.propTypes = {
    children: oneOfType([
        arrayOf(node),
        node,
    ]),
};
GridContent.defaultProps = {
    children: null,
};

export default GridContent;
