import React, { Component } from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return (
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
                            Debby Club
                        </h3>
                    </Link>
                </Col>
                <Col className="LinkWrapper">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Col>
            </header>
        );
    }
}


export default Header;
