import React from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
    <header className="Header">
        <Col className="LogoWrapper">
            <Link to="/">
                <img
                    src="../../../../goal.svg"
                    alt="main-logo"
                    style={{
                        height: '45px',
                        width: '45px',
                    }}
                />
                <h3 className="HeaderTitleWrapper">
                    Fammoney
                </h3>
            </Link>
        </Col>
        <Col className="LinkWrapper">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </Col>
    </header>
);


export default Header;
