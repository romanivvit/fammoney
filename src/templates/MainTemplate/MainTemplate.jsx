import React from 'react';
import {
    oneOfType, arrayOf, node, bool,
} from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './MainTemplate.css';

const MainTemplate = ({ children, footer, header }) => (
    <div className="MainTemplate">
        { header && <Header />}
        <main className="content">
            {children}
        </main>
        {footer && <Footer className="footer" />}
    </div>
);


MainTemplate.propTypes = {
    children: oneOfType([
        arrayOf(node),
        node,
    ]),
    header: bool,
    footer: bool,
};
MainTemplate.defaultProps = {
    children: null,
    header: true,
    footer: true,
};

export default MainTemplate;
