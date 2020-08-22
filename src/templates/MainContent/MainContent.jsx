import React, { Component } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './MainContent.less';

class MainContent extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="MainContent">
                <Header />
                <main className="content">
                    {children}
                </main>
                <Footer className="footer" />
            </div>
        );
    }
}


MainContent.propTypes = {
    children: oneOfType([
        arrayOf(node),
        node,
    ]),
};
MainContent.defaultProps = {
    children: null,
};

export default MainContent;
