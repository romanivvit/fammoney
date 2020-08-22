import React, { Component } from 'react';
import { Button as AntButton } from 'antd';
import { oneOfType, arrayOf, node } from 'prop-types';

class Button extends Component {
    render() {
        const { children } = this.props;

        return (
            <AntButton
                {...this.props}
            >
                {children}
            </AntButton>
        );
    }
}

Button.propTypes = {
    children: oneOfType([
        arrayOf(node),
        node,
    ]),
};
Button.defaultProps = {
    children: null,
};
export default Button;
